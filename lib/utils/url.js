const NON_WORDS_REGEX = /[\W_]+/g;
const SPACES_REGEX = /\s/g;
export const sluggify = (title) => encodeURIComponent(title.replace(NON_WORDS_REGEX, ' ').trim().replace(SPACES_REGEX, '-').toLowerCase());
export const getIdFromSEOLink = (link) => (link || '') === '' ? NaN : +link.slice(link.lastIndexOf('-') + 1);
export const getSEOLinkFromIdAndTitle = (id, title) => title ? sluggify(title) + `-${id}` : `${id}`;
export function parse(queryString) {
    const params = new URLSearchParams(queryString);
    const result = {};
    params.forEach((value, key) => {
        result[key] = value;
    });
    return result;
}
export const SearchParams = {
    parse() {
        const result = {};
        for (const keyValue of window.location.search.slice(1).split('&')) {
            const [key, value] = keyValue.split('=');
            if (key)
                result[key] = value;
        }
        return result;
    },
    stringify: (search) => '?' +
        Object.keys(search)
            .filter(Boolean)
            .map((key) => `${key}=${search[key]}`)
            .join('&'),
};
//# sourceMappingURL=url.js.map