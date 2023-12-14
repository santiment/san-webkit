export declare enum CommentsType {
    Address = "BLOCKCHAIN_ADDRESS",
    Layout = "CHART_CONFIGURATION",
    Insight = "INSIGHT",
    TimelineEvent = "TIMELINE_EVENT",
    Proposal = "WALLET_HUNTERS_PROPOSAL",
    Watchlist = "WATCHLIST",
    Dashboard = "DASHBOARD"
}
export declare const COMMENT_FIELDS = "id\n  content\n  insertedAt\n  editedAt\n  parentId\n  user {\n    id\n    username\n    email\n    avatarUrl\n  }\n";
export declare const queryComments: (id: number, type: SAN.CommentsType) => Promise<SAN.Comment[]>;
