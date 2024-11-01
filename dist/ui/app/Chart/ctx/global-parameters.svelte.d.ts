import type { TInterval, TMetricTargetSelectorInputObject } from '../api/index.js';
export type TGlobalParameters = {
    from: string;
    to: string;
    interval: TInterval;
    selector: TMetricTargetSelectorInputObject;
    includeIncompleteData: boolean;
};
export declare const useGlobalParametersCtx: {
    (defaultCtxValue?: Partial<TGlobalParameters> | undefined): {
        globalParameters: {
            readonly $$: TGlobalParameters;
        };
    };
    get(): {
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
