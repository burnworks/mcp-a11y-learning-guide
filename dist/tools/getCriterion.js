import { loadMdSupplementIndex } from "../mappings/mdSupplement.js";
const newline = "\n";
function locateCriterion(id, mappings) {
    const target = id.trim();
    for (const mapping of mappings) {
        const match = mapping.references.criteria.find((c) => c.id === target);
        if (match) {
            return { mapping, criterion: match };
        }
    }
    return null;
}
function formatTechniques(techniques) {
    if (!techniques.length)
        return "（なし）";
    return techniques
        .map((t) => {
        const lines = [`- ${t.id}: ${t.title}`, `  ${t.url}`];
        if (t.url_ja)
            lines.push(`  （日本語）${t.url_ja}`);
        return lines.join(newline);
    })
        .join(newline);
}
function formatFailures(failures) {
    if (!failures.length)
        return "（なし）";
    return failures
        .map((f) => {
        const lines = [`- ${f.id}: ${f.title}`, `  ${f.url}`];
        if (f.url_ja)
            lines.push(`  （日本語）${f.url_ja}`);
        return lines.join(newline);
    })
        .join(newline);
}
export function getWcagCriterion(criterionId, mappings) {
    const supplementIndex = loadMdSupplementIndex();
    const found = locateCriterion(criterionId, mappings);
    if (!found) {
        return [
            `指定された達成基準 (${criterionId}) は現在のマッピングでは見つかりませんでした。`,
            "利用可能なトピックを確認のうえ、関連トピックから再度お試しください。",
        ].join(newline + newline);
    }
    const { mapping, criterion } = found;
    const techniques = formatTechniques(mapping.references.techniques);
    const failures = formatFailures(mapping.references.failures);
    const lines = [
        `📌 **WCAG ${criterion.id} ${criterion.title}** [レベル${criterion.level}]`,
        "",
        "**WCAG原文**",
        criterion.wcag_url,
        ...(criterion.wcag_url_ja ? [`（日本語）${criterion.wcag_url_ja}`] : []),
        "",
        "**Understanding（解説）**",
        criterion.understanding_url,
        ...(criterion.understanding_url_ja ? [`（日本語）${criterion.understanding_url_ja}`] : []),
        "",
        "**関連する達成方法**",
        techniques,
        "",
        "**関連する失敗例**",
        failures,
    ];
    const supplement = supplementIndex.get(criterion.id);
    if (supplement) {
        const existingTechIds = new Set(mapping.references.techniques.map((t) => t.id));
        const existingFailIds = new Set(mapping.references.failures.map((f) => f.id));
        const extraTech = supplement.techniques.filter((t) => !existingTechIds.has(t.id));
        const extraFail = supplement.failures.filter((f) => !existingFailIds.has(f.id));
        if (supplement.understandingUrl && supplement.understandingUrl !== criterion.understanding_url_ja) {
            lines.push("", "**補足（Understanding 和訳リンク）**", supplement.understandingUrl);
        }
        if (extraTech.length) {
            lines.push("", "**補足（未収載の達成方法候補）**", extraTech.map((t) => `- ${t.id}: ${t.title}\n  ${t.url}`).join(newline));
        }
        if (extraFail.length) {
            lines.push("", "**補足（未収載の失敗例候補）**", extraFail.map((f) => `- ${f.id}: ${f.title}\n  ${f.url}`).join(newline));
        }
    }
    if (mapping.related_topics && mapping.related_topics.length > 0) {
        lines.push("", "🤝 関連トピック", mapping.related_topics.map((t) => `- ${t}`).join(newline));
    }
    lines.push("", `ℹ️ この達成基準についてさらに深掘りする場合は「${mapping.topic}」トピックで質問してください。`);
    return lines.join(newline);
}
