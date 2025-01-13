const NON_WORDS_REGEX = /[\W_]+/g;
const SPACES_REGEX = /\s/g;
export const sluggify = (title) => encodeURIComponent(title.replace(NON_WORDS_REGEX, ' ').trim().replace(SPACES_REGEX, '-').toLowerCase());
export const getSEOLinkFromIdAndTitle = (id, title) => title ? sluggify(title) + `-${id}` : `${id}`;
export const getIdFromSEOLink = (link) => (link || '') === '' ? NaN : +link.slice(link.lastIndexOf('-') + 1);
