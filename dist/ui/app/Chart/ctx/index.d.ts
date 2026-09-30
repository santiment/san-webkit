import type { IChartApi } from '@santiment-network/chart-next';
export declare const useChartCtx: (() => {
    chart: {
        $: (IChartApi & {
            __isDrawing?: boolean;
        }) | undefined;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        chart: {
            $: (IChartApi & {
                __isDrawing?: boolean;
            }) | undefined;
        };
    };
    __CTX: "useChartCtx";
};
export { useChartGlobalParametersCtx, type TGlobalParameters } from './global-parameters.svelte.js';
export { useApiMetricDataFlow, useApiMetricFetchSettingsCtx } from './metric-data.svelte.js';
export { useMetricSeriesCtx, createSeries, type TSeries } from './series.svelte.js';
export { useColorGenerator } from './colors.js';
export { useChartPanesCtx } from './panes.svelte.js';
export { useHighlightedMetricCtx } from './highlighted-metric.svelte.js';
export { useMetricsAIExplanationCtx } from './ai-explanation.svelte.js';
