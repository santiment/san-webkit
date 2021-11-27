import type { QueryBase, QueryData, QueryOptions } from './index'

export type Updater<T extends QueryBase> = (data: T) => T
export type Subscriber<T extends QueryBase> = (data: T) => void
export type Unsubscriber = () => void

const noop = (_) => _
const _cache = new Map<string, unknown>()
const _inFlightCache = new Map<string, unknown>()
const _cacheSubscribers = new Map<string, Set<Subscriber<any>>>()

function getSubscribers<T extends QueryBase>(
  scheme: string
): Set<Subscriber<T>> {
  let subscribers = _cacheSubscribers.get(scheme)
  if (!subscribers) {
    subscribers = new Set()
    _cacheSubscribers.set(scheme, subscribers)
  }
  return subscribers
}

export const Cache = {
  set<T extends QueryBase>(scheme: string, data: T): void {
    _cache.set(scheme, data)
  },
  get<T extends QueryBase>(key: string): T | null {
    return _cache.get(key) as T | null
  },

  set$<T extends QueryBase>(scheme: string, updater: Updater<T> = noop): void {
    const cached = Cache.get(scheme)
    if (cached === null) return

    const updated = updater(cached as T)
    Cache.set(scheme, updated)

    const subscribers = _cacheSubscribers.get(scheme)
    if (subscribers) {
      subscribers.forEach((subscriber: Subscriber<T>) => subscriber(updated))
    }
  },
  get$<T extends QueryBase>(
    scheme: string,
    subscriber: Subscriber<T>
  ): Unsubscriber {
    if (!process.browser) return noop as Unsubscriber

    const subscribers = getSubscribers<T>(scheme)
    subscribers.add(subscriber)

    return () => {
      subscribers.delete(subscriber)
    }
  },

  getInFlightQuery<T extends QueryBase | null>(
    scheme: string
  ): null | Promise<T> {
    return _inFlightCache.get(scheme) as Promise<T> | null
  },
  setInFlightQuery(
    scheme: string,
    options: QueryOptions<any, any> | undefined,
    promise: Promise<any>
  ): void {
    const cachedScheme = getCacheScheme(scheme, options)
    _inFlightCache.set(
      cachedScheme,
      promise.catch((e) => {
        _inFlightCache.delete(cachedScheme)
        return Promise.reject(e)
      })
    )
  },
}

export const getCacheScheme = (
  scheme: string,
  options: QueryOptions<any, any> | undefined
): string =>
  options?.variables ? scheme + JSON.stringify(options.variables) : scheme

type SchemeCacher<T extends QueryBase> = (data: T) => T

export const schemeCacheSetter =
  <T extends QueryBase>(
    scheme: string,
    options?: QueryOptions<T, any>
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

type SsrCacheCallback<T extends QueryBase> = (...args: any[]) => [string, T]
type SsrCacher<T extends (...args: any) => any> = (
  ...args: Parameters<T>
) => void

let wasSsrClientCached = false
export function newSsrClientCacher<
  T extends SsrCacheCallback<Parameters<T>[0]>
>(clb: T): SsrCacher<T> {
  if (!process.browser) return noop as T

  return ((...args) => {
    if (wasSsrClientCached) return
    const [scheme, data] = clb(...args)
    Cache.set(scheme, data)
    wasSsrClientCached = true
  }) as T
}

export enum CachePolicy {
  NewCache = 1,
}
