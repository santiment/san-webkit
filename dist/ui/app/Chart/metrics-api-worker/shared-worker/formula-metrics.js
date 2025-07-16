import { BROWSER } from 'esm-env';
import { Query } from '../../../../../api/executor.js';
import { ApiCache } from '../../../../../api/cache.js';
import { controlledPromisePolyfill } from '../../../../../utils/promise.js';
import { queryGetMetric } from '../../api/index.js';
import { parseFormulaChartVariables } from '../utils.js';
import { math, Timeseries } from './math.js';
function queryMetric(metric, parameters) {
    const { selector, interval, from, to } = parameters;
    return queryGetMetric({ executor: Query })({ metric, selector, from, to, interval });
}
function getFormulaCacheKey(formula, variables, ctx) {
    const { metrics, parameters } = ctx;
    const { from, to, interval, selector } = parameters;
    return JSON.stringify({
        formula: formula.expr,
        parameters: { from, to, selector, interval },
        metrics: variables.map((variable) => metrics[variable.metricIndex]),
    });
}
export function fetchFormulaMetric(formula, index, ctx) {
    if (ctx.isCancelled) {
        return Promise.reject(new Error('Request cancelled'));
    }
    const variables = parseFormulaChartVariables(formula.expr);
    const cacheKey = JSON.stringify(getFormulaCacheKey(formula, variables, ctx));
    const cached = ApiCache.get(cacheKey, Query);
    if (cached) {
        return cached;
    }
    const cachePromiseController = controlledPromisePolyfill();
    const deleteCache = () => (cachePromiseController.reject(), ApiCache.delete(cacheKey));
    ApiCache.add(cacheKey, {
        result: cachePromiseController.promise,
        executor: Query,
        options: { cache: BROWSER, cacheTime: 15 },
    });
    // Registring visited formula index
    ctx.path.push(index);
    const fetchedMetrics = variables.map((variable) => {
        const index = variable.metricIndex;
        const metric = ctx.metrics[index];
        if (metric.formula && ctx.path.includes(index)) {
            throw new Error('Recursive formula expression');
        }
        return new Promise((resolve, reject) => {
            const rejectAndCancel = (reason) => (reject(reason), ctx.cancelJobs(), deleteCache(), reason);
            const dataRequest = () => (metric.formula
                ? fetchFormulaMetric(metric.formula, index, ctx)
                : queryMetric(metric.name, {
                    ...ctx.parameters,
                    selector: metric.selector || ctx.parameters.selector,
                }))
                .then((data) => resolve([variable.name, data]))
                .catch(rejectAndCancel);
            ctx.addJob(dataRequest);
        });
    });
    return Promise.all(fetchedMetrics).then((metrics) => {
        const scope = new Map(metrics.map(([variable, data]) => [variable, new Timeseries(data)]));
        const result = math.evaluate(formula.expr, scope);
        let timeseries = [];
        if (result instanceof Timeseries) {
            timeseries = result.toMetricData();
        }
        else if (typeof result === 'number') {
            // TODO: Populate timeseries with constant number based on from/to and interval
            timeseries = [];
        }
        cachePromiseController.resolve(timeseries);
        return timeseries;
    });
}
