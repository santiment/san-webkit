import type { Observable } from 'rxjs';
import { Query, RxQuery, type TGqlSchema } from './executor.js';
type TQueryExecutor = typeof RxQuery | typeof Query;
type TGqlSchemaCreator = (...args: any[]) => TGqlSchema;
type TExecutorConfig<T extends TQueryExecutor> = {
    executor: T;
} & TExecutorOptions;
export type TExecutorOptions = {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)['fetch'];
    signal: null | AbortSignal;
}>;
/**
 * Factory for setting up an API request
 *
 * `Observable`-based executor (`RxQuery`) is used as a default executor
 *
 * @example
 * ```ts
 * export const queryCurrentUser = Fetcher(
 *   () => `{ currentUser { id  } }`,
 *   (gql: { currentUser: null | { id: number } }) => gql.currentUser,
 * )
 * ```
 */
export declare function ApiQuery<Data, SchemaCreator extends TGqlSchemaCreator>(schemaCreator: SchemaCreator, mapData?: (data: any) => Data, globalOptions?: TExecutorOptions): <GExecutor extends TQueryExecutor = <T>(schema: TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => Observable<T>>(executorConfig?: GExecutor | TExecutorConfig<GExecutor>) => <GData extends Data = Data>(...args: Parameters<SchemaCreator>) => GExecutor extends (...args: any[]) => Observable<any> ? Observable<GData> : Promise<GData>;
export declare const ApiMutation: <Data, SchemaCreator extends TGqlSchemaCreator>(schemaCreator: SchemaCreator, mapData?: (data: any) => Data) => <GExecutor extends TQueryExecutor = <T>(schema: TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => Observable<T>>(executorConfig?: GExecutor | TExecutorConfig<GExecutor>) => <GData extends Data = Data>(...args: Parameters<SchemaCreator>) => GExecutor extends (...args: any[]) => Observable<any> ? Observable<GData> : Promise<GData>;
export type TData<T> = (...args: any[]) => (...args: any[]) => Observable<T> | Promise<T>;
declare global {
    namespace API {
        type GqlData<T> = TData<T>;
        type ExtractData<T> = T extends (...args: any) => (...args: any) => infer Result ? Result extends Promise<infer Data> ? Data : never : never;
    }
}
export {};
