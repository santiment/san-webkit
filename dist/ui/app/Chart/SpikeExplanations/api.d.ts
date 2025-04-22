import type { TAssetSlug } from '../../../../ctx/assets/index.svelte.js';
import type { Time } from '@santiment-network/chart-next';
export type TVariables = {
    slug: TAssetSlug;
    from?: string;
    to?: string;
};
export declare const queryGetMetricSpikeExplanations: <GExecutor extends (<T>(schema: import("../../../../api/executor").TGqlSchema, options?: Partial<{
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
}>)) => <GData extends {
    explanation: string;
    spikeStartDatetime: Time;
    spikeEndDatetime: Time;
}[] = {
    explanation: string;
    spikeStartDatetime: Time;
    spikeEndDatetime: Time;
}[]>(variables: TVariables) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export type TData = API.ExtractData<typeof queryGetMetricSpikeExplanations>;
