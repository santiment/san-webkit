import type { TNominal } from '../../utils/types/index.js';
export type TAssetSlug = TNominal<string, 'TAssetSlug'>;
export type TAsset = {
    slug: TAssetSlug;
    name: string;
    ticker: string;
    rank: null | number;
    priceUsd: null | number;
    infrastructure: null | string;
    marketSegments?: string[];
    chain?: (typeof Blockchain)[keyof typeof Blockchain];
};
export declare const PROJECT_FRAGMENT = "slug\n      ticker\n      name\n      priceUsd\n      infrastructure\n      marketSegments\n      rank";
export declare const queryAllProjects: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor.js").Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
    signal: null | AbortSignal;
}>)) => <GData extends TAsset[] = TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const queryErc20Projects: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor.js").Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
    signal: null | AbortSignal;
}>)) => <GData extends TAsset[] = TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const queryStablecoinProjects: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor.js").Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
    signal: null | AbortSignal;
}>)) => <GData extends TAsset[] = TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const queryDeFiProjects: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor.js").Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
    signal: null | AbortSignal;
}>)) => <GData extends TAsset[] = TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const Blockchain: {
    BTC: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "BTC">;
    ETH: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "ETH">;
    BEP20: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "BEP20">;
    XRP: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "XRP">;
    Cardano: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "Cardano">;
    Polygon: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "Polygon">;
    Avalanche: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "Avalanche">;
    Arbitrum: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "Arbitrum">;
    LTC: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "LTC">;
    BCH: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "BCH">;
    Optimism: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "Optimism">;
    ICP: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "ICP">;
    Solana: {
        slug: string;
        name: string;
        ticker: string;
    } & Record<"infrastructure", "Solana">;
};
export declare const checkIsErc20Asset: (asset: TAsset) => asset is TAsset & {
    marketSegments: (string | "Ethereum")[];
};
export declare const checkIsStablecoinAsset: (asset: TAsset) => asset is TAsset & {
    marketSegments: (string | "Stablecoin")[];
};
export declare const checkIsDeFiAsset: (asset: TAsset) => asset is TAsset & {
    marketSegments: (string | "DeFi")[];
};
export type TBlockchainInfrastructure = keyof typeof Blockchain & (string & {});
export declare const checkIsAssetOnBlockchain: <GBlockchain extends TBlockchainInfrastructure>(asset: TAsset, blockchainInfrastructure: GBlockchain) => asset is TAsset & {
    infrastructure: GBlockchain;
};
export declare const FIATS: {
    slug: TAssetSlug;
    name: string;
    ticker: string;
    priceUsd: null;
    rank: null;
    infrastructure: null;
    group: undefined;
}[];
export declare const INDICES_AND_SUPPLY: {
    slug: TAssetSlug;
    name: string;
    ticker: string;
    priceUsd: null;
    rank: null;
    infrastructure: null;
    group: undefined;
}[];
export declare const FUNDS: {
    slug: TAssetSlug;
    name: string;
    ticker: string;
    priceUsd: null;
    rank: null;
    infrastructure: null;
    group: undefined;
}[];
