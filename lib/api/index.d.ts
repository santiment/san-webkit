export type Variables = {
    [key: string]: any;
};
export type Data<T extends SAN.API.QueryBase> = {
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
export type RequestEvent = {
    request?: {
        headers: Headers;
    };
    getClientAddress?: () => string;
};
/** It's used for creating queryFunctions that can be used on server and client side. On server side it makes possible to attach user's cookies to the fetch request by passing requestEvent as the last argument to the constructed queryFunction. */
export declare function Universal<T extends (query: Query) => Callback>(clb: T): Universal<ReturnType<T>, [requestEvent?: RequestEvent | undefined]>;
type Query = typeof query;
type Callback = (...args: any) => any;
type Universal<T extends Callback, K extends [...args: any]> = (...args: [...Parameters<T>, ...K]) => ReturnType<T>;
/**
 * @deprecated Will be removed soon. Use Universal contructor
 * */
export declare function newSSRQuery<T extends (...args: any[]) => any>(clb: T): (...args: any[]) => ReturnType<T>;
export {};
