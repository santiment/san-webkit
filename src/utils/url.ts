export const getIdFromSEOLink = (link: string): number =>
  parseInt(link.slice(link.lastIndexOf('-') + 1), 10)

export const getSEOLinkFromIdAndTitle = (
  id: string | number,
  title: string | null,
): string =>
  title
    ? encodeURIComponent(`${title.toLowerCase().split(' ').join('-')}-${id}`)
    : `${id}`
