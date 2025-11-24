import { TopicMapping, Criterion, Technique, Failure } from "../types/mapping.js";
import { loadMdSupplementIndex } from "../mappings/mdSupplement.js";

export type PriorityFilter = "all" | "must-read" | "high-priority";

const newline = "\n";
const MAX_DESC_LENGTH = 50;

const lower = (value: string) => value.toLowerCase();
const normalize = (value: string) => lower(value.trim());

function overlapScore(a: string, b: string) {
  const na = normalize(a);
  const nb = normalize(b);
  if (!na.length || !nb.length) return 0;
  const minLen = Math.min(na.length, nb.length);
  const common = Math.min(minLen, longestCommonPrefix(na, nb));
  const ratio = common / Math.max(na.length, nb.length);
  return ratio >= 0.6 ? 1 : 0;
}

function longestCommonPrefix(a: string, b: string) {
  const len = Math.min(a.length, b.length);
  let i = 0;
  while (i < len && a[i] === b[i]) i += 1;
  return i;
}

function scoreMapping(query: string, mapping: TopicMapping) {
  const lowerQuery = normalize(query);
  let score = 0;

  for (const kw of mapping.keywords) {
    const lkw = normalize(kw);
    if (lkw === lowerQuery) {
      score += 3;
      continue;
    }
    if (lowerQuery.includes(lkw) || lkw.includes(lowerQuery)) {
      score += 2;
      continue;
    }
    score += overlapScore(lowerQuery, lkw);
  }

  return score;
}

