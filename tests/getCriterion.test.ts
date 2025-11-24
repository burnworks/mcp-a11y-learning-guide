import { describe, it, expect } from "vitest";
import { getWcagCriterion } from "../src/tools/getCriterion.js";
import { TopicMapping } from "../src/types/mapping.js";

const mapping: TopicMapping = {
  topic: "リンクテキスト",
  keywords: ["リンク"],
  references: {
    criteria: [
      {
        id: "2.4.4",
        level: "A",
        title: "リンクの目的（コンテキスト内）",
        wcag_url: "https://www.w3.org/TR/WCAG21/#link-purpose-in-context",
        wcag_url_ja: "https://waic.jp/translations/WCAG21/#link-purpose-in-context",
        understanding_url: "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context",
        understanding_url_ja:
          "https://waic.jp/translations/WCAG21/Understanding/link-purpose-in-context",
        priority: "must-read",
        description: "リンクテキストの基本要件",
      },
    ],
    techniques: [
      {
        id: "H30",
        title: "リンクの目的を説明するリンクテキストを提供する",
        url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H30",
        url_ja: "https://waic.jp/translations/WCAG21/Techniques/html/H30",
        type: "html",
        priority: "high",
      },
    ],
    failures: [
      {
        id: "F84",
        title: "リンクテキストがリンクの目的を説明していない",
        url: "https://www.w3.org/WAI/WCAG21/Failures/F84",
        url_ja: "https://waic.jp/translations/WCAG21/Techniques/failures/F84",
        priority: "high",
      },
    ],
  },
  learning_path: "テスト用",
  related_topics: ["images"],
};

describe("getWcagCriterion", () => {
  it("criteria with JP URLs, techniques, failures, and related topics are shown", () => {
    const res = getWcagCriterion("2.4.4", [mapping]);
    expect(res).toContain("WCAG 2.4.4 リンクの目的（コンテキスト内）");
    expect(res).toContain("waic.jp"); // JP URL present
    expect(res).toContain("H30"); // technique ID
    expect(res).toContain("F84"); // failure ID
    expect(res).toContain("関連トピック");
    expect(res).toContain("images");
  });

  it("returns guidance when not found", () => {
    const res = getWcagCriterion("9.9.9", [mapping]);
    expect(res).toContain("見つかりません");
  });
});
