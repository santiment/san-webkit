import { Observable, firstValueFrom, from } from 'rxjs'
import { RxQuery, type Query, type TGqlSchema } from './executor.js'
import type { TExecutorOptions } from './index.js'

type TExecutor = typeof RxQuery | typeof Query
type TResult = Promise<unknown> | Observable<unknown>

const getKey = (schema: TGqlSchema) => JSON.stringify(schema)
const getExecutorType = (executor: TExecutor) => (executor === RxQuery ? 'observable' : 'promise')

export const ApiCache = {
  queries: new Map<
    string,
    Partial<{ observable: Observable<unknown>; promise: Promise<unknown> }>
  >(),

  add(
    schema: TGqlSchema,
    config: {
      executor: TExecutor
      result: TResult
      options: TExecutorOptions
    },
  ) {
    const { executor, result, options } = config
    const key = getKey(schema)

    const type = getExecutorType(executor)
    this.queries.set(key, { [type]: result })

    if (options.cache && options.cacheTime) {
      setTimeout(() => ApiCache.delete(key), options.cacheTime * 1000)
    }
  },

  delete(key: string) {
    ApiCache.queries.delete(key)
  },

  get(schema: TGqlSchema, executor: TExecutor) {
    const cached = this.queries.get(getKey(schema))
    if (!cached) return undefined

    const type = getExecutorType(executor)

    return cached[type] || translateCachedExecutionResult(type, cached)
  },
}

function translateCachedExecutionResult(
  type: ReturnType<typeof getExecutorType>,
  cached: NonNullable<ReturnType<(typeof ApiCache)['queries']['get']>>,
) {
  const altType = type !== 'promise' ? 'promise' : 'observable'
  const altResult = cached[altType]
  if (!altResult) return undefined

  let result: undefined | TResult

  if (altResult instanceof Observable) result = firstValueFrom(altResult)
  else if (altResult instanceof Promise) result = from(altResult)

  return (cached[type] = result as any)
}