function findMatchingTopics(query: string, mappings: TopicMapping[]): TopicMapping[] {
  const scored = mappings
    .map((m) => ({ mapping: m, score: scoreMapping(query, m) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map((s) => s.mapping);
}

function briefDescription(mapping: TopicMapping) {
  const first = mapping.references.criteria[0];
  return first?.description ? shorten(first.description) : mapping.topic;
}

function filterCriteria(criteria: Criterion[], priority: PriorityFilter) {
  if (priority === "must-read") {
    return criteria.filter((c) => c.priority === "must-read");
  }

  if (priority === "high-priority") {
    return criteria.filter((c) => c.priority === "must-read");
  }

  return criteria;
}

function sortByPriority<T extends { priority: Technique["priority"] }>(items: T[]) {
  const rank: Record<Technique["priority"], number> = { high: 0, medium: 1, low: 2 };
  return [...items].sort((a, b) => rank[a.priority] - rank[b.priority]);
}

function filterTechniques(techniques: Technique[], priority: PriorityFilter) {
  const sorted = sortByPriority(techniques);

  if (priority === "high-priority") {
    return sorted.filter((t) => t.priority === "high");
  }

  if (priority === "must-read") {
    // 必読で優先度の高い達成方法は優先表示
    const highs = sorted.filter((t) => t.priority === "high");
    if (highs.length) return highs.slice(0, 3);
    // 高優先度がない場合でも1つは表示して案内する
    return sorted.slice(0, 2);
  }

  return sorted;
}

function filterFailures(failures: Failure[], priority: PriorityFilter) {
  const sorted = sortByPriority(failures);

  if (priority === "high-priority") {
    return sorted.filter((f) => f.priority === "high");
  }

  if (priority === "must-read") {
    // 必読で優先度の高い失敗例は優先表示
    const highs = sorted.filter((f) => f.priority === "high");
    if (highs.length) return highs.slice(0, 3);
    // 高優先度がない場合でも1つは案内する
    return sorted.slice(0, 2);
  }

  return sorted;
}

function shorten(text: string) {
  if (!text) return "";
  return text.length <= MAX_DESC_LENGTH ? text : `${text.slice(0, MAX_DESC_LENGTH - 1)}…`;
}

function formatCriteria(criteria: Criterion[]) {
  if (criteria.length === 0) return "（見つかりませんでした）";

  return criteria
    .map((c) => {
      const lines = [
        `• WCAG ${c.id} ${c.title} [レベル${c.level}]`,
        `  ${c.wcag_url}`,
        `  → ${shorten(c.description)}`,
      ];

      if (c.wcag_url_ja) {
        lines.push(`  （日本語）${c.wcag_url_ja}`);
      }

      lines.push(`• Understanding ${c.id}`);
      lines.push(`  ${c.understanding_url}`);
      lines.push(`  → ${shorten(c.description)}`);

      if (c.understanding_url_ja) {
        lines.push(`  （日本語）${c.understanding_url_ja}`);
      }

      return lines.join(newline);
    })
    .join(newline + newline);
}

function formatTechniques(techniques: Technique[]) {
  if (techniques.length === 0) return "（見つかりませんでした）";

  return techniques
    .map((t) => {
      const lines = [`• ${t.id}: ${t.title}`, `  ${t.url}`];
      if (t.url_ja) lines.push(`  （日本語）${t.url_ja}`);
      if (t.applies_to?.length) {
        lines.push(`  対象: ${t.applies_to.join(" / ")}`);
      }
      return lines.join(newline);
    })
    .join(newline);
}

function formatFailures(failures: Failure[]) {
  if (failures.length === 0) return "（見つかりませんでした）";

  return failures
    .map((f) => {
      const lines = [`• ${f.id}: ${f.title}`, `  ${f.url}`];
      if (f.url_ja) lines.push(`  （日本語）${f.url_ja}`);
      if (f.applies_to?.length) {
        lines.push(`  対象: ${f.applies_to.join(" / ")}`);
      }
      return lines.join(newline);
    })
    .join(newline);
}

function formatRelatedTopics(related?: string[]) {
  if (!related || related.length === 0) return "（見つかりませんでした）";
  return related.map((topic) => `• ${topic}`).join(newline);
}

type SupplementItem = { id: string; title: string; url: string };

function collectSupplement(
  criterionIds: string[],
  existingTechIds: Set<string>,
  existingFailIds: Set<string>
): { tech: SupplementItem[]; fail: SupplementItem[] } {
  const index = loadMdSupplementIndex();
  const extraTech: SupplementItem[] = [];
  const extraFail: SupplementItem[] = [];

  for (const id of criterionIds) {
    const entry = index.get(id);
    if (!entry) continue;
    entry.techniques.forEach((t) => {
      if (!existingTechIds.has(t.id) && !extraTech.find((x) => x.id === t.id)) {
        extraTech.push({ id: t.id, title: t.title, url: t.url });
      }
    });
    entry.failures.forEach((f) => {
      if (!existingFailIds.has(f.id) && !extraFail.find((x) => x.id === f.id)) {
        extraFail.push({ id: f.id, title: f.title, url: f.url });
      }
    });
  }

  return { tech: extraTech, fail: extraFail };
}

function formatSupplement(items: SupplementItem[]) {
  if (!items.length) return "";
  return items.map((i) => `• ${i.id}: ${i.title}\n  ${i.url}`).join(newline);
}

export async function searchAccessibilityTopic(
  query: string,
  priorityFilter: PriorityFilter,
  mappings: TopicMapping[]
): Promise<string> {
  const matched = findMatchingTopics(query, mappings);

  if (matched.length === 0) {
    const available = mappings.map((m) => `• **${m.topic}**`).join(newline);
    return [
      "⚠️ 該当するトピックが見つかりませんでした。",
      "",
      "現在対応しているトピックは以下のとおりです:",
      "",
      available,
      "",
      "別のキーワードで試してみてください。",
      "例:「リンクテキスト」「画像の代替テキスト」「フォームのラベル」",
    ].join(newline);
  }

  if (matched.length > 1) {
    const options = matched
      .map((m, idx) => `${idx + 1}. **${m.topic}** - ${briefDescription(m)}`)
      .join(newline);
    return [
      "候補のトピックが複数見つかりました。",
      "",
      "以下から最も近いものを選んでください。",
      "",
      options,
    ].join(newline);
  }

  const mapping = matched[0];

  const filteredCriteria = filterCriteria(mapping.references.criteria, priorityFilter);
  const filteredTechniques = filterTechniques(mapping.references.techniques, priorityFilter);
  const filteredFailures = filterFailures(mapping.references.failures, priorityFilter);
  const supplement = collectSupplement(
    mapping.references.criteria.map((c) => c.id),
    new Set(mapping.references.techniques.map((t) => t.id)),
    new Set(mapping.references.failures.map((f) => f.id))
  );

  const titleSuffix =
    priorityFilter === "must-read"
      ? " - 必読ガイド"
      : priorityFilter === "high-priority"
      ? " - 重要なガイド"
      : "";

  const lines = [
    `📚 **${mapping.topic}**${titleSuffix}`,
    "",
    "【達成基準】",
    formatCriteria(filteredCriteria),
    "",
    "【達成方法】",
    formatTechniques(filteredTechniques),
    "",
    "【よくある失敗例】",
    formatFailures(filteredFailures),
    "",
    "---",
    "🧭 **推奨する学習の進め方**",
    mapping.learning_path.trim(),
  ];

  if (supplement.tech.length || supplement.fail.length) {
    lines.push("", "➕ **補足（未収載の候補）**");
    if (supplement.tech.length) {
      lines.push("・達成方法", formatSupplement(supplement.tech));
    }
    if (supplement.fail.length) {
      lines.push("・失敗例", formatSupplement(supplement.fail));
    }
  }

  if (mapping.related_topics && mapping.related_topics.length > 0) {
    lines.push("", "🤝 **関連トピック**", "このトピックは以下とも関連があります:", formatRelatedTopics(mapping.related_topics));
  }

  if (priorityFilter === "must-read") {
    lines.push("", "ℹ️ もっと詳しく知りたい場合は、フィルターを外して全件を確認してください。");
  } else if (priorityFilter === "high-priority") {
    lines.push("", "ℹ️ さらに詳しく見る場合は、フィルターを外してすべてのリソースを確認してください。");
  }

  lines.push("", "疑問点があれば、次の質問で詳しく聞いてください。");

  return lines.join(newline);
}
