export declare const scriptTag: () => HTMLScriptElement;
export declare function newHeadScript(content: string | undefined, options?: {
    [key: string]: any;
}, onload?: () => void): HTMLScriptElement;
export declare enum PageType {
    /** @deprecated Only for classic explorer. Otherwise use COMMUNITY instead */
    EXPLORER = "explorer",
    COMMUNITY = "community",
    CHARTS = "charts",
    DASHBOARDS = "dashboards",
    WATCHLIST = "watchlist",
    SCREENER = "screener",
    ALERTS = "alerts",
    INSIGHTS = "insights",
    PROFILE = "profile",
    ACCOUNT = "account",
    SOCIAL_TOOL = "social_tool",
    HISTORICAL_BALANCE = "historical_balance",
    LABS = "labs",
    SignUp = "signup",
    Login = "login"
}
