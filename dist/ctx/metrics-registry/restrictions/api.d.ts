export declare const queryGetAccessRestrictions: <GExecutor extends (<T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
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
}>)) => <GData extends Record<string, {
    minInterval: string;
    restrictedFrom: null | string;
    restrictedTo: null | string;
    docs: {
        description?: string;
        academyLinks: string[];
    };
} | undefined> = Record<string, {
    minInterval: string;
    restrictedFrom: null | string;
    restrictedTo: null | string;
    docs: {
        description?: string;
        academyLinks: string[];
    };
} | undefined>>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export type TMetricRestrictions = NonNullable<API.ExtractData<typeof queryGetAccessRestrictions>[string]>;
export declare const DEFAULT_METRICS_RESTRICTIONS: {};
