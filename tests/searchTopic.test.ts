import { describe, it, expect } from "vitest";
import { searchAccessibilityTopic } from "../src/tools/searchTopic.js";
import { TopicMapping } from "../src/types/mapping.js";

const mockMappings: TopicMapping[] = [
  {
    topic: "リンクテキスト",
    keywords: ["リンク", "link", "アンカーテキスト", "テキスト"],
    references: {
      criteria: [
        {
          id: "2.4.4",
          level: "A",
          title: "リンクの目的（コンテキスト内）",
          wcag_url: "https://www.w3.org/TR/WCAG21/#link-purpose-in-context",
          understanding_url: "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context",
          priority: "must-read",
          description: "リンクテキストの基本要件",
        },
      ],
      techniques: [],
      failures: [],
    },
    learning_path: "テスト用の学習パス",
    related_topics: [],
  },
  {
    topic: "フォーム",
    keywords: ["フォーム", "form", "テキスト"],
    references: {
      criteria: [
        {
          id: "3.3.2",
          level: "A",
          title: "ラベル又は説明",
          wcag_url: "https://www.w3.org/TR/WCAG21/#labels-or-instructions",
          understanding_url: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions",
          priority: "must-read",
          description: "入力前に必要情報を提示",
        },
      ],
      techniques: [],
      failures: [],
    },
    learning_path: "フォームの学習パス",
    related_topics: [],
  },
];

describe("searchAccessibilityTopic", () => {
  it("完全一致でトピックを見つける", async () => {
    const result = await searchAccessibilityTopic("リンク", "all", mockMappings);
    expect(result).toContain("リンクテキスト");
    expect(result).toContain("2.4.4");
  });

  it("部分一致でトピックを見つける", async () => {
    const result = await searchAccessibilityTopic("アンカー", "all", mockMappings);
    expect(result).toContain("リンクテキスト");
  });

  it("マッチしない場合は案内を表示", async () => {
    const result = await searchAccessibilityTopic("存在しないキーワード", "all", mockMappings);
    expect(result).toContain("該当するトピックが見つかりませんでした");
  });

  it("must-read フィルターが機能する", async () => {
    const result = await searchAccessibilityTopic("リンク", "must-read", mockMappings);
    expect(result).toContain("必読ガイド");
    expect(result).toContain("もっと詳しく知りたい場合");
  });

  it("複数候補がある場合に選択を促す", async () => {
    const multi = await searchAccessibilityTopic("テキスト", "all", mockMappings);
    expect(multi).toContain("候補のトピックが複数見つかりました");
    expect(multi).toContain("リンクテキスト");
    expect(multi).toContain("フォーム");
  });
});
