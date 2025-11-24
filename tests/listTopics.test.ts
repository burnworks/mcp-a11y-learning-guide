import { describe, it, expect } from "vitest";
import { listAvailableTopics } from "../src/tools/listTopics.js";
import { TopicMapping } from "../src/types/mapping.js";

const mapping: TopicMapping = {
  topic: "フォーム",
  keywords: ["フォーム"],
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
  learning_path: "テスト用",
};

describe("listAvailableTopics", () => {
  it("includes topic name and brief description", () => {
    const res = listAvailableTopics([mapping]);
    expect(res).toContain("フォーム");
    expect(res).toContain("入力前に必要情報を提示");
  });
});
