const NON_WORDS_REGEX = /[\W_]+/g;
const SPACES_REGEX = /\s/g;
export const sluggify = (title) => encodeURIComponent(title.replace(NON_WORDS_REGEX, ' ').trim().replace(SPACES_REGEX, '-').toLowerCase());
export const getIdFromSEOLink = (link) => parseInt(link.slice(link.lastIndexOf('-') + 1), 10);
export const getSEOLinkFromIdAndTitle = (id, title) => title ? sluggify(title) + `-${id}` : `${id}`;
export function parse(queryString) {
    const params = new URLSearchParams(queryString);
    const result = {};
    params.forEach((value, key) => {
        result[key] = value;
    });
    return result;
}
//# sourceMappingURL=url.js.map