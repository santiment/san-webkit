import type { TApiAlert } from '../types.js';
type TSaveAlertProps = {
    id: number | null;
    settings: TApiAlert['settings'];
    isPublic: boolean;
    isRepeating: boolean;
    cooldown: string;
    title: string;
    description: string | null;
};
export declare const mutateSaveAlert: <GExecutor extends (<T>(schema: import("../../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../../api/executor.js").Query = <T>(schema: import("../../../../api/executor.js").TGqlSchema, options?: Partial<{
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
    id: number;
} = {
    id: number;
}>(args_0: TSaveAlertProps) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export {};
