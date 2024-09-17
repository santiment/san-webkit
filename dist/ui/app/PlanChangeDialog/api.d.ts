export declare const mutateUpdateSubscription: <GExecutor extends (<T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>) | (<T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)["fetch"];
}>) => Promise<T>) = <T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../../api/index.js").TExecutorOptions)) => (currentSubscriptionId: string | number, planId: string | number) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<unknown> : Promise<unknown>;
