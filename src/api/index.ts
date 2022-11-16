import { Cache, schemeCacheSetter, getCacheScheme, CachePolicy } from './cache'
const fetch = process.browser ? window.fetch : require('node-fetch')

type Variables = { [key: string]: any }

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
export function upload<T extends SAN.API.QueryBase>(scheme: string, files: File[]) {
  if (!files || files.length < 1) return Promise.reject()

  const data = new FormData()
  data.append('query', scheme)
  files.forEach((file) => data.append(file.name, file))
  data.append('variables', JSON.stringify({ files: files.map(getFileName) }))

  return fetch(process.env.GQL_SERVER_URL, {
    body: data,
    method: 'post',
    credentials: 'include',
  })
    .then(jsonAccessor)
    .then(dataAccessor) as Promise<T>
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
              ...getRequestData(args[args.length - 1].req),
            },
          },
    )
}

export function SSR<T extends Callback>(clb: T) {
  return (...args: Parameters<T>): ReturnType<T> => {
    if (process.browser) return clb(...args)

    const { request, getClientAddress } = args[args.length - 1]
    return clb(...args.slice(0, -1), {
      headers: {
        ...HEADERS,
        cookie: request.headers.get('cookie'),
        'x-forwarded-for': getClientAddress(),
      },
    })
  }
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

/*
export function query$() {
  return {
    query() {},
    subscribe() {},
    clear() {},
  }
}
*/
