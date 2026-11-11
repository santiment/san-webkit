export declare const DEFAULT_HEADERS: Record<string, string>;
export type TAjaxData<T> = {
    data: T[];
    error?: unknown;
    errors?: unknown;
};
export type TGqlSchema = string | {
    schema: string;
    variables?: Record<string, null | undefined | number | string | boolean | Record<string, any>>;
};
/**
 * `Promise`-based executor for cases when `Observable`s are not a good fit
 */
export declare function Query<T>(schema: TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)['fetch'];
    signal: null | AbortSignal;
}>): Promise<T>;
/**
 * `Observable`-based executor which is perfect for UI-components and complex flows
 */
export declare const RxQuery: <T>(schema: TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>;
/**
 * `Promise`-based executor which is used in universal context, e.g. in page load functions (`SSR` + `CSR`)
 *
 * @example
 * ```ts
 * export const load = async (event: PageLoadEvent) => {
 *   const currentUser = await queryCurrentUser(UniQuery(event.fetch))()
 * }
 * ```
 */
export declare const UniQuery: (fetcher: (typeof globalThis)["fetch"]) => <T>(schema: Parameters<typeof Query<T>>[0], options?: Parameters<typeof Query<T>>[1]) => Promise<T>;
