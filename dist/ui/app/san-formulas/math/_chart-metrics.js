import { math, Timeseries } from './core.js';
import { createTransformableMathFunction } from './utils.js';
const selector_from = math.typed('selector_from', {
    Timeseries: ({ selector }) => {
        if (!selector) {
            throw new Error("Chart metric doesn't have a selector");
        }
        return selector;
    },
});
const api_metric = createTransformableMathFunction('api_metric', {
    processArgs(args, scope) {
        if (args.length > 2) {
            throw new Error('Function "api_metric" accepts only two arguments');
        }
        // eslint-disable-next-line prefer-const
        let [apiMetricName, selector] = args.slice(0, 2).map((arg) => arg.compile().evaluate(scope));
        if (typeof selector === 'string') {
            selector = { slug: selector };
        }
        else if (selector?.slug || selector?.text) {
            // All good
        }
        else {
            throw new Error('Invalid asset selector was passed to "api_metric" function');
        }
        return [apiMetricName, selector];
    },
    processResult() {
        return new Timeseries([], null);
    },
});
const raw_sql = createTransformableMathFunction('raw_sql', {
    processArgs(args, scope) {
        if (args.length > 1) {
            throw new Error('Function "raw_sql" accepts only one argument');
        }
        // eslint-disable-next-line prefer-const
        let [rawSql] = args.slice(0, 1).map((arg) => arg.compile().evaluate(scope));
        if (typeof rawSql !== 'string') {
            throw new Error('Invalid sql was passed to "raw_sql" function');
        }
        return [rawSql];
    },
    processResult() {
        return {};
    },
});
const raw_sql_column = math.typed('raw_sql_column', {
    'any, string': (input, column) => {
        // NOTE: Need to know that input is not a data store first
        // if (!(column in input)) {
        //   throw new Error(`Cannot access raw sql column "${column}"`)
        // }
        return input[column] || new Timeseries([], null);
    },
});
export const MathChartMetrics = {
    selector_from,
    api_metric,
    raw_sql,
    raw_sql_column,
};
