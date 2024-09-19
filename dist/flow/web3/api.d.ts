export declare const mutateAddUserEthAddress: <GExecutor extends (<T>(schema: import("../../api/executor").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>) | (<T>(schema: import("../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)["fetch"];
}>) => Promise<T>) = <T>(schema: import("../../api/executor").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../api/index.js").TExecutorOptions)) => (variables: {
    address: string;
    signature: string;
    messageHash: string;
}) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<{
    ethAccounts: {
        address: string;
    }[];
}> : Promise<{
    ethAccounts: {
        address: string;
    }[];
}>;
