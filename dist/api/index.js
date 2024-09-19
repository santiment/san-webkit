import { BROWSER } from 'esm-env';
import { Observable } from 'rxjs';
import { Query, RxQuery } from './executor.js';
import { MockExecutor } from './mock.js';
import { ApiCache } from './cache.js';
import { log } from './log.js';
const DEFAULT_EXECUTOR_OPTIONS = {
    /**
     * May request save/use existing result
     */
    cache: BROWSER,
    /**
     * Caching time in seconds. Works only if `cache` is `true`.
     * `undefined` will cache data indefinitely.
     */
    cacheTime: 5,
    /**
     * Do not use current cache and store new cache
     * */
    recache: false,
};
function setupExecutor(executorConfig, globalOptions) {
    const isConfig = 'executor' in executorConfig;
    const executor = isConfig ? executorConfig.executor : executorConfig;
    const options = Object.assign({}, DEFAULT_EXECUTOR_OPTIONS, globalOptions, isConfig ? executorConfig : {});
    return { executor, options };
}
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
export function Fetcher(schemaCreator, mapData, globalOptions) {
    return (executorConfig = RxQuery) => {
        const { executor, options } = setupExecutor(executorConfig, globalOptions);
        return (...args) => {
            const schema = schemaCreator(...args);
            if (process.env.NODE_ENV !== 'production') {
                const mocked = MockExecutor(executor, schema, { map: mapData });
                if (mocked !== undefined) {
                    if (process.env.IS_LOGGING_ENABLED)
                        log({ schema, mocked, executor });
                    return mocked;
                }
            }
            const isCachingEnabled = BROWSER && options.cache;
            if (isCachingEnabled) {
                const cached = ApiCache.get(schema, executor);
                if (cached && !options.recache) {
                    if (process.env.IS_LOGGING_ENABLED)
                        log({ schema, executor, cached });
                    return cached;
                }
            }
            const result = executor(schema, { map: mapData });
            if (isCachingEnabled)
                ApiCache.add(schema, { options, executor, result });
            if (process.env.IS_LOGGING_ENABLED)
                log({ schema, executor, result });
            return result;
        };
    };
}
export const Mutation = (schemaCreator, mapData) => Fetcher(schemaCreator, mapData, { cache: false });
