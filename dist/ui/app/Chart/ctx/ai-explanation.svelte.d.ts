import type { TSeries } from './series.svelte.js';
export type TApiMetricSeries = Extract<TSeries, {
    apiMetricName: string;
    selector: any;
}>;
export declare const useMetricsAIExplanationCtx: (() => {
    checkIsActiveAssetMetric$(metric: TSeries): metric is TApiMetricSeries;
    toggleExplanation(metric: TApiMetricSeries): void;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        checkIsActiveAssetMetric$(metric: TSeries): metric is TApiMetricSeries;
        toggleExplanation(metric: TApiMetricSeries): void;
    };
    __CTX: "webkit_useMetricsAIExplanationCtx";
};
