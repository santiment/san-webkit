import { Marked, marked } from 'marked'
import TurndownService from 'turndown'
import { sanitizeLink } from './sanitize'

function walkTokens(token) {
  const { type } = token

  if (type === 'heading') {
    token.depth = token.depth > 1 ? token.depth : 2 // Heading to start at h2
  } else if (type === 'link' || type === 'image') {
    token.href = sanitizeLink(token.href)
    if (!token.href) token.type = 'text'
  }
}
marked.setOptions({
  headerIds: false,
})
marked.use({ walkTokens })

// `markdownToHTML` output is put into `{@html}` / `innerHTML`, and the markdown is other users' text
// (comments, dashboard cells...). marked copies raw HTML in its input straight into the output, so
// `<img src=x onerror=...>` would run. Raw HTML is escaped, not rendered. This is a separate instance
// on purpose: `markdownToPlainText` uses the global one and must keep showing `<b>` as typed, and any
// other code that calls the global `marked` is not changed by importing this module.
const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}
const escapeHtml = (text: string) => text.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char])

const htmlMarked = new Marked({
  // The renderer receives the raw string in marked 6 (the peer range) and a token in marked 13+
  renderer: { html: (html: any) => escapeHtml(typeof html === 'string' ? html : html.text) },
  walkTokens,
})

export const markdownToHTML = (md: string): string =>
  htmlMarked.parse(md, { mangle: false, headerIds: false } as any) as string

const TEXT = (text: string) => text
export function markdownToPlainText(md: string) {
  const renderer = new marked.Renderer()
  renderer.link = (_, __, text) => text
  renderer.paragraph = (text) => text + '\n'
  renderer.heading = TEXT
  renderer.strong = TEXT
  renderer.em = TEXT

  return marked(md, { renderer, mangle: false })
}

const EMPTY_CHAR = String.fromCharCode(160)
const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
})
function modifyRule(id) {
  const rule = (turndownService.options as any).rules[id]
  return turndownService.rules.array.find((r) => r === rule) as TurndownService.Rule
}

modifyRule('paragraph').replacement = (content) => {
  const res = content.trim() !== '' ? content : EMPTY_CHAR
  return '\n\n' + res + '\n\n'
}

modifyRule('listItem').replacement = (rawContent, node) => {
  const content = rawContent.trim() + '\n'
  const list = node.parentNode as HTMLElement

  if (list.nodeName === 'OL') {
    const index = Array.prototype.indexOf.call(list.children, node) + 1
    return index + '. ' + content
  }

  return '- ' + content
}

export const htmlToMarkdown = (html: HTMLElement): string =>
  turndownService.turndown(normalizeHtml(html))

function normalizeHtml(html: HTMLElement) {
  html.querySelectorAll('br').forEach((br) => {
    if ((br.parentNode as HTMLElement).textContent?.length) {
      br.remove()
    }
  })
  return html
}
