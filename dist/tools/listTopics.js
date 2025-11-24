function briefDescription(mapping) {
    const firstCriterion = mapping.references.criteria[0];
    if (firstCriterion?.description) {
        return firstCriterion.description;
    }
    const firstLine = mapping.learning_path.split("\n").find((line) => line.trim().length > 0);
    return firstLine ? firstLine.trim() : "";
}
export function listAvailableTopics(mappings) {
    const topics = mappings
        .map((m) => {
        const desc = briefDescription(m);
        return desc ? `- **${m.topic}** - ${desc}` : `- **${m.topic}**`;
    })
        .join("\n");
    return [
        "📚 利用可能なアクセシビリティトピック",
        "",
        "以下のトピックについて調べることができます：",
        "",
        topics,
        "",
        "調べたいトピックについて質問してください。",
        "例：「リンクテキストで気をつけることは？」",
    ].join("\n");
}
