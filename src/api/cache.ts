import type { QueryData, QueryRecord, QueryOptions } from './index'

type Updater<T extends QueryData> = (data: QueryRecord<T>) => QueryRecord<T>
export type Subscriber<T extends QueryData> = (data: QueryRecord<T>) => void
export type Unsubscriber = () => void

const noop = (_) => _
const _cache = new Map<string, unknown>()
const _inFlightCache = new Map<string, unknown>()
const _cacheSubscribers = new Map<string, Set<Subscriber<any>>>()

function getSubscribers<T extends QueryData>(
  scheme: string,
): Set<Subscriber<T>> {
  let subscribers = _cacheSubscribers.get(scheme)
  if (!subscribers) {
    subscribers = new Set()
    _cacheSubscribers.set(scheme, subscribers)
  }
  return subscribers
}

export const Cache = {
  set<T extends QueryData>(scheme: string, data: QueryRecord<T>): void {
    _cache.set(scheme, data)
  },
  get<T extends QueryData | null>(key: string): QueryRecord<T> | null {
    return _cache.get(key) as QueryRecord<T> | null
  },

  set$<T extends QueryData>(scheme: string, updater: Updater<T> = noop): void {
    const cached = Cache.get(scheme)
    if (!cached) return

    const updated = updater(cached as QueryRecord<T>)
    Cache.set(scheme, updated)

    const subscribers = _cacheSubscribers.get(scheme)
    if (subscribers) {
      subscribers.forEach((subscriber: Subscriber<T>) => subscriber(updated))
    }
  },
  get$<T extends QueryData>(
    scheme: string,
    subscriber: Subscriber<T>,
  ): Unsubscriber {
    if (!process.browser) return noop as Unsubscriber

    const subscribers = getSubscribers<T>(scheme)
    subscribers.add(subscriber)

    return () => {
      subscribers.delete(subscriber)
    }
  },

  getInFlightQuery<T extends QueryData | null>(
    scheme: string,
  ): null | Promise<QueryRecord<T>> {
    return _inFlightCache.get(scheme) as Promise<QueryRecord<T>> | null
  },
  setInFlightQuery(
    scheme: string,
    options: QueryOptions | undefined,
    promise: Promise<any>,
  ): void {
    const cachedScheme = getCacheScheme(scheme, options)
    _inFlightCache.set(
      cachedScheme,
      promise.catch((e) => {
        _inFlightCache.delete(cachedScheme)
        return Promise.reject(e)
      }),
    )
  },
}

export const getCacheScheme = (
  scheme: string,
  options: QueryOptions | undefined,
): string =>
  options?.variables ? scheme + JSON.stringify(options.variables) : scheme

type SchemeCacher<T extends QueryData> = (
  data: QueryRecord<T>,
) => QueryRecord<T>
export const schemeCacheSetter =
  <T extends QueryData>(
    scheme: string,
    options?: QueryOptions,
  ): SchemeCacher<T> =>
  (data) => {
    const cachedScheme = getCacheScheme(scheme, options)

    Cache.set(cachedScheme, data)
    _inFlightCache.delete(cachedScheme)

    if (options?.cacheTime) {
      setTimeout(() => _cache.delete(cachedScheme), options.cacheTime * 1000)
    }

    return data
  }

type SsrCacheCallback<T extends QueryData> = (
  ...args: any[]
) => [string, QueryRecord<T>]
type SsrCacher<T extends (...args: any) => any> = (
  ...args: Parameters<T>
) => void

let wasSsrClientCached = false
export function newSsrClientCacher<
  T extends SsrCacheCallback<Parameters<T>[0]>,
>(clb: T): SsrCacher<T> {
  if (!process.browser) return noop as T

  return ((...args) => {
    if (wasSsrClientCached) return
    const [scheme, data] = clb(...args)
    Cache.set(scheme, data)
    wasSsrClientCached = true
  }) as T
}
