export declare const Cache: {
    set<T extends SAN.API.QueryBase>(scheme: string, data: T): void;
    get<T_1 extends SAN.API.QueryBase>(key: string): T_1 | null;
    has(key: string): boolean;
    delete(scheme: string): void;
    keys: () => IterableIterator<string>;
    forEach: <T_2 = any>(callback: (value: T_2, key: string) => void) => void;
    set$<T_3 extends SAN.API.QueryBase>(scheme: string, updater?: SAN.API.Updater<T_3>): void;
    get$<T_4 extends SAN.API.QueryBase>(scheme: string, subscriber: SAN.API.Subscriber<T_4>): SAN.API.Unsubscriber;
    getInFlightQuery<T_5 extends SAN.API.QueryBase | null>(scheme: string): Promise<T_5> | null;
    setInFlightQuery(scheme: string, options: SAN.API.QueryOptions<any, any> | undefined, promise: Promise<any>): void;
};
export declare const getCacheScheme: (scheme: string, options: SAN.API.QueryOptions<any, any> | undefined) => string;
type SchemeCacher<T extends SAN.API.QueryBase> = (data: T) => T;
export declare const schemeCacheSetter: <T extends SAN.API.QueryBase>(scheme: string, options?: SAN.API.QueryOptions<T, any> | undefined) => SchemeCacher<T>;
type SsrCacheCallback<T extends SAN.API.QueryBase> = (...args: any[]) => [string, T];
type SsrCacher<T extends (...args: any) => any> = (...args: Parameters<T>) => void;
export declare function newSsrClientCacher<T extends SsrCacheCallback<Parameters<T>[0]>>(clb: T): SsrCacher<T>;
export declare enum CachePolicy {
    NewCache = 1
}
export {};
