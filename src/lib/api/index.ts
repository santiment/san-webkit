import { BROWSER } from 'esm-env'
import { Observable } from 'rxjs'
import { Query, RxQuery, type TGqlSchema } from './executor.js'
import { MockExecutor } from './mock.js'
import { ApiCache } from './cache.js'
import { log } from './log.js'

type TQueryExecutor = typeof RxQuery | typeof Query

type TGqlSchemaCreator = (...args: any[]) => TGqlSchema

type TExecutorConfig<T extends TQueryExecutor> = {
  executor: T
} & TExecutorOptions

export type TExecutorOptions = {
  cache?: boolean
  cacheTime?: number
  recache?: boolean
}

const DEFAULT_EXECUTOR_OPTIONS = {
  /**
   * May request save/use existing result
   */
  cache: BROWSER,

  /**
   * Caching time in seconds. Works only if `cache` is `true`.
   * `undefined` will cache data indefinitely.
   */
  cacheTime: 5,

  /**
   * Do not use current cache and store new cache
   * */
  recache: false,
} as const satisfies TExecutorOptions

function setupExecutor<GExecutor extends TQueryExecutor>(
  executorConfig: GExecutor | TExecutorConfig<GExecutor>,
  globalOptions?: TExecutorOptions,
) {
  const isConfig = 'executor' in executorConfig
  const executor = isConfig ? executorConfig.executor : executorConfig
  const options = Object.assign(
    {},
    DEFAULT_EXECUTOR_OPTIONS,
    globalOptions,
    isConfig ? executorConfig : {},
  )

  return { executor, options }
}

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
export function ApiQuery<Data, SchemaCreator extends TGqlSchemaCreator>(
  schemaCreator: SchemaCreator,
  mapData?: (data: any) => Data,
  globalOptions?: TExecutorOptions,
) {
  return <GExecutor extends TQueryExecutor = typeof RxQuery>(
    executorConfig: GExecutor | TExecutorConfig<GExecutor> = RxQuery as GExecutor,
  ) => {
    type Result<GData extends Data = Data> = GExecutor extends (...args: any[]) => Observable<any>
      ? Observable<GData>
      : Promise<GData>

    const { executor, options } = setupExecutor(executorConfig, globalOptions)

    return <GData extends Data = Data>(...args: Parameters<SchemaCreator>) => {
      const schema = schemaCreator(...args)

      if (process.env.NODE_ENV !== 'production') {
        const mocked = MockExecutor(executor, schema, { map: mapData })

        if (mocked !== undefined) {
          if (process.env.IS_LOGGING_ENABLED) log({ schema, mocked, executor })
          return mocked as unknown as Result<GData>
        }
      }

      const isCachingEnabled = BROWSER && options.cache

      if (isCachingEnabled) {
        const cached = ApiCache.get(schema, executor)

        if (cached && !options.recache) {
          if (process.env.IS_LOGGING_ENABLED) log({ schema, executor, cached })
          return cached as unknown as Result<GData>
        }
      }

      const result = executor(schema, { map: mapData }) as Result<GData>

      if (isCachingEnabled) ApiCache.add(schema, { options, executor, result })

      if (process.env.IS_LOGGING_ENABLED) log({ schema, executor, result })

      return result
    }
  }
}

export const ApiMutation = <Data, SchemaCreator extends TGqlSchemaCreator>(
  schemaCreator: SchemaCreator,
  mapData?: (data: any) => Data,
) => ApiQuery(schemaCreator, mapData, { cache: false })

export type TData<T> = (...args: any[]) => (...args: any[]) => Observable<T> | Promise<T>

declare global {
  namespace API {
    export type GqlData<T> = TData<T>

    export type ExtractData<T> = T extends (...args: any) => (...args: any) => infer Result
      ? Result extends Promise<infer Data>
        ? Data
        : never
      : never
  }
}
