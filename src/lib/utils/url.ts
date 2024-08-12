const NON_WORDS_REGEX = /[\W_]+/g
const SPACES_REGEX = /\s/g

export const getSEOLinkFromIdAndTitle = (id: string, title?: string) =>
  title
    ? encodeURIComponent(
        `${title
          .replace(NON_WORDS_REGEX, ' ')
          .trim()
          .replace(SPACES_REGEX, '-')
          .toLowerCase()}-${id}`,
      )
    : `${id}`
