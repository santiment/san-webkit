export declare const mutateAddUserEthAddress: <GExecutor extends (<T>(schema: import("../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor").Query = <T>(schema: import("../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
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
