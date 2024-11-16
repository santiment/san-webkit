import { type TNominal } from '../../utils/index.js';
import { Query } from '../../api/executor.js';
export type TAssetSlug = TNominal<string, 'TAssetSlug'>;
export type TAsset = {
    slug: TAssetSlug;
    name: string;
    ticker: string;
    rank?: null | number;
};
export declare const PROJECT_FRAGMENT = "slug\n      ticker\n      name\n      priceUsd\n      infrastructure\n      logoUrl\n      rank";
export declare const queryAllProjects: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
}>)) => <GData extends TAsset[] = TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const useAssetsCtx: {
    (): {
        assets: {
            readonly $: TAsset[];
        };
        getAssetBySlug(slug: string): undefined | TAsset;
    };
    get(allCtxs?: Map<string, any>): {
        assets: {
            readonly $: TAsset[];
        };
        getAssetBySlug(slug: string): undefined | TAsset;
    };
    set(): {
        assets: {
            readonly $: TAsset[];
        };
        getAssetBySlug(slug: string): undefined | TAsset;
    };
};
