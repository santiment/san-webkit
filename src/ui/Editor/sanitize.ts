const LINKS_REGEX = /\]\(.+\)/g
const LINKS_CONNECTOR_REGEX = /\]:\s*\(/g // regex for "]:    ("

export function sanitizeLinks(link: string) {
  return link.startsWith('https://') ? link : ''
}

const LT_REGEX = /</g
const GT_REGEX = />/g
export function sanitizeEntities(content: string) {
  return content.replace(LT_REGEX, '&lt;').replace(GT_REGEX, '&gt;')
}

export function sanitize(content: string): string {
  return sanitizeEntities(content)
}
