import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "yaml";
import { validateMappingUrls } from "../utils/urlValidator.js";
import { TopicMapping } from "../types/mapping.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEFAULT_MAPPINGS_DIR = path.resolve(__dirname, "../../mappings");

const isYamlFile = (fileName: string) => /\.ya?ml$/i.test(fileName);

export async function loadMappingFile(filePath: string): Promise<TopicMapping> {
  const raw = await fs.readFile(filePath, "utf-8");
  return parse(raw) as TopicMapping;
}

export async function loadMappings(
  directory: string = DEFAULT_MAPPINGS_DIR
): Promise<TopicMapping[]> {
  return loadAllMappings(directory);
}

export async function loadAllMappings(
  directory: string = DEFAULT_MAPPINGS_DIR
): Promise<TopicMapping[]> {
  try {
    const entries = await fs.readdir(directory);
    const yamlFiles = entries.filter(isYamlFile);

    if (yamlFiles.length === 0) {
      throw new Error(`No mapping files found in ${directory}`);
    }

    const mappings: TopicMapping[] = [];

    for (const file of yamlFiles) {
      const filePath = path.join(directory, file);
      try {
        const raw = await fs.readFile(filePath, "utf-8");
        const parsed = parse(raw) as TopicMapping;

        if (!parsed.topic || !parsed.keywords || !parsed.references) {
          console.warn(`Invalid mapping structure in ${file}, skipping...`);
          continue;
        }

        const validation = validateMappingUrls(parsed);
        if (!validation.valid) {
          console.warn(
            `Warning: ${file} contains URLs from non-allowed domains: ${validation.invalidUrls.join(", ")}`
          );
        }

        mappings.push(parsed);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Failed to load mapping file ${file}: ${message}`);
        continue;
      }
    }

    if (mappings.length === 0) {
      throw new Error(`No valid mapping files loaded from ${directory}`);
    }

    return mappings;
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err?.code === "ENOENT") {
      throw new Error(`Mappings directory not found: ${directory}`);
    }
    throw error;
  }
}

export function getDefaultMappingsDir() {
  return DEFAULT_MAPPINGS_DIR;
}
