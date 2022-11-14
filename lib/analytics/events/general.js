import { TrackCategory } from './utils';
const track = TrackCategory('General');
export const trackAppOpen = () => track('app_open');
export const trackAppClose = () => track('app_close');
export var LoginType;
(function (LoginType) {
    LoginType["EMAIL"] = "email";
    LoginType["METAMASK"] = "metamask";
    LoginType["GOOGLE"] = "google";
    LoginType["TWITTER"] = "twitter";
    LoginType["WALLET"] = "wallet";
})(LoginType || (LoginType = {}));
export function trackLogin(type) {
    const date = new Date();
    return track('login', {
        type,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        timestamp: +date,
        source_url: window.location.href,
    });
}
export const trackLogout = () => track('logout', {
    timestamp: Date.now(),
    source_url: window.location.href,
});
export const trackError = (data) => track('error', Object.assign(Object.assign({}, data), { source_url: window.location.href }));
export var PageType;
(function (PageType) {
    PageType["CHARTS"] = "charts";
    PageType["DASHBOARDS"] = "dashboards";
    PageType["WATCHLIST"] = "watchlist";
    PageType["SCREENER"] = "screener";
    PageType["ALERTS"] = "alerts";
    PageType["INSIGHTS"] = "insights";
    PageType["PROFILE"] = "profile";
    PageType["ACCOUNT"] = "account";
})(PageType || (PageType = {}));
export const trackPageView = ({ url = window.location.href, type, source, }) => track('page_view', { url, type, source });
//# sourceMappingURL=general.js.map