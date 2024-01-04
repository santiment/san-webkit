import { Cache, schemeCacheSetter, getCacheScheme, CachePolicy } from './cache.js';
// eslint-disable-next-line no-undef
const fetch = process.env.SERVER_FETCH || globalThis.fetch;
export const HEADERS = {
    'Content-Type': 'application/json',
    authorization: null,
    origin: process.env.API_FETCH_ORIGIN,
};
function dataAccessor({ data, error, errors }) {
    const queryError = error || errors;
    if (queryError) {
        console.log(queryError);
        return Promise.reject(queryError);
    }
    return Promise.resolve(data);
}
const jsonAccessor = (response) => response.json();
export function query(scheme, options, requestOptions) {
    if (process.env.IS_DEV_MODE) {
        const key = getCacheScheme(scheme, options);
        let status = '';
        if (Cache.get(key))
            status = ' (CACHED)';
        else if (Cache.getInFlightQuery(key))
            status = ' (IN FLIGHT)';
        console.log('%c[DEV ONLY] New query' + status, 'background:#478FFF;color:black;padding:3px;border-radius:4px', JSON.stringify(scheme));
    }
    const isWithCache = process.browser && (options === null || options === void 0 ? void 0 : options.cache) !== false;
    if (isWithCache) {
        const cachedScheme = getCacheScheme(scheme, options);
        if ((options === null || options === void 0 ? void 0 : options.cachePolicy) !== CachePolicy.NewCache) {
            const data = Cache.get(cachedScheme);
            if (data)
                return Promise.resolve(data);
        }
        const inFlightQuery = Cache.getInFlightQuery(cachedScheme);
        if (inFlightQuery)
            return inFlightQuery;
    }
    let request = fetch(process.env.GQL_SERVER_URL, Object.assign(Object.assign({ headers: HEADERS, body: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.body) ||
            JSON.stringify({
                query: scheme,
                variables: (options === null || options === void 0 ? void 0 : options.variables) || null,
                // operationName: null,
            }) }, requestOptions), { method: 'post', credentials: 'include' }))
        .then(jsonAccessor)
        .then(dataAccessor);
    const precacher = options === null || options === void 0 ? void 0 : options.precacher;
    if (precacher)
        request = request.then(precacher(options === null || options === void 0 ? void 0 : options.variables));
    if (isWithCache) {
        request = request.then(schemeCacheSetter(scheme, options));
        Cache.setInFlightQuery(scheme, options, request);
    }
    return request;
}
export function mutate(scheme, options, requestOptions) {
    return query(scheme, Object.assign({ cache: false }, options), requestOptions);
}
const getFileName = ({ name }) => name;
export function upload(scheme, files) {
    if (!files || files.length < 1)
        return Promise.reject();
    const data = new FormData();
    data.append('query', scheme);
    files.forEach((file) => data.append(file.name, file));
    data.append('variables', JSON.stringify({ files: files.map(getFileName) }));
    return fetch(process.env.GQL_SERVER_URL, {
        body: data,
        method: 'post',
        credentials: 'include',
    })
        .then(jsonAccessor)
        .then(dataAccessor);
}
function ServerQuery(requestEvent) {
    if (!requestEvent)
        return query;
    const { request, getClientAddress } = requestEvent;
    if (!request || !getClientAddress)
        return query;
    return ((scheme, options) => {
        return query(scheme, options, {
            headers: Object.assign(Object.assign({}, HEADERS), { cookie: request.headers.get('cookie'), 'x-forwarded-for': getClientAddress() }),
        });
    });
}
/** It's used for creating queryFunctions that can be used on server and client side. On server side it makes possible to attach user's cookies to the fetch request by passing requestEvent as the last argument to the constructed queryFunction. */
export function Universal(clb) {
    return ((...args) => {
        // const data = args.slice(0, -1)
        const _query = process.browser ? query : ServerQuery(args[args.length - 1]);
        // return clb(_query as Query)(...data)
        return clb(_query)(...args);
    });
}
// TODO: Remove old newSSRQuery constructor [@vanguard | 21 Dec, 2022]
/**
 * @deprecated Will be removed soon. Use Universal contructor
 * */
export function newSSRQuery(clb) {
    return (...args) => clb(...args.slice(0, -1), process.browser
        ? undefined
        : {
            headers: Object.assign(Object.assign({}, HEADERS), getRequestData(args[args.length - 1].req)),
        });
}
function getRequestData(req) {
    const headers = {
        // @ts-ignore
        cookie: req.headers.cookie,
        // @ts-ignore
        'x-forwarded-for': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    };
    if (process.env.API_FETCH_ORIGIN) {
        headers.origin = process.env.API_FETCH_ORIGIN;
    }
    return headers;
}
//# sourceMappingURL=index.js.map