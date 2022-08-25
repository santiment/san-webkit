import { marked } from 'marked'
import TurndownService from 'turndown'
function walkTokens(token) {
  if (token.type === 'heading') {
    token.depth = token.depth > 1 ? token.depth : 2 // Heading to start at h2
  }
}
marked.setOptions({
  headerIds: false,
})
marked.use({ walkTokens })
export const markdownToHTML = (md) => marked(md)
const TEXT = (text) => text
export function markdownToPlainText(md) {
  const renderer = new marked.Renderer()
  renderer.link = (_, __, text) => text
  renderer.paragraph = (text) => text + '\n'
  renderer.heading = TEXT
  renderer.strong = TEXT
  renderer.em = TEXT
  return marked(md, { renderer })
}
const EMPTY_CHAR = String.fromCharCode(160)
const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
})
function modifyRule(id) {
  const rule = turndownService.options.rules[id]
  return turndownService.rules.array.find((r) => r === rule)
}
modifyRule('paragraph').replacement = (content) => {
  const res = content.trim() !== '' ? content : EMPTY_CHAR
  return '\n\n' + res + '\n\n'
}
modifyRule('listItem').replacement = (rawContent, node) => {
  const content = rawContent.trim() + '\n'
  const list = node.parentNode
  if (list.nodeName === 'OL') {
    const index = Array.prototype.indexOf.call(list.children, node) + 1
    return index + '. ' + content
  }
  return '- ' + content
}
export const htmlToMarkdown = (html) => turndownService.turndown(normalizeHtml(html))
function normalizeHtml(html) {
  html.querySelectorAll('br').forEach((br) => {
    var _a
    if ((_a = br.parentNode.textContent) === null || _a === void 0 ? void 0 : _a.length) {
      br.remove()
    }
  })
  return html
}
//# sourceMappingURL=markdown.js.map
