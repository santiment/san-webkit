import { type Watchlist } from './api.js';
export declare const useUserWatchlistsCtx: (({ loadScreeners }?: {
    loadScreeners?: boolean;
}) => {
    watchlists: {
        readonly $: Watchlist[];
    };
    getWatchlistById: (id: Watchlist["id"]) => Watchlist | undefined;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        watchlists: {
            readonly $: Watchlist[];
        };
        getWatchlistById: (id: Watchlist["id"]) => Watchlist | undefined;
    };
    set: ({ loadScreeners }?: {
        loadScreeners?: boolean;
    }) => {
        watchlists: {
            readonly $: Watchlist[];
        };
        getWatchlistById: (id: Watchlist["id"]) => Watchlist | undefined;
    };
};
