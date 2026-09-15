import type { TApiTimeWindow } from '../../../../time.js';
import type { TApiOperation } from '../../../../operations.js';
type TQueryHistoricalPointsProps = {
    cooldown: TApiTimeWindow;
    settings: {
        type: 'metric_signal';
        metric: string;
        target: {
            slug: string;
        };
        time_window?: TApiTimeWindow;
        operation: TApiOperation;
    };
};
type THistoricalPointRaw = {
    current: number;
    percent_change: number;
    'triggered?': boolean;
    datetime: string;
};
export declare const queryHistoricalTriggerPoints: <GExecutor extends (<T>(schema: import("../../../../../../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../../../../../api/executor").Query = <T>(schema: import("../../../../../../../api/executor").TGqlSchema, options?: Partial<{
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
}>)) => <GData extends THistoricalPointRaw[] = THistoricalPointRaw[]>(variables: TQueryHistoricalPointsProps) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const queryAssetPriceUsd: <GExecutor extends (<T>(schema: import("../../../../../../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../../../../../api/executor").Query = <T>(schema: import("../../../../../../../api/executor").TGqlSchema, options?: Partial<{
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
}>)) => <GData extends number = number>(slug: string) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export {};
