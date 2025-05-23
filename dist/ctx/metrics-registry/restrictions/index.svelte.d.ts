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
        } | undefined>;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        MetricsRestrictions: {
            readonly $: Record<string, {
                minInterval: string;
                restrictedFrom: null | string;
                restrictedTo: null | string;
                docs: {
                    description?: string;
                    academyLinks: string[];
                };
            } | undefined>;
        };
    };
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
            } | undefined>;
        };
    };
};
