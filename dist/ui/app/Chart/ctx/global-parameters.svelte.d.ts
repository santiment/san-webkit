import type { TInterval, TMetricTargetSelectorInputObject } from '../api/index.js';
export type TGlobalParameters = {
    from: string;
    to: string;
    interval: TInterval;
    selector: TMetricTargetSelectorInputObject;
    includeIncompleteData: boolean;
};
export declare const useChartGlobalParametersCtx: {
    (defaultCtxValue?: Partial<TGlobalParameters> | undefined): {
        globalParameters: {
            readonly $$: TGlobalParameters;
        };
    };
    get(allCtxs?: Map<string, any>): {
        globalParameters: {
            readonly $$: TGlobalParameters;
        };
    };
    set(defaultCtxValue?: Partial<TGlobalParameters> | undefined): {
        globalParameters: {
            readonly $$: TGlobalParameters;
        };
    };
};
