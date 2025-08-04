import { type TMetricsRegistry } from './api.js';
export declare const DEFAULT_METRIC_CATEGORIES: string[];
export declare const DEFAULT_METRICS_REGISTRY: TMetricsRegistry;
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
};
