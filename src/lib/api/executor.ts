import { building } from '$app/environment'
import { BROWSER } from 'esm-env'
import { from } from 'rxjs'

const ENDPOINT = (
  building
    ? process.env.GQL_SERVER_URL
    : (!BROWSER && process.env.NODE_GQL_SERVER_URL) || process.env.GQL_SERVER_URL
) as string

console.log({ ENDPOINT })

const DEFAULT_HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
  origin: 'https://app.santiment.net/',
}

export type TAjaxData<T> = { data: T[]; error?: unknown; errors?: unknown }

export type TGqlSchema =
  | string
  | {
      schema: string
      variables?: Record<string, null | undefined | number | string | boolean | Record<string, any>>
    }

/**
 * `Promise`-based executor for cases when `Observable`s are not a good fit
 */
export function Query<T>(
  schema: TGqlSchema,
  options?: Partial<{
    map: (data: unknown) => T
    fetcher: (typeof globalThis)['fetch']
  }>,
) {
  const fetcher = options?.fetcher ?? globalThis.fetch
  const { schema: query, variables } =
    typeof schema === 'object' ? schema : { schema, variables: null }

  const request = fetcher(ENDPOINT, {
    headers: { ...DEFAULT_HEADERS },
    body: JSON.stringify({ query, variables }),
    method: 'post',
    credentials: 'include',
  })
    .then((response) => response.json() as Promise<{ data: any; error: any; errors: any[] }>)
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
 * `Observable`-based executor which is perfect for UI-components and complex flows
 */
export const RxQuery = <T>(
  schema: TGqlSchema,
  options?: Partial<{
    map: (data: unknown) => T
  }>,
) => from(Query(schema, options))

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
