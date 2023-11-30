import { Cache, schemeCacheSetter, getCacheScheme, CachePolicy } from './cache'
// eslint-disable-next-line no-undef
const fetch: any = globalThis.fetch || process.env.SERVER_FETCH

export type Variables = { [key: string]: any }

export type Data<T extends SAN.API.QueryBase> = {
  data: T
  error?: any
  errors?: any
}

export const HEADERS = {
  'Content-Type': 'application/json',
  authorization: null,
  origin: process.env.API_FETCH_ORIGIN,
}

function dataAccessor<T extends SAN.API.QueryBase>({ data, error, errors }: Data<T>): Promise<T> {
  const queryError = error || errors

  if (queryError) {
    console.log(queryError)
    return Promise.reject(queryError)
  }

  return Promise.resolve(data)
}

const jsonAccessor = <T extends SAN.API.QueryBase>(response: Response): Promise<Data<T>> =>
  response.json()

export function query<T extends SAN.API.QueryBase, U extends Variables = Variables>(
  scheme: string,
  options?: SAN.API.QueryOptions<T, U>,
  requestOptions?: SAN.API.RequestOptions,
): Promise<T> {
  if (process.env.IS_DEV_MODE) {
    const key = getCacheScheme(scheme, options)
    let status = ''

    if (Cache.get<T>(key)) status = ' (CACHED)'
    else if (Cache.getInFlightQuery<T>(key)) status = ' (IN FLIGHT)'

    console.log(
      '%c[DEV ONLY] New query' + status,
      'background:#478FFF;color:black;padding:3px;border-radius:4px',
      JSON.stringify(scheme),
    )
  }

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
    body:
      requestOptions?.body ||
      JSON.stringify({
        query: scheme,
        variables: options?.variables || null,
        // operationName: null,
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

export function mutate<T extends SAN.API.QueryBase, U extends Variables = Variables>(
  scheme: string,
  options?: SAN.API.QueryOptions<T, U>,
  requestOptions?: SAN.API.RequestOptions,
): Promise<T> {
  return query<T>(scheme, Object.assign({ cache: false }, options), requestOptions)
}

const getFileName = ({ name }: File) => name
export function upload<T extends SAN.API.QueryBase>(
  scheme: string,
  files: File[],
  filesKey = 'files',
) {
  if (!files || files.length < 1) return Promise.reject()

  const data = new FormData()
  data.append('query', scheme)
  files.forEach((file) => data.append(file.name, file))
  data.append('variables', JSON.stringify({ [filesKey]: files.map(getFileName) }))

  return fetch(process.env.GQL_SERVER_URL, {
    body: data,
    method: 'post',
    credentials: 'include',
  })
    .then(jsonAccessor)
    .then(dataAccessor) as Promise<T>
}

/*
export function query$() {
  return {
    query() {},
    subscribe() {},
    clear() {},
  }
}
*/

export type RequestEvent = {
  request?: { headers: Headers }
  getClientAddress?: () => string
}

function ServerQuery(requestEvent?: RequestEvent) {
  if (!requestEvent) return query

  const { request, getClientAddress } = requestEvent
  if (!request || !getClientAddress) return query

  return ((scheme, options) => {
    return query(scheme, options, {
      headers: {
        ...HEADERS,
        cookie: request.headers.get('cookie') as string | null,
        'x-forwarded-for': getClientAddress(),
      },
    })
  }) as Query
}

/** It's used for creating queryFunctions that can be used on server and client side. On server side it makes possible to attach user's cookies to the fetch request by passing requestEvent as the last argument to the constructed queryFunction. */
export function Universal<T extends (query: Query) => Callback>(clb: T) {
  type Fn = ReturnType<T>

  return ((...args) => {
    // const data = args.slice(0, -1)

    const _query = process.browser ? query : ServerQuery(args[args.length - 1])

    // return clb(_query as Query)(...data)
    return clb(_query as Query)(...args)
  }) as Universal<Fn, [requestEvent?: RequestEvent]>
}

type Query = typeof query
type Callback = (...args: any) => any
// eslint-disable-next-line no-redeclare
type Universal<T extends Callback, K extends [...args: any]> = (
  ...args: [...Parameters<T>, ...K]
) => ReturnType<T>

// TODO: Remove old newSSRQuery constructor [@vanguard | 21 Dec, 2022]

/**
 * @deprecated Will be removed soon. Use Universal contructor
 * */
export function newSSRQuery<T extends (...args: any[]) => any>(clb: T) {
  return (...args): ReturnType<T> =>
    clb(
      ...args.slice(0, -1),
      process.browser
        ? undefined
        : {
            headers: {
              ...HEADERS,
              ...getRequestData(args[args.length - 1].req),
            },
          },
    )
}

function getRequestData(req: Request) {
  const headers = {
    // @ts-ignore
    cookie: req.headers.cookie,
    // @ts-ignore
    'x-forwarded-for': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
  } as { [key: string]: string | null }

  if (process.env.API_FETCH_ORIGIN) {
    headers.origin = process.env.API_FETCH_ORIGIN
  }

  return headers
}
