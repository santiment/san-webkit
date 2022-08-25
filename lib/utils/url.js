export const getIdFromSEOLink = (link) => parseInt(link.slice(link.lastIndexOf('-') + 1), 10)
export const getSEOLinkFromIdAndTitle = (id, title) =>
  title ? encodeURIComponent(`${title.toLowerCase().split(' ').join('-')}-${id}`) : `${id}`
export function parse(queryString) {
  const qs = queryString.startsWith('?') ? queryString.slice(1) : queryString
  const entries = qs.split('&')
  const result = {}
  for (let i = 0, len = entries.length; i < len; i++) {
    const [key, value] = entries[i].split('=')
    result[decodeURIComponent(key)] = decodeURIComponent(value)
  }
  return result
}
//# sourceMappingURL=url.js.map
