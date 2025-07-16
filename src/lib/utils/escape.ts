const CharHtmlEntity = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
} as Record<string, undefined | string>

const getHtmlEntity = (char: string): string => CharHtmlEntity[char]!

export const escapeHtml = (html: string) => html.replace(/[&<>"']/g, getHtmlEntity)
