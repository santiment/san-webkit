import { saveLoginMethod, TrackCategory } from './utils';
const track = TrackCategory('General');
export const trackAppOpen = () => track('app_open', {
    source_url: window.location.href,
});
export const trackAppClose = () => track('app_close', {
    source_url: window.location.href,
});
export var LoginType;
(function (LoginType) {
    LoginType["EMAIL"] = "email";
    LoginType["METAMASK"] = "metamask";
    LoginType["GOOGLE"] = "google";
    LoginType["TWITTER"] = "twitter";
    LoginType["WALLET"] = "wallet";
})(LoginType || (LoginType = {}));
export function trackLoginStart(method) {
    const date = new Date();
    saveLoginMethod(method);
    return track('login_start', {
        method,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        timestamp: +date,
        source_url: window.location.href,
    });
}
export const trackLoginFinish = (method) => track('login_finish', { method });
export const trackLogout = () => track('logout', {
    timestamp: Date.now(),
    source_url: window.location.href,
});
export const trackError = (data) => track('error', Object.assign(Object.assign({}, data), { source_url: window.location.href }));
export var PageType;
(function (PageType) {
    PageType["EXPLORER"] = "explorer";
    PageType["CHARTS"] = "charts";
    PageType["DASHBOARDS"] = "dashboards";
    PageType["WATCHLIST"] = "watchlist";
    PageType["SCREENER"] = "screener";
    PageType["ALERTS"] = "alerts";
    PageType["INSIGHTS"] = "insights";
    PageType["PROFILE"] = "profile";
    PageType["ACCOUNT"] = "account";
    PageType["SOCIAL_TOOL"] = "social_tool";
    PageType["HISTORICAL_BALANCE"] = "historical_balance";
    PageType["LABS"] = "labs";
})(PageType || (PageType = {}));
export const trackPageView = ({ url = window.location.href, type, sourceType, sourceUrl, }) => track('page_view', { url, type, source_type: sourceType, source_url: sourceUrl });
//# sourceMappingURL=general.js.map