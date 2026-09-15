import { type TScreenerApiAlert } from './schema.js';
export type TScreenerAlert = API.ExtractData<typeof queryUserScreenerAlerts>[number];
export declare const queryUserScreenerAlerts: <GExecutor extends (<T>(schema: import("../../../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../../../api/executor.js").Query = <T>(schema: import("../../../../../api/executor.js").TGqlSchema, options?: Partial<{
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
}>)) => <GData extends (TScreenerApiAlert & {
    id: string;
})[] = (TScreenerApiAlert & {
    id: string;
})[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
