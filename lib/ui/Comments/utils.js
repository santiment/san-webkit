import { saveJson, getSavedJson, deleteSavedValue } from './../../utils/localStorage';
import { getDateFormats } from './../../utils/dates';
const SCHEDULED_COMMENT = 'SCHEDULED_COMMENT';
export function saveComment(type, id, content, commentsForTitle) {
    saveJson(SCHEDULED_COMMENT, {
        type,
        id,
        content,
        commentsForTitle,
        href: window.location.pathname,
    });
}
export function clearSavedComment() {
    deleteSavedValue(SCHEDULED_COMMENT);
}
export const lookupSavedComment = () => getSavedJson(SCHEDULED_COMMENT);
export function scrollToComment(comment, removeHighlight, block = 'nearest') {
    removeHighlight === null || removeHighlight === void 0 ? void 0 : removeHighlight();
    if (!comment)
        return;
    comment.scrollIntoView({ behavior: 'smooth', block });
    comment.style.background = 'var(--green-light-2)';
    const timer = setTimeout(undo, 900);
    function undo() {
        if (comment)
            comment.style.background = '';
        clearTimeout(timer);
    }
    return undo;
}
export const findCommentNode = (commentsNode, href) => commentsNode.querySelector(`${href} .content`);
export function adjustHeight(node) {
    node.style.height = '32px';
    if (node.value) {
        node.style.height = node.scrollHeight + 2 + 'px';
    }
}
export function getDatetime(date) {
    const { DD, MMM, YY } = getDateFormats(new Date(date));
    return `${MMM} ${DD}, ${YY}`;
}
const LT_REGEX = /</g;
const GT_REGEX = />/g;
export function sanitize(content) {
    return content.replace(LT_REGEX, '&lt;').replace(GT_REGEX, '&gt;');
}
//# sourceMappingURL=utils.js.map