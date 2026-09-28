import { Observable, firstValueFrom, from } from 'rxjs';
import { RxQuery } from './executor.js';
const getKey = (schema) => JSON.stringify(schema);
const getExecutorType = (executor) => (executor === RxQuery ? 'observable' : 'promise');
export const ApiCache = {
    queries: new Map(),
    add(schema, config) {
        const { executor, result, options } = config;
        const key = getKey(schema);
        const type = getExecutorType(executor);
        this.queries.set(key, { [type]: result });
        if (options.cache && options.cacheTime) {
            setTimeout(() => ApiCache.delete(key), options.cacheTime * 1000);
        }
    },
    delete(key) {
        ApiCache.queries.delete(key);
    },
    get(schema, executor) {
        const cached = this.queries.get(getKey(schema));
        if (!cached)
            return undefined;
        const type = getExecutorType(executor);
        return cached[type] || translateCachedExecutionResult(type, cached);
    },
};
function translateCachedExecutionResult(type, cached) {
    const altType = type !== 'promise' ? 'promise' : 'observable';
    const altResult = cached[altType];
    if (!altResult)
        return undefined;
    let result;
    if (altResult instanceof Observable)
        result = firstValueFrom(altResult);
    else if (altResult instanceof Promise)
        result = from(altResult);
    return (cached[type] = result);
}
