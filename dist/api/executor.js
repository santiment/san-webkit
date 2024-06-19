import { BROWSER } from 'esm-env';
import { Subject, map, mergeMap, shareReplay, startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';
const ENDPOINT = ((!BROWSER && process.env.NODE_GQL_SERVER_URL) ||
    process.env.GQL_SERVER_URL);
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    origin: 'https://app.santiment.net/',
};
/**
 * `Observable`-based executor which is perfect for UI-components and complex flows
 */
export const RxQuery = (schema, options) => {
    const { schema: query, variables } = typeof schema === 'object' ? schema : { schema, variables: null };
    // NOTE: Returning ajax observable directly would cause new requests even if it was cached
    return new Subject().pipe(startWith(null), mergeMap(() => ajax({
        url: ENDPOINT,
        headers: { ...DEFAULT_HEADERS },
        body: JSON.stringify({ query, variables }),
        method: 'post',
        withCredentials: true,
    })), map((result) => {
        const { data, error, errors } = result.response;
        const queryError = error || errors;
        console.log('mapping');
        if (queryError)
            throw queryError;
        return options?.map ? options.map(data) : data;
    }), shareReplay(1));
};
/**
 * `Promise`-based executor for cases when `Observable`s are not a good fit
 */
export const Query = (schema, options) => {
    const fetcher = options?.fetcher ?? globalThis.fetch;
    const { schema: query, variables } = typeof schema === 'object' ? schema : { schema, variables: null };
    let request = fetcher(ENDPOINT, {
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
};
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
