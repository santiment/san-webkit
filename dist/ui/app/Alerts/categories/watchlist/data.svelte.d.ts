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
    get: (allCtxs?: Map<string, any>) => {
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
