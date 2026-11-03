declare const VoteTypeToId: {
    chart: string;
    dashboard: string;
    insight: string;
    alert: string;
    watchlist: string;
};
export declare function normalizeFeatureType(feature: TVoteType): "insight" | "alert" | "watchlist" | "dashboard" | "chart_layout";
export type TVoteType = keyof typeof VoteTypeToId;
export declare const mutateVote: <GExecutor extends (<T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../api/executor").Query = <T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
    signal: null | AbortSignal;
}>)) => <GData extends unknown = unknown>(id: number, type: "insight" | "alert" | "watchlist" | "chart" | "dashboard") => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export {};
