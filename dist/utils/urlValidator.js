const ALLOWED_PREFIXES = [
    // EN WCAG specs (21/22)
    "https://www.w3.org/TR/WCAG21/",
    "https://www.w3.org/TR/WCAG22/",
    // EN Understanding
    "https://www.w3.org/WAI/WCAG21/Understanding/",
    "https://www.w3.org/WAI/WCAG22/Understanding/",
    // EN Techniques
    "https://www.w3.org/WAI/WCAG21/Techniques/",
    "https://www.w3.org/WAI/WCAG22/Techniques/",
    // EN Failures
    "https://www.w3.org/WAI/WCAG21/Failures/",
    "https://www.w3.org/WAI/WCAG22/Failures/",
    // JP translations (WAIC)
    "https://waic.jp/translations/WCAG21/",
    "https://waic.jp/translations/WCAG22/",
    "https://waic.jp/translations/WCAG21/Understanding/",
    "https://waic.jp/translations/WCAG22/Understanding/",
    "https://waic.jp/translations/WCAG21/Techniques/",
    "https://waic.jp/translations/WCAG22/Techniques/",
];
export function isAllowedUrl(url) {
    try {
        const normalized = new URL(url).toString();
        return ALLOWED_PREFIXES.some((prefix) => normalized.startsWith(prefix));
    }
    catch {
        return false;
    }
}
export function validateMappingUrls(mapping) {
    const invalidUrls = [];
    for (const criterion of mapping.references.criteria) {
        if (!isAllowedUrl(criterion.wcag_url))
            invalidUrls.push(criterion.wcag_url);
        if (!isAllowedUrl(criterion.understanding_url)) {
            invalidUrls.push(criterion.understanding_url);
        }
    }
    for (const technique of mapping.references.techniques) {
        if (!isAllowedUrl(technique.url))
            invalidUrls.push(technique.url);
    }
    for (const failure of mapping.references.failures) {
        if (!isAllowedUrl(failure.url))
            invalidUrls.push(failure.url);
    }
    return {
        valid: invalidUrls.length === 0,
        invalidUrls,
    };
}
