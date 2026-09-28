import type { TMetricRestrictions } from '../../../../ctx/metrics-registry/restrictions/api.js';
type TChartPlanRestriction = TMetricRestrictions & {
    label: string;
};
export declare const useChartPlanRestrictionsCtx: (() => {
    chartPlanRestrictions: {
        readonly $: Record<string, TChartPlanRestriction | undefined>;
        has$(apiMetricName: string): boolean;
        showDialog: (() => Promise<undefined>) & ((props: Omit<import("../../../core/Dialog/dialogs.js").TDialogProps, "resolve" | "reject" | "Controller">) => Promise<undefined>);
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        chartPlanRestrictions: {
            readonly $: Record<string, TChartPlanRestriction | undefined>;
            has$(apiMetricName: string): boolean;
            showDialog: (() => Promise<undefined>) & ((props: Omit<import("../../../core/Dialog/dialogs.js").TDialogProps, "resolve" | "reject" | "Controller">) => Promise<undefined>);
        };
    };
    __CTX: "webkit_useChartPlanRestrictionsCtx";
};
export {};
