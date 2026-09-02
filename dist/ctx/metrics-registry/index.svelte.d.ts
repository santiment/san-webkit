import { type TMetricsRegistry } from './api.js';
export declare const defaultOrderedMetricsPromise: Promise<void> | Promise<{
    categories: string[];
    MetricsRegistry: TMetricsRegistry;
}>;
export declare const useMetricsRegistryCtx: (() => {
    MetricsRegistry: {
        readonly $: TMetricsRegistry;
    };
    metricCategories: {
        readonly $: string[];
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        MetricsRegistry: {
            readonly $: TMetricsRegistry;
        };
        metricCategories: {
            readonly $: string[];
        };
    };
    __CTX: "webkit_useMetricsRegistryCtx";
};
