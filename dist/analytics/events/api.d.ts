import type { TEventData } from './track.js';
export declare const trackSanEvent: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>) | (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)["fetch"];
}>) => Promise<T>) = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../api/index.js").TExecutorOptions)) => (event_name: string, created_at: Date, metadata: TEventData) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<unknown> : Promise<unknown>;
