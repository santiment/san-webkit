import type { TSeries } from '../../ctx/series.svelte.js';
export declare const useMetricInfoCtx: ((getOpenedMetric: () => null | TSeries, onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void) => {
    onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
    openedMetric: {
        readonly $: TSeries | null;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: (getOpenedMetric: () => null | TSeries, onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void) => {
        onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
        openedMetric: {
            readonly $: TSeries | null;
        };
    };
    __CTX: "chart_useMetricInfoCtx";
};
