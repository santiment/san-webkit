export { type TMetricRestrictions } from './api.js';
export declare const useMetricsRestrictionsCtx: (() => {
    MetricsRestrictions: {
        readonly $: Record<string, {
            minInterval: string;
            restrictedFrom: null | string;
            restrictedTo: null | string;
            docs: {
                description?: string;
                academyLinks: string[];
            };
            availableVersions: string[];
        } | undefined>;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        MetricsRestrictions: {
            readonly $: Record<string, {
                minInterval: string;
                restrictedFrom: null | string;
                restrictedTo: null | string;
                docs: {
                    description?: string;
                    academyLinks: string[];
                };
                availableVersions: string[];
            } | undefined>;
        };
    };
    __CTX: "webkit_useMetricsRestrictionsCtx";
};
