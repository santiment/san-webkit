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
    get: (allCtxs?: Map<string, any>) => {
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
    get: (allCtxs?: Map<string, any>) => {
        startPointIndex: {
            $: number | null;
        };
    };
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
    get: (allCtxs?: Map<string, any>) => {
        isHiddenMetricsDisplayed: {
            $: boolean;
        };
    };
    set: (defaultValue?: {
        isHiddenMetricsDisplayed: boolean;
    }) => {
        isHiddenMetricsDisplayed: {
            $: boolean;
        };
    };
    __CTX: "charts_usePaneLegendCompactToggleCtx";
};
