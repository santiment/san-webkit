import { BROWSER } from 'esm-env'
import { map, Observable } from 'rxjs'
import { ajax } from 'rxjs/ajax'

const ENDPOINT = ((!BROWSER && process.env.NODE_GQL_SERVER_URL) ||
  process.env.GQL_SERVER_URL) as string

const DEFAULT_HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
  origin: 'https://app.santiment.net/',
}

type TAjaxData<T> = { data: T[]; error?: unknown; errors?: unknown }

/**
 * `Observable`-based executor which is perfect for UI-components and complex flows
 */
export const RxQuery = <T>(
  schema: TGqlSchema,
  options?: Partial<{
    map: (data: unknown) => T
  }>,
) => {
  const { schema: query, variables } =
    typeof schema === 'object' ? schema : { schema, variables: null }

  return ajax<TAjaxData<T>>({
    url: ENDPOINT,
    headers: { ...DEFAULT_HEADERS },
    body: JSON.stringify({ query, variables }),
    method: 'post',
    withCredentials: true,
  }).pipe(
    map((result) => {
      const { data, error, errors } = result.response

      const queryError = error || errors

      if (queryError) throw queryError

      return options?.map ? options.map(data) : data
    }),
  )
}

/**
 * `Promise`-based executor for cases when `Observable`s are not a good fit
 */
export const Query = <T>(
  schema: TGqlSchema,
  options?: Partial<{
    map: (data: unknown) => T
    fetcher: (typeof globalThis)['fetch']
  }>,
) => {
  const fetcher = options?.fetcher ?? globalThis.fetch
  const { schema: query, variables } =
    typeof schema === 'object' ? schema : { schema, variables: null }

  let request = fetcher(ENDPOINT, {
    headers: { ...DEFAULT_HEADERS },
    body: JSON.stringify({ query, variables }),
    method: 'post',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then(({ data, error, errors }) => {
      const queryError = error || errors

      if (queryError) {
        console.log(queryError)
        return Promise.reject(queryError)
      }

      return Promise.resolve(data)
    })
    .then((data) => {
      return options?.map ? options.map(data) : data
    }) as Promise<T>

  return request
}

/**
 * `Promise`-based executor which is used in universal context, e.g. in page load functions (`SSR` + `CSR`)
 *
 * @example
 * ```ts
 * export const load = async (event: PageLoadEvent) => {
 *   const currentUser = await queryCurrentUser(UniQuery(event.fetch))()
 * }
 * ```
 */
export const UniQuery =
  (fetcher: (typeof globalThis)['fetch']) =>
  <T>(schema: Parameters<typeof Query<T>>[0], options?: Parameters<typeof Query<T>>[1]) =>
    Query<T>(schema, { ...options, fetcher })

type TQueryExecutor = typeof RxQuery | typeof Query

type TGqlSchema =
  | string
  | {
      schema: string
      variables: Record<string, null | undefined | number | string | boolean | Record<string, any>>
    }

type TGqlSchemaCreator = (...args: any[]) => TGqlSchema

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
export function Fetcher<Data, SchemaCreator extends TGqlSchemaCreator>(
  schemaCreator: SchemaCreator,
  mapData?: (data: any) => Data,
) {
  return <Executor extends TQueryExecutor = typeof RxQuery>(
    executor: Executor = RxQuery as Executor,
  ) => {
    type Result = Executor extends (...args: any[]) => Observable<any>
      ? Observable<Data>
      : Promise<Data>

    return (...args: Parameters<SchemaCreator>) => {
      return executor<Data>(schemaCreator(...args), { map: mapData }) as Result
    }
  }
}

export type TData<T> = (...args: any[]) => (...args: any[]) => Observable<T> | Promise<T>

declare global {
  namespace API {
    export type GqlData<T> = TData<T>

    export type ExtractData<T> = T extends () => () => infer Result
      ? Result extends Promise<infer Data>
        ? Data
        : never
      : never
  }
}
