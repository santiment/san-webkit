export declare const workerFetchMetric: (payload: {
    minimalDelay?: number;
    priority?: number;
    parameters: import("./types.js").TMetricParameters;
}, ondata: (msg: {
    id: import("./types.js").TMessageId;
    type: 1;
} & {
    payload: {
        timeseries: import("../api/index.js").TMetricData;
    } | {
        error: any;
    };
} & {
    state?: typeof import("./types.js").RESPONSE_STATE[keyof typeof import("./types.js").RESPONSE_STATE];
}) => void) => {
    cancel: () => void;
};
export declare const workerFetchFormulaMetric: (payload: {
    minimalDelay?: number;
    priority?: number;
    parameters: import("./types.js").TMetricParameters;
    index: number;
    formula: import("./types.js").TMetricFormula;
    metrics: {
        name: string;
        selector: null | Partial<{
            address: import("../api/index.js").TAddress;
            blockchain: string;
            blockchainAddress: import("../api/index.js").TBlockchainAddressSelectorInputObject;
            contractAddress: string;
            ecosystems: string[];
            holdersCount: number;
            ignoredSlugs: string[];
            label: string;
            labelFqn: string;
            labelFqns: string[];
            labels: string[];
            marketSegments: string[];
            organization: string;
            organizations: string[];
            owner: string;
            owners: string[];
            slug: import("../../../../ctx/assets/api.js").TAssetSlug;
            slugs: import("../../../../ctx/assets/api.js").TAssetSlug[];
            source: string;
            text: string;
            watchlistId: number;
            watchlistSlug: string;
        }>;
        formula?: import("./types.js").TMetricFormula;
    }[];
}, ondata: (msg: {
    id: import("./types.js").TMessageId;
    type: 2;
} & {
    payload: {
        timeseries: import("../api/index.js").TMetricData;
    } | {
        error: any;
    };
} & {
    state?: typeof import("./types.js").RESPONSE_STATE[keyof typeof import("./types.js").RESPONSE_STATE];
}) => void) => {
    cancel: () => void;
};
export { workerCancelRequest } from './host.js';
