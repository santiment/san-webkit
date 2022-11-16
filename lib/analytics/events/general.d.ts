export declare const trackAppOpen: () => number;
export declare const trackAppClose: () => number;
export declare enum LoginType {
    EMAIL = "email",
    METAMASK = "metamask",
    GOOGLE = "google",
    TWITTER = "twitter",
    WALLET = "wallet"
}
export declare function trackLoginStart(method: LoginType): number;
export declare const trackLoginFinish: (method: LoginType) => number;
export declare const trackLogout: () => number;
export declare const trackError: (data: any) => number;
export declare enum PageType {
    EXPLORER = "explorer",
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
    LABS = "labs"
}
export declare const trackPageView: ({ url, type, sourceType, sourceUrl, }: {
    url: string;
    type: PageType;
    sourceType: PageType;
    sourceUrl: string;
}) => number;
