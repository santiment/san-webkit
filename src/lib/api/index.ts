import { Observable } from 'rxjs'
import { Query, RxQuery, type TGqlSchema } from './executor.js'
import { MockExecutor } from './mock.js'

type TQueryExecutor = typeof RxQuery | typeof Query

type TGqlSchemaCreator = (...args: any[]) => TGqlSchema

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
export function Fetcher<Data, SchemaCreator extends TGqlSchemaCreator>(
  schemaCreator: SchemaCreator,
  mapData?: (data: any) => Data,
) {
  return <Executor extends TQueryExecutor = typeof RxQuery>(
    executor: Executor = RxQuery as Executor,
  ) => {
    type Result = Executor extends (...args: any[]) => Observable<any>
      ? Observable<Data>
      : Promise<Data>

    return (...args: Parameters<SchemaCreator>) => {
      const schema = schemaCreator(...args)

      if (process.env.NODE_ENV !== 'production') {
        const mocked = MockExecutor(executor, schema, { map: mapData })

        if (mocked !== undefined) {
          return mocked as unknown as Result
        }
      }

      return executor<Data>(schema, { map: mapData }) as Result
    }
  }
}

export type TData<T> = (...args: any[]) => (...args: any[]) => Observable<T> | Promise<T>

declare global {
  namespace API {
    export type GqlData<T> = TData<T>

    export type ExtractData<T> = T extends () => () => infer Result
      ? Result extends Promise<infer Data>
        ? Data
        : never
      : never
  }
}
