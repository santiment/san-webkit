import { type TMetricsRegistry } from './api.js';
export declare const defaultOrderedMetricsPromise: Promise<void>;
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
