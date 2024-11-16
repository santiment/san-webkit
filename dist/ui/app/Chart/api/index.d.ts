import type { UTCTimestamp } from '@santiment-network/chart-next';
import type { TNominal } from '../../../../utils/index.js';
export type TInterval = `${number}m` | `${number}h` | `${number}d` | `${number}y`;
export type TTimeseriesMetricTransformInputObject = {
    type: 'cumulative_sum' | 'z_score' | 'moving_average' | 'changes' | 'consecutive_differences' | 'percent_change' | 'cumulative_percent_change';
    movingAverageBase?: number;
};
export type TBlockchainAddressSelectorInputObject = {
    id?: number | string;
    address: string;
    infrastructure: string;
};
export type TAddress = TNominal<string, 'TAddress'>;
export type TMetricTargetSelectorInputObject = Partial<{
    address: TAddress;
    blockchain: string;
    blockchainAddress: TBlockchainAddressSelectorInputObject;
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
    slug: string;
    slugs: string[];
    source: string;
    text: string;
    watchlistId: number;
    watchlistSlug: string;
}>;
export type TVariables = {
    metric: string;
    selector: TMetricTargetSelectorInputObject;
    from: string;
    to: string;
    interval: TInterval;
    transform?: TTimeseriesMetricTransformInputObject;
    includeIncompleteData?: boolean;
};
export declare const queryGetMetric: <GExecutor extends (<T>(schema: import("../../../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../../api/executor").Query = <T>(schema: import("../../../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
}>)) => <GData extends TMetricData = TMetricData>(args_0: TVariables) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export type TMetricData = {
    time: UTCTimestamp;
    value: number;
}[];
