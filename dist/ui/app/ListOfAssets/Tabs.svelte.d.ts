export type TabKey = keyof typeof TABS;
export declare const TABS: {
    all: {
        query: <GExecutor extends (<T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
            map: (data: unknown) => T;
        }>) => import("rxjs").Observable<T>) | typeof import("../../../api/executor").Query = <T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
            map: (data: unknown) => T;
        }>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
            executor: GExecutor;
        } & {
            cache?: boolean;
            cacheTime?: number;
            recache?: boolean;
        } & Partial<{
            fetcher: (typeof globalThis)["fetch"];
        }>)) => <GData extends import("../../../ctx/assets/api.js").TAsset[] = import("../../../ctx/assets/api.js").TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
        label: string;
    };
    erc20: {
        query: <GExecutor extends (<T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
            map: (data: unknown) => T;
        }>) => import("rxjs").Observable<T>) | typeof import("../../../api/executor").Query = <T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
            map: (data: unknown) => T;
        }>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
            executor: GExecutor;
        } & {
            cache?: boolean;
            cacheTime?: number;
            recache?: boolean;
        } & Partial<{
            fetcher: (typeof globalThis)["fetch"];
        }>)) => <GData extends import("../../../ctx/assets/api.js").TAsset[] = import("../../../ctx/assets/api.js").TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
        label: string;
    };
    stablecoins: {
        query: <GExecutor extends (<T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
            map: (data: unknown) => T;
        }>) => import("rxjs").Observable<T>) | typeof import("../../../api/executor").Query = <T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
            map: (data: unknown) => T;
        }>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
            executor: GExecutor;
        } & {
            cache?: boolean;
            cacheTime?: number;
            recache?: boolean;
        } & Partial<{
            fetcher: (typeof globalThis)["fetch"];
        }>)) => <GData extends import("../../../ctx/assets/api.js").TAsset[] = import("../../../ctx/assets/api.js").TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
        label: string;
    };
    defi: {
        query: <GExecutor extends (<T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
            map: (data: unknown) => T;
        }>) => import("rxjs").Observable<T>) | typeof import("../../../api/executor").Query = <T>(schema: import("../../../api/executor").TGqlSchema, options?: Partial<{
            map: (data: unknown) => T;
        }>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
            executor: GExecutor;
        } & {
            cache?: boolean;
            cacheTime?: number;
            recache?: boolean;
        } & Partial<{
            fetcher: (typeof globalThis)["fetch"];
        }>)) => <GData extends import("../../../ctx/assets/api.js").TAsset[] = import("../../../ctx/assets/api.js").TAsset[]>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
        label: string;
    };
};
export declare const tabKeys: ("all" | "stablecoins" | "defi" | "erc20")[];
type TProps = {
    selected: TabKey;
    onSelect: (tab: TabKey) => void;
};
declare const Tabs: import("svelte").Component<TProps, {}, "">;
type Tabs = ReturnType<typeof Tabs>;
export default Tabs;
