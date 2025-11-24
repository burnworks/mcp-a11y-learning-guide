import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
// NOTE: SDK exports resolution in TS currently requires referencing the built ESM types path.
// Keep this path aligned with the installed SDK version.
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { pathToFileURL } from "url";
import { loadAllMappings } from "./mappings/loader.js";
import { searchAccessibilityTopic } from "./tools/searchTopic.js";
import { listAvailableTopics } from "./tools/listTopics.js";
import { getWcagCriterion } from "./tools/getCriterion.js";
export const SERVER_NAME = "mcp-a11y-learning-guide";
export const SERVER_VERSION = "0.1.0";
const TOOL_DEFINITIONS = [
    {
        name: "search_accessibility_topic",
        description: "アクセシビリティのトピックを検索し、関連する公式ドキュメント（WCAG、Understanding、Techniques）を提示します。学習者を公式資料へ導くガイド役として機能します。",
        inputSchema: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description: "検索クエリ（例：「リンクテキスト」「画像の代替テキスト」「フォームのラベル」）",
                },
                priority_filter: {
                    type: "string",
                    enum: ["all", "must-read", "high-priority"],
                    default: "all",
                    description: "表示する情報の優先度フィルター。must-read=必読のみ、high-priority=必読+高優先度、all=すべて",
                },
            },
            required: ["query"],
        },
    },
    {
        name: "list_available_topics",
        description: "利用可能なアクセシビリティトピックの一覧を取得します。",
        inputSchema: {
            type: "object",
            properties: {},
            required: [],
        },
    },
    {
        name: "get_wcag_criterion",
        description: "特定のWCAG達成基準の詳細情報を取得します。達成基準ID（例：2.4.4）を指定してください。",
        inputSchema: {
            type: "object",
            properties: {
                criterion_id: {
                    type: "string",
                    description: "達成基準ID（例：'2.4.4'、'1.4.3'）",
                },
            },
            required: ["criterion_id"],
        },
    },
];
let cachedMappings = null;
async function getMappings() {
    if (cachedMappings)
        return cachedMappings;
    const mappings = await loadAllMappings();
    cachedMappings = mappings;
    return mappings;
}
function coercePriorityFilter(value) {
    const allowed = ["all", "must-read", "high-priority"];
    if (typeof value === "string" && allowed.includes(value)) {
        return value;
    }
    return "all";
}
function textResult(text, isError = false) {
    return {
        content: [{ type: "text", text }],
        isError,
    };
}
/**
 * Build an MCP server with the three guidance tools registered.
 */
export function createServer() {
    const server = new Server({
        name: SERVER_NAME,
        version: SERVER_VERSION,
    });
    // Enable tools capability to allow tools/list and tools/call handlers.
    server.registerCapabilities({
        tools: {},
    });
    server.setRequestHandler(ListToolsRequestSchema, async () => ({
        tools: TOOL_DEFINITIONS,
    }));
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
        try {
            const toolName = request.params.name;
            const args = (request.params.arguments ?? {});
            const mappings = await getMappings();
            if (!mappings.length) {
                return textResult("⚠️ マッピングファイルが読み込まれていません。システム管理者に連絡してください。", true);
            }
            if (toolName === "search_accessibility_topic") {
                const query = typeof args.query === "string" ? args.query : "";
                if (!query.trim()) {
                    return textResult("検索クエリを入力してください。");
                }
                const priority = coercePriorityFilter(args.priority_filter);
                const response = await searchAccessibilityTopic(query, priority, mappings);
                return textResult(response);
            }
            if (toolName === "list_available_topics") {
                return textResult(listAvailableTopics(mappings));
            }
            if (toolName === "get_wcag_criterion") {
                const criterionId = typeof args.criterion_id === "string" ? args.criterion_id : "";
                if (!criterionId.trim()) {
                    return textResult("達成基準IDを指定してください（例：2.4.4）。");
                }
                return textResult(getWcagCriterion(criterionId, mappings));
            }
            return textResult(`❌ 未知のツール: ${toolName}`, true);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            return textResult(`❌ エラーが発生しました: ${message}`, true);
        }
    });
    return server;
}
// Allow running directly as a standalone MCP server over stdio.
const isMain = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;
if (isMain) {
    const server = createServer();
    const transport = new StdioServerTransport();
    server.connect(transport);
}
