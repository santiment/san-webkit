import { Observable, ReplaySubject, Subject, pipe, shareReplay } from 'rxjs';
import { RxQuery } from './executor.js';
const getKey = (schema, executor) => executor.name + JSON.stringify(schema);
export const ApiCache = {
    queries: new Map(),
    add(schema, config) {
        let { executor, result, options } = config;
        const key = getKey(schema, executor);
        this.queries.set(key, result);
        if (options.cache && options.cacheTime) {
            setTimeout(() => ApiCache.delete(key), options.cacheTime * 1000);
        }
    },
    delete(key) {
        ApiCache.queries.delete(key);
    },
    get(schema, executor) {
        return this.queries.get(getKey(schema, executor));
    },
};
