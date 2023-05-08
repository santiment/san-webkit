const noop = (_) => _
const _cache = new Map<string, unknown>()
const _inFlightCache = new Map<string, unknown>()
const _cacheSubscribers = new Map<string, Set<SAN.API.Subscriber<any>>>()

function getSubscribers<T extends SAN.API.QueryBase>(scheme: string): Set<SAN.API.Subscriber<T>> {
  let subscribers = _cacheSubscribers.get(scheme)
  if (!subscribers) {
    subscribers = new Set()
    _cacheSubscribers.set(scheme, subscribers)
  }
  return subscribers
}

export const Cache = {
  set<T extends SAN.API.QueryBase>(scheme: string, data: T): void {
    _cache.set(scheme, data)
  },
  get<T extends SAN.API.QueryBase>(key: string): T | null {
    return _cache.get(key) as T | null
  },
  has(key: string): boolean {
    return _cache.has(key)
  },
  delete(scheme: string) {
    _cache.delete(scheme)
  },

  keys: () => _cache.keys(),
  forEach: (callback: (typeof _cache)['forEach']) => _cache.forEach(callback),

  set$<T extends SAN.API.QueryBase>(scheme: string, updater: SAN.API.Updater<T> = noop): void {
    if (Cache.has(scheme) === false) return

    const cached = Cache.get(scheme)
    const updated = updater(cached as T)
    Cache.set(scheme, updated)

    const subscribers = _cacheSubscribers.get(scheme)
    if (subscribers) {
      subscribers.forEach((subscriber: SAN.API.Subscriber<T>) => subscriber(updated))
    }
  },
  get$<T extends SAN.API.QueryBase>(
    scheme: string,
    subscriber: SAN.API.Subscriber<T>,
  ): SAN.API.Unsubscriber {
    if (!process.browser) return noop as SAN.API.Unsubscriber

    const subscribers = getSubscribers<T>(scheme)
    subscribers.add(subscriber)

    return () => {
      subscribers.delete(subscriber)
    }
  },

  getInFlightQuery<T extends SAN.API.QueryBase | null>(scheme: string): null | Promise<T> {
    return _inFlightCache.get(scheme) as Promise<T> | null
  },
  setInFlightQuery(
    scheme: string,
    options: SAN.API.QueryOptions<any, any> | undefined,
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
  options: SAN.API.QueryOptions<any, any> | undefined,
): string => (options?.variables ? scheme + JSON.stringify(options.variables) : scheme)

type SchemeCacher<T extends SAN.API.QueryBase> = (data: T) => T

export const schemeCacheSetter =
  <T extends SAN.API.QueryBase>(
    scheme: string,
    options?: SAN.API.QueryOptions<T, any>,
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

type SsrCacheCallback<T extends SAN.API.QueryBase> = (...args: any[]) => [string, T]
type SsrCacher<T extends (...args: any) => any> = (...args: Parameters<T>) => void

let wasSsrClientCached = false
export function newSsrClientCacher<T extends SsrCacheCallback<Parameters<T>[0]>>(
  clb: T,
): SsrCacher<T> {
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
