const NON_WORDS_REGEX = /[\W_]+/g
const SPACES_REGEX = /\s/g

export const sluggify = (title: string) =>
  encodeURIComponent(
    title.replace(NON_WORDS_REGEX, ' ').trim().replace(SPACES_REGEX, '-').toLowerCase(),
  )

export const getIdFromSEOLink = (link: string): number =>
  parseInt(link.slice(link.lastIndexOf('-') + 1), 10)

export const getSEOLinkFromIdAndTitle = (id: string | number, title?: string | null): string =>
  title ? sluggify(title) + `-${id}` : `${id}`

export function parse(queryString: string) {
  const params = new URLSearchParams(queryString)
  const result = {}

  params.forEach((value, key) => {
    result[key] = value
  })

  return result
}
