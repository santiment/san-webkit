export type TMutateEmailLoginVariables = {
    email: string;
    consent?: string;
    subscribeToWeeklyNewsletter?: boolean;
    successRedirectUrl?: string;
};
export declare const mutateEmailLogin: <GExecutor extends (<T>(schema: import("../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor").Query = <T>(schema: import("../../api/executor").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
}>)) => <GData extends boolean = boolean>(args_0: TMutateEmailLoginVariables) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
