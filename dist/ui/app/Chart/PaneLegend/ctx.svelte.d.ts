import type { TPane } from '../ctx/panes.svelte.js';
import { type TSeries } from '../ctx/index.js';
export declare const usePanesTooltip: (() => {
    paneIndexSeries: {
        readonly $: Map<TPane, [number, ...TSeries[]]>;
    };
    hoverPoint: {
        readonly $: {
            datetime: number;
            index: number;
        } | null;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        paneIndexSeries: {
            readonly $: Map<TPane, [number, ...TSeries[]]>;
        };
        hoverPoint: {
            readonly $: {
                datetime: number;
                index: number;
            } | null;
        };
    };
    __CTX: "charts_usePanesTooltip";
};
export declare const useShiftModeStartPoint: (() => {
    startPointIndex: {
        $: number | null;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        startPointIndex: {
            $: number | null;
        };
    };
    __CTX: "charts_useShiftModeStartPoint";
};
export declare const usePaneLegendCompactCtx: ((defaultValue?: {
    isHiddenMetricsDisplayed: boolean;
}) => {
    isHiddenMetricsDisplayed: {
        $: boolean;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: (defaultValue?: {
        isHiddenMetricsDisplayed: boolean;
    }) => {
        isHiddenMetricsDisplayed: {
            $: boolean;
        };
    };
    __CTX: "charts_usePaneLegendCompactToggleCtx";
};
