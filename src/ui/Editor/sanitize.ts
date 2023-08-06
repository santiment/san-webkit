export function sanitizeLink(link: string) {
  return link.startsWith('https://') ? link : ''
}

const LT_REGEX = /</g
const GT_REGEX = />/g
export function sanitizeEntities(content: string) {
  return content.replace(LT_REGEX, '&lt;').replace(GT_REGEX, (_, index, str) => {
    return index === 0 || str[index - 1] === '\n' ? '>' : '&gt;'
  })
}

export function sanitize(content: string): string {
  return sanitizeEntities(content)
}
