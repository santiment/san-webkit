import { Cache, schemeCacheSetter, getCacheScheme, CachePolicy } from './cache';
const fetch = process.browser ? window.fetch : require('node-fetch');
export const HEADERS = {
    'Content-Type': 'application/json',
    authorization: null,
};
const dataAccessor = ({ data, errors }) => errors ? Promise.reject(errors) : Promise.resolve(data);
const jsonAccessor = (response) => response.json();
export function query(scheme, options, requestOptions) {
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
/*
export function query$() {
  return {
    query() {},
    subscribe() {},
    clear() {},
  }
}
*/
//# sourceMappingURL=index.js.map