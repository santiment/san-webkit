import type { TSeries } from './series.svelte.js';
export declare const useHighlightedMetricCtx: (() => {
    highlighted: {
        readonly $: TSeries | null;
    };
    onMetricEnter: (series: TSeries) => void;
    onMetricLeave: () => void;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        highlighted: {
            readonly $: TSeries | null;
        };
        onMetricEnter: (series: TSeries) => void;
        onMetricLeave: () => void;
    };
    __CTX: "webkit_useHighlightedMetricCtx";
};
