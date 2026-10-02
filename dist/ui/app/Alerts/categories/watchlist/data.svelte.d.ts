import { type Watchlist } from './api.js';
export declare const useUserWatchlistsCtx: (({ loadScreeners }?: {
    loadScreeners?: boolean;
}) => {
    watchlists: {
        readonly $: {
            alerts: Set<string> | undefined;
            id: string;
            title: string;
            description: string | null;
            isScreener: boolean;
        }[];
        readonly loaded$: boolean;
    };
    getWatchlistById: (id: Watchlist["id"]) => {
        alerts: Set<string> | undefined;
        id: string;
        title: string;
        description: string | null;
        isScreener: boolean;
    } | undefined;
    checkWatchlistHasAnotherAlert: (watchlistAlerts: Set<string> | undefined, alertId: number | string | undefined) => boolean;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: ({ loadScreeners }?: {
        loadScreeners?: boolean;
    }) => {
        watchlists: {
            readonly $: {
                alerts: Set<string> | undefined;
                id: string;
                title: string;
                description: string | null;
                isScreener: boolean;
            }[];
            readonly loaded$: boolean;
        };
        getWatchlistById: (id: Watchlist["id"]) => {
            alerts: Set<string> | undefined;
            id: string;
            title: string;
            description: string | null;
            isScreener: boolean;
        } | undefined;
        checkWatchlistHasAnotherAlert: (watchlistAlerts: Set<string> | undefined, alertId: number | string | undefined) => boolean;
    };
    __CTX: "webkit_useUserWatchlistsCtx";
};
