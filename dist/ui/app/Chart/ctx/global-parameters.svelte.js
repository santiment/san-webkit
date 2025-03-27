import { createCtx } from '../../../../utils/index.js';
import { parseAsStartEndDate } from '../../../../utils/dates/index.js';
export const useChartGlobalParametersCtx = createCtx('webkit_useChartGlobalParametersCtx', (defaultCtxValue) => {
    const parameters = $state({
        from: 'utc_now-60d',
        to: 'utc_now',
        interval: '4h',
        selector: { slug: 'bitcoin' },
        includeIncompleteData: true,
        ...defaultCtxValue,
    });
    const dates = $derived({
        from: parameters.from,
        to: parameters.to,
        fromUtcDate: parseAsStartEndDate(parameters.from, { dayStart: true, utc: true }),
        toUtcDate: parseAsStartEndDate(parameters.to, { dayStart: true, utc: true }),
    });
    return {
        globalParameters: {
            get $$() {
                return parameters;
            },
            get dates$() {
                return dates;
            },
        },
    };
});
