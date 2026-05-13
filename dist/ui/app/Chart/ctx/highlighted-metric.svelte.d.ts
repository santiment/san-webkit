import type { TSeries } from './series.svelte.js';
export declare const useHighlightedMetricCtx: (() => {
    highlighted: {
        readonly $: TSeries | null;
    };
    onMetricEnter: (series: TSeries) => void;
    onMetricLeave: () => void;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        highlighted: {
            readonly $: TSeries | null;
        };
        onMetricEnter: (series: TSeries) => void;
        onMetricLeave: () => void;
    };
    set: () => {
        highlighted: {
            readonly $: TSeries | null;
        };
        onMetricEnter: (series: TSeries) => void;
        onMetricLeave: () => void;
    };
    __CTX: "webkit_useHighlightedMetricCtx";
};
