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
    get: (allCtxs?: Map<string, any>) => {
        MetricsRegistry: {
            readonly $: TMetricsRegistry;
        };
        metricCategories: {
            readonly $: string[];
        };
    };
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
