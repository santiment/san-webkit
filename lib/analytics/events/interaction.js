import { TrackCategory } from './utils.js';
const track = TrackCategory('Interaction');
export const trackVote = ({ id, feature, source, }) => track('vote', { id, feature, source, source_url: window.location.href });
export const trackSaveCSV = ({ id, feature, source }) => track('save_csv', { id, feature, source, source_url: window.location.href });
export const trackShowComments = ({ id, feature, source, }) => track('show_comments', { id, feature, source, source_url: window.location.href });
export const trackComment = ({ type, id, repliedTo, isReply = false }) => track('comment', {
    id,
    type,
    replied_to: repliedTo,
    is_reply: isReply,
    source_url: window.location.href,
});
export const trackShareFormOpen = ({ feature, source }) => track('share_form_open', { feature, source, source_url: window.location.href });
export const trackShareFormSubmit = ({ url, media }) => track('share_form_submit', { url, media, source_url: window.location.href });
export const trackShareLinkCopy = ({ url, feature, source }) => track('share_link_copy', { url, feature, source, source_url: window.location.href });
export const trackFollowUser = ({ id, username, source }) => track('follow_user', { id, username, source, source_url: window.location.href });
export const trackProfileClick = ({ id, username, feature, source, }) => track('user_profile_click', { id, username, feature, source, source_url: window.location.href });
export const trackFullscreenClick = ({ source, type }) => track('fullscreen_click', { source, type, source_url: window.location.href });
export const trackDownloadClick = ({ source, type, format, }) => track('download_click', { source, type, format, source_url: window.location.href });
export const trackCalendarChange = ({ source, from, to, }) => track('calendar_change', { source, from, to, source_url: window.location.href });
//# sourceMappingURL=interaction.js.map