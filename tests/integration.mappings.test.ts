import { describe, it, expect, beforeAll } from "vitest";
import { loadAllMappings } from "../src/mappings/loader.js";
import { searchAccessibilityTopic } from "../src/tools/searchTopic.js";
import { getWcagCriterion } from "../src/tools/getCriterion.js";
import type { TopicMapping } from "../src/types/mapping.js";

let mappings: TopicMapping[];

beforeAll(async () => {
  mappings = await loadAllMappings();
});

describe("integration: real mappings search", () => {
  it("リフローで 1.4.10 と JP訳が出る", async () => {
    const res = await searchAccessibilityTopic("リフロー", "all", mappings);
    expect(res).toContain("1.4.10");
    expect(res).toContain("waic.jp/translations/WCAG21/Understanding/reflow");
  });

  it("ターゲットサイズで 2.5.8 が出る", async () => {
    const res = await searchAccessibilityTopic("ターゲットサイズ", "all", mappings);
    expect(res).toContain("2.5.8");
  });

  it("視覚的提示で 1.4.8 が出る", async () => {
    const res = await searchAccessibilityTopic("視覚的提示", "all", mappings);
    expect(res).toContain("候補のトピックが複数見つかりました");
    expect(res).toContain("AAA達成基準（概要）");
  });

  it("ページの言語で 3.1.1 と JP訳が出る", async () => {
    const res = await searchAccessibilityTopic("ページの言語", "all", mappings);
    expect(res).toContain("3.1.1");
    expect(res).toContain("waic.jp/translations/WCAG21/Understanding/language-of-page");
  });

  it("閃光で 2.3.1 が出る", async () => {
    const res = await searchAccessibilityTopic("閃光", "all", mappings);
    expect(res).toContain("候補のトピックが複数見つかりました");
    expect(res).toContain("閃光と発作の回避");
  });
});

describe("integration: real mappings getCriterion", () => {
  it("2.4.4 で JP訳が併記される", () => {
    const res = getWcagCriterion("2.4.4", mappings);
    expect(res).toContain("waic.jp/translations/WCAG21/Understanding/link-purpose-in-context");
  });
});
