export const scriptTag = () => document.createElement('script');
export function newHeadScript(content, options, onload) {
    const script = scriptTag();
    if (content)
        script.text = content;
    Object.assign(script, options);
    if (onload)
        script.onload = onload;
    document.head.appendChild(script);
    return script;
}
export var PageType;
(function (PageType) {
    /** @deprecated Only for classic explorer. Otherwise use COMMUNITY instead */
    PageType["EXPLORER"] = "explorer";
    PageType["COMMUNITY"] = "community";
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
    PageType["SignUp"] = "signup";
    PageType["Login"] = "login";
})(PageType || (PageType = {}));
