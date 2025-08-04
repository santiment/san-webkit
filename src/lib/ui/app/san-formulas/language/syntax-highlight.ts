const createSyntaxRule = (rule: string) => new RegExp(rule + '(?![^<>]*>|[^"]*?<\\/span)', 'g')

export const addDocumentationSnippetSyntax = (htmlDocumentation: string) =>
  htmlDocumentation.replace(
    /<pre><code>([\s\S]+?)<\/code><\/pre>/g,
    (_, code) => `<pre><code>${highlightSyntax(code)}</code></pre>`,
  )

export const highlightSyntax = (code: string) =>
  code
    // Comments
    .replace(createSyntaxRule('(#.+)\\n'), `<span class="mtk8">$1</span>\n`)
    // Strings
    .replace(createSyntaxRule('(&quot;[\\ \\w\\d-]+&quot;)'), `<span class="mtk20">$1</span>`)
    // Numbers
    .replace(createSyntaxRule('(\\b\\d+\\b)'), `<span class="mtk7">$1</span>`)
    // Functions
    .replace(createSyntaxRule('(\\w+)\\('), `<span class="mtk6">$1</span>(`)
