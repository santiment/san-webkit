import type { TInterval, TMetricTargetSelectorInputObject } from '../api/index.js';
export type TGlobalParameters = {
    from: string;
    to: string;
    interval?: null | TInterval;
    selector: TMetricTargetSelectorInputObject;
    includeIncompleteData: boolean;
};
export declare const useChartGlobalParametersCtx: ((defaultCtxValue?: Partial<TGlobalParameters>) => {
    globalParameters: {
        readonly $$: TGlobalParameters;
        readonly dates$: {
            from: string;
            to: string;
            fromUtcDate: Date;
            toUtcDate: Date;
        };
        readonly autoInterval$: TInterval;
        changeDates(from: string, to: string): void;
        applyDateRange(dateRange: string): void;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: (defaultCtxValue?: Partial<TGlobalParameters>) => {
        globalParameters: {
            readonly $$: TGlobalParameters;
            readonly dates$: {
                from: string;
                to: string;
                fromUtcDate: Date;
                toUtcDate: Date;
            };
            readonly autoInterval$: TInterval;
            changeDates(from: string, to: string): void;
            applyDateRange(dateRange: string): void;
        };
    };
    __CTX: "webkit_useChartGlobalParametersCtx";
};
