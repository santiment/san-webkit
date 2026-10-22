let parserPromise = null;
function loadHljsTheme() {
    if (document.getElementById('hljs-theme-link'))
        return;
    const link = document.createElement('link');
    link.id = 'hljs-theme-link';
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';
    document.head.appendChild(link);
}
async function createParser() {
    loadHljsTheme();
    const [{ Marked }, { markedHighlight }, hljsModule, python, plaintext, javascript, graphql, sql, latex,] = await Promise.all([
        import('marked'),
        import('marked-highlight'),
        import('highlight.js/lib/core'),
        import('highlight.js/lib/languages/python'),
        import('highlight.js/lib/languages/javascript'),
        import('highlight.js/lib/languages/graphql'),
        import('highlight.js/lib/languages/sql'),
        import('highlight.js/lib/languages/latex'),
        import('highlight.js/lib/languages/plaintext'),
    ]);
    const hljs = hljsModule.default;
    hljs.registerLanguage('python', python.default);
    hljs.registerLanguage('plaintext', plaintext.default);
    hljs.registerLanguage('javascript', javascript.default);
    hljs.registerLanguage('graphql', graphql.default);
    hljs.registerLanguage('sql', sql.default);
    hljs.registerLanguage('latex', latex.default);
    const marked = new Marked(markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
    }));
    return marked;
}
export function getMarkdownParser() {
    if (!parserPromise) {
        parserPromise = createParser();
    }
    return parserPromise;
}
