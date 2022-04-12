import { Cache, schemeCacheSetter, getCacheScheme, CachePolicy } from './cache'
const fetch = process.browser ? window.fetch : require('node-fetch')

type Variables = { [key: string]: any }

export type Data<T extends SAN.API.QueryBase> = {
  data: T
  errors?: any
}

export const HEADERS = {
  'Content-Type': 'application/json',
  authorization: null,
}

const dataAccessor = <T extends SAN.API.QueryBase>({ data, errors }: Data<T>): Promise<T> =>
  errors ? Promise.reject(errors) : Promise.resolve(data)

const jsonAccessor = <T extends SAN.API.QueryBase>(response: Response): Promise<Data<T>> =>
  response.json()

export function query<T extends SAN.API.QueryBase, U extends Variables = Variables>(
  scheme: string,
  options?: SAN.API.QueryOptions<T, U>,
  requestOptions?: SAN.API.RequestOptions,
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
): Promise<T> {
  return query<T>(scheme, Object.assign({ cache: false }, options))
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
