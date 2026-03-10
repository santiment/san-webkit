import type { TMetricSelector } from './types/index.js';
import { type TNominal } from '../../utils/types/index.js';
export type TMetricKey = TNominal<string, 'TMetricKey'>;
export type TMetricUnit = '' | 'usd' | 'percent';
type TMetricArgs = Partial<{
    selector: TMetricSelector;
    [x: string]: unknown;
}>;
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
        args: TMetricArgs;
        isNew: boolean;
        displayOrder: number;
    };
    reqMeta: object;
};
export type TMetricsRegistry = Record<string, undefined | TRegistryMetric>;
export declare const queryGetOrderedMetrics: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor.js").Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
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
}>)) => <GData extends {
    categories: string[];
    MetricsRegistry: TMetricsRegistry;
} = {
    categories: string[];
    MetricsRegistry: TMetricsRegistry;
}>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export {};
