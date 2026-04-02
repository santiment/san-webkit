const CharHtmlEntity = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};
const getHtmlEntity = (char) => CharHtmlEntity[char];
export const escapeHtml = (html) => html.replace(/[&<>"']/g, getHtmlEntity);
export function escapeTag(strings, ...values) {
    let result = '';
    for (let i = 0; i < strings.length - 1; i++) {
        result += strings[i] + escapeHtml(values[i]);
    }
    return result + strings[strings.length - 1];
}
