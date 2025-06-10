import { type TNominal } from '../../utils/index.js';
import { Query } from '../../api/executor.js';
export type TMetricKey = TNominal<string, 'TMetricKey'>;
export type TMetricUnit = '' | 'usd' | 'percent';
export type TRegistryMetric = {
    key: string;
    queryKey: undefined | string;
    label: string;
    category: string;
    group?: string;
    chartStyle: string;
    node: string;
    unit: string;
    formatter: undefined | ((value: number) => string);
    meta: {
        args: object;
        isNew: boolean;
        displayOrder: number;
    };
    reqMeta: object;
};
export type TMetricsRegistry = Record<string, undefined | TRegistryMetric>;
export declare const queryGetOrderedMetrics: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
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
}>)) => <GData extends TMetricsRegistry = TMetricsRegistry>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const useMetricsRegistryCtx: (() => {
    MetricsRegistry: {
        readonly $: TMetricsRegistry;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        MetricsRegistry: {
            readonly $: TMetricsRegistry;
        };
    };
    set: () => {
        MetricsRegistry: {
            readonly $: TMetricsRegistry;
        };
    };
};
