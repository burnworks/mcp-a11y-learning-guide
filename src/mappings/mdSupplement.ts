import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

type SupplementItem = {
  id: string;
  title: string;
  url: string;
};

export type SupplementEntry = {
  understandingTitle?: string;
  understandingUrl?: string;
  techniques: SupplementItem[];
  failures: SupplementItem[];
};

export type SupplementIndex = Map<string, SupplementEntry>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MD_FILES = [
  path.resolve(__dirname, "../../mappings/WCAG21_Understanding_and_Techniques_ja.md"),
  path.resolve(__dirname, "../../mappings/WCAG22_Understanding_and_Techniques_ja.md"),
];

let cachedIndex: SupplementIndex | null = null;

function parseMd(filePath: string): SupplementIndex {
  const index: SupplementIndex = new Map();
  if (!fs.existsSync(filePath)) return index;

  const lines = fs.readFileSync(filePath, "utf-8").split(/\r?\n/);
  let currentSc: string | null = null;

  for (const raw of lines) {
    const line = raw.trim();

    // SC heading: #### [1.1.1 ...](url)
    const h4 = line.match(/^####\s+\[(.+?)\]\((.+?)\)/);
    if (h4) {
      const label = h4[1];
      const url = h4[2];
      const idMatch = label.match(/(\d\.\d\.\d\d?)/);
      currentSc = idMatch ? idMatch[1] : null;
      if (currentSc) {
        const existing = index.get(currentSc) ?? {
          understandingTitle: undefined,
          understandingUrl: undefined,
          techniques: [],
          failures: [],
        };
        if (!existing.understandingUrl) {
          existing.understandingUrl = url;
          existing.understandingTitle = label;
        }
        index.set(currentSc, existing);
      }
      continue;
    }

    if (!currentSc) continue;

    // Bullet links under the current SC
    const bullet = line.match(/^-+\s?\[(.+?)\]\((.+?)\)/) || line.match(/^- \[(.+?)\]\((.+?)\)/);
    if (!bullet) continue;
    const label = bullet[1];
    const url = bullet[2];
    const idMatch = label.match(/^([A-Z]+[\d]{1,4})/);
    if (!idMatch) continue;
    const id = idMatch[1];
    const entry = index.get(currentSc);
    if (!entry) continue;
    const item: SupplementItem = { id, title: label, url };

    if (id.startsWith("F")) {
      if (!entry.failures.find((f) => f.id === id)) entry.failures.push(item);
    } else {
      if (!entry.techniques.find((t) => t.id === id)) entry.techniques.push(item);
    }
  }

  return index;
}

export function loadMdSupplementIndex(): SupplementIndex {
  if (cachedIndex) return cachedIndex;

  const merged: SupplementIndex = new Map();

  for (const file of MD_FILES) {
    const partial = parseMd(file);
    for (const [sc, entry] of partial.entries()) {
      const existing = merged.get(sc);
      if (!existing) {
        merged.set(sc, entry);
        continue;
      }
      // Merge techniques/failures, keep first understanding URL if already set.
      const techIds = new Set(existing.techniques.map((t) => t.id));
      const failIds = new Set(existing.failures.map((f) => f.id));
      for (const t of entry.techniques) {
        if (!techIds.has(t.id)) existing.techniques.push(t);
      }
      for (const f of entry.failures) {
        if (!failIds.has(f.id)) existing.failures.push(f);
      }
      if (!existing.understandingUrl && entry.understandingUrl) {
        existing.understandingUrl = entry.understandingUrl;
        existing.understandingTitle = entry.understandingTitle;
      }
    }
  }

  cachedIndex = merged;
  return merged;
}
