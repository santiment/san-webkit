import { BROWSER } from 'esm-env';
const noop = (_) => _;
const _cache = new Map();
const _inFlightCache = new Map();
const _cacheSubscribers = new Map();
function getSubscribers(scheme) {
    let subscribers = _cacheSubscribers.get(scheme);
    if (!subscribers) {
        subscribers = new Set();
        _cacheSubscribers.set(scheme, subscribers);
    }
    return subscribers;
}
export const Cache = {
    set(scheme, data) {
        _cache.set(scheme, data);
    },
    get(key) {
        return _cache.get(key);
    },
    has(key) {
        return _cache.has(key);
    },
    delete(scheme) {
        _cache.delete(scheme);
    },
    keys: () => _cache.keys(),
    forEach: (callback) => _cache.forEach(callback),
    set$(scheme, updater = noop) {
        if (Cache.has(scheme) === false)
            return;
        const cached = Cache.get(scheme);
        const updated = updater(cached);
        Cache.set(scheme, updated);
        const subscribers = _cacheSubscribers.get(scheme);
        if (subscribers) {
            subscribers.forEach((subscriber) => subscriber(updated));
        }
    },
    get$(scheme, subscriber) {
        if (!BROWSER)
            return noop;
        const subscribers = getSubscribers(scheme);
        subscribers.add(subscriber);
        return () => {
            subscribers.delete(subscriber);
        };
    },
    getInFlightQuery(scheme) {
        return _inFlightCache.get(scheme);
    },
    setInFlightQuery(scheme, options, promise) {
        const cachedScheme = getCacheScheme(scheme, options);
        _inFlightCache.set(cachedScheme, promise.catch((e) => {
            _inFlightCache.delete(cachedScheme);
            return Promise.reject(e);
        }));
    },
};
export const getCacheScheme = (scheme, options) => ((options === null || options === void 0 ? void 0 : options.variables) ? scheme + JSON.stringify(options.variables) : scheme);
export const schemeCacheSetter = (scheme, options) => (data) => {
    const cachedScheme = getCacheScheme(scheme, options);
    Cache.set(cachedScheme, data);
    _inFlightCache.delete(cachedScheme);
    if (options === null || options === void 0 ? void 0 : options.cacheTime) {
        setTimeout(() => _cache.delete(cachedScheme), options.cacheTime * 1000);
    }
    return data;
};
let wasSsrClientCached = false;
export function newSsrClientCacher(clb) {
    if (!BROWSER)
        return noop;
    return ((...args) => {
        if (wasSsrClientCached)
            return;
        const [scheme, data] = clb(...args);
        Cache.set(scheme, data);
        wasSsrClientCached = true;
    });
}
export var CachePolicy;
(function (CachePolicy) {
    CachePolicy[CachePolicy["NewCache"] = 1] = "NewCache";
})(CachePolicy || (CachePolicy = {}));
//# sourceMappingURL=cache.js.map