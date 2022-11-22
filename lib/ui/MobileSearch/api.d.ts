export declare const queryInsightsBySearchTerm: (searchTerm: any) => Promise<{
    id: string;
    title: string;
}[]>;
export declare const queryInsights: () => Promise<{
    id: string;
    title: string;
}[]>;
export declare const queryPeople: () => Promise<{
    id: string;
    username: string;
    avatarUrl: string;
}[]>;
export declare const queryTrends: () => Promise<any[]>;
