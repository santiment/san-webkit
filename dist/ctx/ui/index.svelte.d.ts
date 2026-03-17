import { Query } from '../../api/executor.js';
export declare const mutateUpdateUserSettings: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
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
    signal: null | AbortSignal;
}>)) => <GData extends unknown = unknown>(isNightMode: boolean) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const useUiCtx: (({ isLiteVersion, isNightMode, timeZone }?: any) => {
    ui: {
        readonly $$: {
            isNightMode: any;
            isLiteVersion: any;
            timeZone: any;
        };
        toggleNightMode(): boolean;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        ui: {
            readonly $$: {
                isNightMode: any;
                isLiteVersion: any;
                timeZone: any;
            };
            toggleNightMode(): boolean;
        };
    };
    set: ({ isLiteVersion, isNightMode, timeZone }?: any) => {
        ui: {
            readonly $$: {
                isNightMode: any;
                isLiteVersion: any;
                timeZone: any;
            };
            toggleNightMode(): boolean;
        };
    };
    __CTX: "useUiCtx";
};
export declare function useCustomerNightModeToggleFlow(): {
    toggleNightMode(): void;
};
