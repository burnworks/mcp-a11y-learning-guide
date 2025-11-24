import { describe, it, expect } from "vitest";
import { loadAllMappings } from "../src/mappings/loader.js";
import { getWcagCriterion } from "../src/tools/getCriterion.js";

describe("getWcagCriterion supplemental output", () => {
  it("includes supplemental section when MD has extra items beyond YAML", async () => {
    const mappings = await loadAllMappings();
    const output = getWcagCriterion("1.1.1", mappings);

    // 補足セクションが付与されていることを確認（未収載の達成方法候補）
    expect(output).toContain("補足（未収載の達成方法候補）");
  });
});
