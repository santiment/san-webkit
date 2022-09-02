export declare const Cache: {
    set<T extends SAN.API.QueryBase>(scheme: string, data: T): void;
    get<T_1 extends SAN.API.QueryBase>(key: string): T_1 | null;
    has(key: string): boolean;
    delete(scheme: string): void;
    set$<T_2 extends SAN.API.QueryBase>(scheme: string, updater?: SAN.API.Updater<T_2>): void;
    get$<T_3 extends SAN.API.QueryBase>(scheme: string, subscriber: SAN.API.Subscriber<T_3>): SAN.API.Unsubscriber;
    getInFlightQuery<T_4 extends SAN.API.QueryBase | null>(scheme: string): Promise<T_4> | null;
    setInFlightQuery(scheme: string, options: SAN.API.QueryOptions<any, any> | undefined, promise: Promise<any>): void;
};
export declare const getCacheScheme: (scheme: string, options: SAN.API.QueryOptions<any, any> | undefined) => string;
declare type SchemeCacher<T extends SAN.API.QueryBase> = (data: T) => T;
export declare const schemeCacheSetter: <T extends SAN.API.QueryBase>(scheme: string, options?: SAN.API.QueryOptions<T, any> | undefined) => SchemeCacher<T>;
declare type SsrCacheCallback<T extends SAN.API.QueryBase> = (...args: any[]) => [string, T];
declare type SsrCacher<T extends (...args: any) => any> = (...args: Parameters<T>) => void;
export declare function newSsrClientCacher<T extends SsrCacheCallback<Parameters<T>[0]>>(clb: T): SsrCacher<T>;
export declare enum CachePolicy {
    NewCache = 1
}
export {};
