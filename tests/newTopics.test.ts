import { describe, it, expect } from "vitest";
import { searchAccessibilityTopic } from "../src/tools/searchTopic.js";
import { TopicMapping } from "../src/types/mapping.js";
import { getWcagCriterion } from "../src/tools/getCriterion.js";

const mappings: TopicMapping[] = [
  {
    topic: "リフローとテキスト間隔",
    keywords: ["リフロー", "text spacing"],
    references: {
      criteria: [
        {
          id: "1.4.10",
          level: "AA",
          title: "リフロー",
          wcag_url: "https://www.w3.org/TR/WCAG21/#reflow",
          understanding_url: "https://www.w3.org/WAI/WCAG21/Understanding/reflow",
          wcag_url_ja: "https://waic.jp/translations/WCAG21/#reflow",
          understanding_url_ja: "https://waic.jp/translations/WCAG21/Understanding/reflow",
          priority: "must-read",
          description: "横スクロールなしで再配置される",
        },
      ],
      techniques: [
        {
          id: "G204",
          title: "テキストを再配置できるようにする",
          url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G204",
          url_ja: "https://waic.jp/translations/WCAG21/Techniques/general/G204",
          type: "general",
          priority: "medium",
        },
      ],
      failures: [],
    },
    learning_path: "テスト用リフロー",
  },
  {
    topic: "読みやすさ (AAA)",
    keywords: ["AAA", "読みやすさ"],
    references: {
      criteria: [
        {
          id: "3.1.5",
          level: "AAA",
          title: "読みやすさ",
          wcag_url: "https://www.w3.org/TR/WCAG21/#reading-level",
          understanding_url: "https://www.w3.org/WAI/WCAG21/Understanding/reading-level",
          wcag_url_ja: "https://waic.jp/translations/WCAG21/#reading-level",
          understanding_url_ja: "https://waic.jp/translations/WCAG21/Understanding/reading-level",
          priority: "optional",
          description: "中学校低学年レベルで提供",
        },
      ],
      techniques: [
        {
          id: "G183",
          title: "特殊語や略語に説明を提供する",
          url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G183",
          url_ja: "https://waic.jp/translations/WCAG21/Techniques/general/G183",
          type: "general",
          priority: "medium",
        },
      ],
      failures: [
        {
          id: "F71",
          title: "難解語や略語に説明を提供していない",
          url: "https://www.w3.org/WAI/WCAG21/Failures/F71",
          url_ja: "https://waic.jp/translations/WCAG21/Techniques/failures/F71",
          priority: "medium",
        },
      ],
    },
    learning_path: "AAAの読みやすさを参照",
  },
  {
    topic: "タイムアウトと動き",
    keywords: ["タイムアウト", "時間制限"],
    references: {
      criteria: [
        {
          id: "2.2.1",
          level: "A",
          title: "タイミング可変",
          wcag_url: "https://www.w3.org/TR/WCAG21/#timing-adjustable",
          understanding_url: "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable",
          wcag_url_ja: "https://waic.jp/translations/WCAG21/#timing-adjustable",
          understanding_url_ja: "https://waic.jp/translations/WCAG21/Understanding/timing-adjustable",
          priority: "must-read",
          description: "制限時間を調整・延長できる",
        },
      ],
      techniques: [
        {
          id: "G4",
          title: "制限時間を延長・調整する仕組みを提供する",
          url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G4",
          url_ja: "https://waic.jp/translations/WCAG21/Techniques/general/G4",
          type: "general",
          priority: "high",
        },
      ],
      failures: [],
    },
    learning_path: "時間制限を調整する手段を確認",
  },
  {
    topic: "言語指定",
    keywords: ["ページの言語", "lang"],
    references: {
      criteria: [
        {
          id: "3.1.1",
          level: "A",
          title: "ページの言語",
          wcag_url: "https://www.w3.org/TR/WCAG21/#language-of-page",
          understanding_url: "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page",
          wcag_url_ja: "https://waic.jp/translations/WCAG21/#language-of-page",
          understanding_url_ja: "https://waic.jp/translations/WCAG21/Understanding/language-of-page",
          priority: "must-read",
          description: "ページの主要言語を指定",
        },
      ],
      techniques: [],
      failures: [],
    },
    learning_path: "lang指定を確認",
  },
  {
    topic: "閃光回避",
    keywords: ["閃光", "フラッシュ", "three flashes"],
    references: {
      criteria: [
        {
          id: "2.3.1",
          level: "A",
          title: "3回の閃光又は光度による閃光のしきい値以下",
          wcag_url: "https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold",
          understanding_url: "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold",
          wcag_url_ja: "https://waic.jp/translations/WCAG21/#three-flashes-or-below-threshold",
          understanding_url_ja: "https://waic.jp/translations/WCAG21/Understanding/three-flashes-or-below-threshold",
          priority: "must-read",
          description: "1秒間に3回を超える閃光を避ける",
        },
      ],
      techniques: [],
      failures: [],
    },
    learning_path: "閃光を避ける要件を確認",
  },
  {
    topic: "ターゲットサイズ",
    keywords: ["ターゲットサイズ", "target size"],
    references: {
      criteria: [
        {
          id: "2.5.8",
          level: "AA",
          title: "ターゲットサイズ（最小）",
          wcag_url: "https://www.w3.org/TR/WCAG22/#target-size-minimum",
          understanding_url: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum",
          wcag_url_ja: "https://waic.jp/translations/WCAG22/#target-size-minimum",
          understanding_url_ja: "https://waic.jp/translations/WCAG22/Understanding/target-size-minimum",
          priority: "must-read",
          description: "2.2の最小ターゲットサイズ",
        },
      ],
      techniques: [],
      failures: [],
    },
    learning_path: "ターゲットサイズの最小要件を確認",
  },
];

