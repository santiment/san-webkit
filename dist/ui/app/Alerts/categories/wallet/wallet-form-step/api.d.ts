type AddressVariables = {
    address: string;
    infrastructure: string;
};
export type TWalletAsset = API.ExtractData<typeof queryAddressAssets>[number];
export declare const queryAddressAssets: <GExecutor extends (<T>(schema: import("../../../../../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../../../../api/executor").Query = <T>(schema: import("../../../../../../api/executor").TGqlSchema, options?: Partial<{
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
    slug: string;
    balanceUsd: number | null;
}[] = {
    slug: string;
    balanceUsd: number | null;
}[]>(variables: AddressVariables) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export {};
