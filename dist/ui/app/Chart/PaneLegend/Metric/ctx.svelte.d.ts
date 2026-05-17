import type { TSeries } from '../../ctx/series.svelte.js';
export declare const useMetricInfoCtx: ((getOpenedMetric: () => null | TSeries, onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void) => {
    onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
    openedMetric: {
        readonly $: TSeries | null;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
        openedMetric: {
            readonly $: TSeries | null;
        };
    };
    set: (getOpenedMetric: () => null | TSeries, onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void) => {
        onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
        openedMetric: {
            readonly $: TSeries | null;
        };
    };
    __CTX: "chart_useMetricInfoCtx";
};
