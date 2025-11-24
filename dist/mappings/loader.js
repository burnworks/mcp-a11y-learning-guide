import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "yaml";
import { validateMappingUrls } from "../utils/urlValidator.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEFAULT_MAPPINGS_DIR = path.resolve(__dirname, "../../mappings");
const isYamlFile = (fileName) => /\.ya?ml$/i.test(fileName);
export async function loadMappingFile(filePath) {
    const raw = await fs.readFile(filePath, "utf-8");
    return parse(raw);
}
export async function loadMappings(directory = DEFAULT_MAPPINGS_DIR) {
    return loadAllMappings(directory);
}
export async function loadAllMappings(directory = DEFAULT_MAPPINGS_DIR) {
    try {
        const entries = await fs.readdir(directory);
        const yamlFiles = entries.filter(isYamlFile);
        if (yamlFiles.length === 0) {
            throw new Error(`No mapping files found in ${directory}`);
        }
        const mappings = [];
        for (const file of yamlFiles) {
            const filePath = path.join(directory, file);
            try {
                const raw = await fs.readFile(filePath, "utf-8");
                const parsed = parse(raw);
                if (!parsed.topic || !parsed.keywords || !parsed.references) {
                    console.warn(`Invalid mapping structure in ${file}, skipping...`);
                    continue;
                }
                const validation = validateMappingUrls(parsed);
                if (!validation.valid) {
                    console.warn(`Warning: ${file} contains URLs from non-allowed domains: ${validation.invalidUrls.join(", ")}`);
                }
                mappings.push(parsed);
            }
            catch (error) {
                const message = error instanceof Error ? error.message : String(error);
                console.error(`Failed to load mapping file ${file}: ${message}`);
                continue;
            }
        }
        if (mappings.length === 0) {
            throw new Error(`No valid mapping files loaded from ${directory}`);
        }
        return mappings;
    }
    catch (error) {
        const err = error;
        if (err?.code === "ENOENT") {
            throw new Error(`Mappings directory not found: ${directory}`);
        }
        throw error;
    }
}
export function getDefaultMappingsDir() {
    return DEFAULT_MAPPINGS_DIR;
}
