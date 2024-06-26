import { Observable } from 'rxjs';
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
};
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
export declare function Fetcher<Data, SchemaCreator extends TGqlSchemaCreator>(schemaCreator: SchemaCreator, mapData?: (data: any) => Data, globalOptions?: TExecutorOptions): <GExecutor extends TQueryExecutor = <T>(schema: TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}> | undefined) => Observable<T | T[]>>(executorConfig?: GExecutor | TExecutorConfig<GExecutor>) => (...args: Parameters<SchemaCreator>) => GExecutor extends (...args: any[]) => Observable<any> ? Observable<Data> : Promise<Data>;
export type TData<T> = (...args: any[]) => (...args: any[]) => Observable<T> | Promise<T>;
declare global {
    namespace API {
        type GqlData<T> = TData<T>;
        type ExtractData<T> = T extends () => () => infer Result ? Result extends Promise<infer Data> ? Data : never : never;
    }
}
export {};
