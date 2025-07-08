import type { Watchlist } from '../api.js';
export type TWatchlistState = {
    watchlist: {
        id: Watchlist['id'] | null;
        title: string;
    };
};
export declare function stateIsWatchlist(state: unknown): state is TWatchlistState;
