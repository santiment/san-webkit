import { Query } from '../../../../../api/executor.js';
import { queryGetMetric } from '../../api/index.js';
import { handleGenericDataStoreMetric } from './data-store-metrics.js';
export function queryMetric(metric, parameters, recache) {
    const { selector, interval, from, to, aggregation, version, includeIncompleteData } = parameters;
    return queryGetMetric({ executor: Query, recache })({
        metric,
        selector,
        from,
        to,
        interval,
        aggregation,
        version,
        includeIncompleteData,
    });
}
export function queryGenericMetric(target, parameters, recache) {
    return 'metric' in target
        ? queryMetric(target.metric, parameters, recache)
        : handleGenericDataStoreMetric(target.dataStore, parameters, recache);
}
