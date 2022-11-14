export declare const trackAppOpen: () => number;
export declare const trackAppClose: () => number;
export declare enum LoginType {
    EMAIL = "email",
    METAMASK = "metamask",
    GOOGLE = "google",
    TWITTER = "twitter",
    WALLET = "wallet"
}
export declare function trackLogin(type: LoginType): number;
export declare const trackLogout: () => number;
export declare const trackError: (data: any) => number;
export declare enum PageType {
    CHARTS = "charts",
    DASHBOARDS = "dashboards",
    WATCHLIST = "watchlist",
    SCREENER = "screener",
    ALERTS = "alerts",
    INSIGHTS = "insights",
    PROFILE = "profile",
    ACCOUNT = "account"
}
export declare const trackPageView: ({ url, type, source, }: {
    url: string;
    type: PageType;
    source: PageType;
}) => number;
