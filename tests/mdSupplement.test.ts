import { describe, it, expect } from "vitest";
import { loadMdSupplementIndex } from "../src/mappings/mdSupplement.js";

describe("mdSupplement", () => {
  it("parses MD files and exposes entries", () => {
    const index = loadMdSupplementIndex();
    expect(index.size).toBeGreaterThan(0);

    const entry = index.get("1.1.1");
    expect(entry).toBeTruthy();
    expect(entry?.techniques.length ?? 0).toBeGreaterThan(0);
  });
});
