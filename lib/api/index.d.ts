declare type Variables = {
    [key: string]: any;
};
export declare type Data<T extends SAN.API.QueryBase> = {
    data: T;
    error?: any;
    errors?: any;
};
export declare const HEADERS: {
    'Content-Type': string;
    authorization: null;
    origin: any;
};
export declare function query<T extends SAN.API.QueryBase, U extends Variables = Variables>(scheme: string, options?: SAN.API.QueryOptions<T, U>, requestOptions?: SAN.API.RequestOptions): Promise<T>;
export declare function mutate<T extends SAN.API.QueryBase, U extends Variables = Variables>(scheme: string, options?: SAN.API.QueryOptions<T, U>, requestOptions?: SAN.API.RequestOptions): Promise<T>;
export declare function upload<T extends SAN.API.QueryBase>(scheme: string, files: File[]): Promise<T>;
declare type Callback = (...args: any[]) => any;
export declare function newSSRQuery<T extends Callback>(clb: T): (...args: any[]) => ReturnType<T>;
export declare function SSR<T extends Callback>(clb: T): (...args: Parameters<T>) => ReturnType<T>;
export {};
