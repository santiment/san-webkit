export type TWatchlistState = {
    watchlist: {
        id: string | null;
        title: string;
    };
};
export declare function stateIsWatchlist(state: unknown): state is TWatchlistState;
