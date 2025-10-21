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
const asset_metric = createTransformableMathFunction('asset_metric', {
    processArgs(args, scope) {
        if (args.length > 2) {
            throw new Error('Function "asset_metric" accepts only two arguments');
        }
        // eslint-disable-next-line prefer-const
        let [apiMetricName, selector] = args.slice(0, 2).map((arg) => arg.compile().evaluate(scope));
        if (typeof selector === 'string') {
            selector = { slug: selector };
        }
        else if (selector?.slug) {
            // All good
        }
        else {
            throw new Error('Invalid asset selector was passed to "asset_metric" function');
        }
        return [apiMetricName, selector];
    },
    processResult() {
        return new Timeseries([], null);
    },
});
export const MathChartMetrics = {
    selector_from,
    asset_metric,
};
