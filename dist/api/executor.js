import { BROWSER } from 'esm-env';
import { from } from 'rxjs';
const ENDPOINT = ((!BROWSER && process.env.NODE_GQL_SERVER_URL) ||
    process.env.GQL_SERVER_URL);
export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    origin: 'https://app.santiment.net/',
};
/**
 * `Promise`-based executor for cases when `Observable`s are not a good fit
 */
export function Query(schema, options) {
    const fetcher = options?.fetcher ?? globalThis.fetch;
    const { schema: query, variables } = typeof schema === 'object' ? schema : { schema, variables: null };
    const request = fetcher(ENDPOINT, {
        headers: { ...DEFAULT_HEADERS },
        body: JSON.stringify({ query, variables }),
        method: 'post',
        credentials: 'include',
    })
        .then((response) => response.json())
        .then(({ data, error, errors }) => {
        const queryError = error || errors;
        if (queryError) {
            console.log(queryError);
            return Promise.reject(queryError);
        }
        return Promise.resolve(data);
    })
        .then((data) => {
        return options?.map ? options.map(data) : data;
    });
    return request;
}
/**
 * `Observable`-based executor which is perfect for UI-components and complex flows
 */
export const RxQuery = (schema, options) => from(Query(schema, options));
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
export const UniQuery = (fetcher) => (schema, options) => Query(schema, { ...options, fetcher });
