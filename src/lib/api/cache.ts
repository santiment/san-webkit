import { Observable, ReplaySubject, Subject, pipe, shareReplay } from 'rxjs'
import { RxQuery, type Query, type TGqlSchema } from './executor.js'
import type { TExecutorOptions } from './index.js'

const getKey = (schema: TGqlSchema, executor: typeof RxQuery | typeof Query) =>
  executor.name + JSON.stringify(schema)

export const ApiCache = {
  queries: new Map<string, Observable<unknown> | Promise<unknown>>(),

  add(
    schema: TGqlSchema,
    config: {
      executor: typeof RxQuery | typeof Query
      result: Promise<unknown> | Observable<unknown>
      options: TExecutorOptions
    },
  ) {
    let { executor, result, options } = config
    const key = getKey(schema, executor)

    if (result instanceof Observable) {
      // result = result.pipe(shareReplay(1))
    }

    this.queries.set(key, result)

    if (options.cache && options.cacheTime) {
      setTimeout(() => ApiCache.delete(key), options.cacheTime * 1000)
    }
  },

  delete(key: string) {
    ApiCache.queries.delete(key)
  },

  get(schema: TGqlSchema, executor: typeof RxQuery | typeof Query) {
    return this.queries.get(getKey(schema, executor))
  },
}
