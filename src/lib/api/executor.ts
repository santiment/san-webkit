import { BROWSER } from 'esm-env'
import { Subject, map, mergeMap, shareReplay, startWith } from 'rxjs'
import { ajax } from 'rxjs/ajax'

const ENDPOINT = ((!BROWSER && process.env.NODE_GQL_SERVER_URL) ||
  process.env.GQL_SERVER_URL) as string

console.log({ BROWSER }, process.env.NODE_GQL_SERVER_URL, process.env.GQL_SERVER_URL)

const DEFAULT_HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
  origin: 'https://app.santiment.net/',
}

export type TAjaxData<T> = { data: T[]; error?: unknown; errors?: unknown }

export type TGqlSchema =
  | string
  | {
      schema: string
      variables: Record<string, null | undefined | number | string | boolean | Record<string, any>>
    }

/**
 * `Observable`-based executor which is perfect for UI-components and complex flows
 */
export const RxQuery = <T>(
  schema: TGqlSchema,
  options?: Partial<{
    refCount?: boolean
    map: (data: unknown) => T
  }>,
) => {
  const { schema: query, variables } =
    typeof schema === 'object' ? schema : { schema, variables: null }

  // NOTE: Returning ajax observable directly would cause new requests even if it was cached
  return new Subject().pipe(
    startWith(null),

    mergeMap(() =>
      ajax<TAjaxData<T>>({
        url: ENDPOINT,
        headers: { ...DEFAULT_HEADERS },
        body: JSON.stringify({ query, variables }),
        method: 'post',
        withCredentials: true,
      }),
    ),

    map((result) => {
      const { data, error, errors } = result.response

      const queryError = error || errors

      console.log('mapping')
      if (queryError) throw queryError

      return options?.map ? options.map(data) : data
    }),

    /**
     * `shareReplay` will preserve ongoing ajax request (it will not cancel it even if amount of subscribers is 0).
     * This will allow to keep cached data even after `refCount` is `0`, while cancelling follow-up instructions.
     * Setting `refCount: true` will cancel ongoing ajax request when amount of subscribers is `0`.
     */
    shareReplay({
      bufferSize: 1,
      refCount: options?.refCount ?? false,
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

  const request = fetcher(ENDPOINT, {
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
