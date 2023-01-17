export declare const KEY = "RECENT_ITEMS";
export declare enum RecentType {
    CHART_LAYOUT = "chart_layout",
    WATCHLIST = "watchlist",
    SCREENER = "screener"
}
declare type Recent = {
    [key: string]: any;
    type: RecentType;
    id: number | string;
};
export declare const getRecents: (maxAmount?: number) => Recent[];
export declare const saveRecents: (recents: Recent[], maxAmount?: number) => Recent[];
export declare const removeRecent: (type: RecentType, id: number | string) => Recent[];
export declare function addRecent(type: RecentType, id: number | string, maxAmount?: number): Recent[];
export {};
