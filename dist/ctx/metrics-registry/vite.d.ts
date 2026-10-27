export declare const fetchMetricsRegistry: () => Promise<{
    categories: string[];
    MetricsRegistry: import("./api.js").TMetricsRegistry;
} | {
    categories: never[];
    MetricsRegistry: {};
}>;
export declare function StaticMetricsRegistryPlugin(): Promise<{
    name: string;
    transform(src: string, id: string, env: {
        ssr: boolean;
    }): Promise<{
        code: string;
        map: null;
    } | undefined>;
}>;
