export type TWatchlistState = {
    watchlist: {
        id: number | null;
        title: string;
    };
};
export declare function stateIsWatchlist(state: unknown): state is TWatchlistState;