describe("searchAccessibilityTopic (new topics)", () => {
  it("リフローでAA基準とJP訳付きURLが出る", async () => {
    const res = await searchAccessibilityTopic("リフロー", "all", mappings);
    expect(res).toContain("1.4.10");
    expect(res).toContain("waic.jp/translations/WCAG21/Understanding/reflow");
  });

  it("AAA指定でも技法/失敗例が出る", async () => {
    const res = await searchAccessibilityTopic("読みやすさ", "all", mappings);
    expect(res).toContain("3.1.5");
    expect(res).toContain("G183");
    expect(res).toContain("F71");
  });

  it("must-readフィルターでも代表Tech/Failsが残る", async () => {
    const res = await searchAccessibilityTopic("読みやすさ", "must-read", mappings);
    expect(res).toContain("G183");
    expect(res).toContain("F71");
  });

  it("タイムアウトで2.2.1とJP訳が出る", async () => {
    const res = await searchAccessibilityTopic("タイムアウト", "all", mappings);
    expect(res).toContain("2.2.1");
    expect(res).toContain("waic.jp/translations/WCAG21/Understanding/timing-adjustable");
  });

  it("言語指定で3.1.1とJP訳が出る", async () => {
    const res = await searchAccessibilityTopic("ページの言語", "all", mappings);
    expect(res).toContain("3.1.1");
    expect(res).toContain("waic.jp/translations/WCAG21/Understanding/language-of-page");
  });

  it("閃光で2.3.1が出る", async () => {
    const res = await searchAccessibilityTopic("閃光", "all", mappings);
    expect(res).toContain("2.3.1");
    expect(res).toContain("waic.jp/translations/WCAG21/Understanding/three-flashes-or-below-threshold");
  });

  it("ターゲットサイズで2.5.8が出る", async () => {
    const res = await searchAccessibilityTopic("ターゲットサイズ", "all", mappings);
    expect(res).toContain("2.5.8");
    expect(res).toContain("waic.jp/translations/WCAG22/Understanding/target-size-minimum");
  });
});

describe("getWcagCriterion (JPリンク確認)", () => {
  it("JP訳が併記される", () => {
    const res = getWcagCriterion("1.4.10", mappings);
    expect(res).toContain("waic.jp/translations/WCAG21/Understanding/reflow");
  });
});
