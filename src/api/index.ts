import type { Updater } from './cache'
import { Cache, schemeCacheSetter, getCacheScheme, CachePolicy } from './cache'
const fetch = process.browser ? window.fetch : require('node-fetch')

export type Query<T extends string, U> = Record<T, U>
export type QueryBase = Query<string, unknown>
export type QueryData<T extends QueryBase> = T[keyof T]

type Variables = { [key: string]: any }

export type QueryOptions<T extends QueryBase, U extends Variables = Variables> =
  {
    cache?: boolean
    /** Caching time in seconds */ cacheTime?: number
    cachePolicy?: CachePolicy
    precacher?: (vars?: U) => Updater<T>
    variables?: U
  }

export type Data<T extends QueryBase> = {
  data: T
  errors?: any
}

export const HEADERS = {
  'Content-Type': 'application/json',
  authorization: null,
}

const dataAccessor = <T extends QueryBase>({
  data,
  errors,
}: Data<T>): Promise<T> =>
  errors ? Promise.reject(errors) : Promise.resolve(data)

const jsonAccessor = <T extends QueryBase>(
  response: Response,
): Promise<Data<T>> => response.json()

export function query<T extends QueryBase, U extends Variables = Variables>(
  scheme: string,
  options?: QueryOptions<T, U>,
  requestOptions?: RequestInit,
): Promise<T> {
  const isWithCache = process.browser && options?.cache !== false

  if (isWithCache) {
    const cachedScheme = getCacheScheme(scheme, options)

    if (options?.cachePolicy !== CachePolicy.NewCache) {
      const data = Cache.get<T>(cachedScheme)
      if (data) return Promise.resolve(data)
    }

    const inFlightQuery = Cache.getInFlightQuery<T>(cachedScheme)
    if (inFlightQuery) return inFlightQuery
  }

  let request = fetch(process.env.GQL_SERVER_URL, {
    headers: HEADERS,
    body: JSON.stringify({
      query: scheme,
      variables: options?.variables || null,
      operationName: null,
    }),
    ...requestOptions,
    method: 'post',
    credentials: 'include',
  })
    .then(jsonAccessor)
    .then(dataAccessor) as Promise<T>

  const precacher = options?.precacher
  if (precacher) request = request.then(precacher(options?.variables))

  if (isWithCache) {
    request = request.then(schemeCacheSetter<T>(scheme, options))
    Cache.setInFlightQuery(scheme, options, request)
  }

  return request
}

export function mutate<T extends QueryBase, U extends Variables = Variables>(
  scheme: string,
  options?: QueryOptions<T, U>,
): Promise<T> {
  return query<T>(scheme, Object.assign({ cache: false }, options))
}

type Callback = (...args: any[]) => any
export function newSSRQuery<T extends Callback>(clb: T) {
  return (...args): ReturnType<T> =>
    clb(
      ...args.slice(0, -1),
      process.browser
        ? undefined
        : {
            headers: {
              ...HEADERS,
              cookie: args[args.length - 1].req.headers.cookie,
            },
          },
    )
}
