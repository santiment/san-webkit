import { BROWSER } from 'esm-env';
import { Observable } from 'rxjs';
import { Query, RxQuery } from './executor.js';
import { MockExecutor } from './mock.js';
import { ApiCache } from './cache.js';
const DEFAULT_EXECUTOR_OPTIONS = {
    /**
     * May request save/use existing result
     */
    cache: BROWSER,
    /**
     * Caching time in seconds. Works only if `cache` is `true`.
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
                    return mocked;
                }
            }
            const result = executor(schema, { map: mapData });
            if (BROWSER && options.cache) {
                const cached = ApiCache.get(schema, executor);
                if (cached && !options.recache) {
                    return cached;
                }
                ApiCache.add(schema, { options, executor, result });
            }
            return result;
        };
    };
}
