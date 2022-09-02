export declare enum VoteType {
    Layout = "chartConfigurationId",
    Insight = "insightId",
    Watchlist = "watchlistId",
    Dashboard = "dashboardId"
}
export declare const VOTE_MUTATION: (id: number, type: VoteType) => string;
export declare const vote: (id: number, type: VoteType) => Promise<any>;
