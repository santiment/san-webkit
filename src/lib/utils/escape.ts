const CharHtmlEntity = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
} as Record<string, undefined | string>

const getHtmlEntity = (char: string): string => CharHtmlEntity[char]!

export const escapeHtml = (html: string) => html.replace(/[&<>"']/g, getHtmlEntity)

export function escapeTag(strings: TemplateStringsArray, ...values: string[]) {
  let result = ''

  for (let i = 0; i < strings.length - 1; i++) {
    result += strings[i] + escapeHtml(values[i])
  }

  return result + strings[strings.length - 1]
}
