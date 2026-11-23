import { createCtx } from '../../../../utils/index.js';
import { CRYPTO_ERA_START_ISO, parseAsStartEndDate, suggestPeriodInterval, } from '../../../../utils/dates/index.js';
export const useChartGlobalParametersCtx = createCtx('webkit_useChartGlobalParametersCtx', (defaultCtxValue) => {
    const parameters = $state({
        from: 'utc_now-60d',
        to: 'utc_now',
        selector: { slug: 'bitcoin' },
        includeIncompleteData: true,
        ...defaultCtxValue,
    });
    const dates = $derived({
        from: parameters.from,
        to: parameters.to,
        fromUtcDate: parseAsStartEndDate(parameters.from, { dayStart: true, utc: true }),
        toUtcDate: parseAsStartEndDate(parameters.to, { dayStart: false, utc: true }),
    });
    const autoInterval = $derived(suggestPeriodInterval(dates.fromUtcDate, dates.toUtcDate));
    return {
        globalParameters: {
            get $$() {
                return parameters;
            },
            get dates$() {
                return dates;
            },
            get autoInterval$() {
                return autoInterval;
            },
            changeDates(from, to) {
                parameters.from = from;
                parameters.to = to;
            },
            applyDateRange(dateRange) {
                let from = dateRange;
                if (from.toLowerCase() === 'all') {
                    from = CRYPTO_ERA_START_ISO;
                }
                else if (Number.isNaN(Date.parse(dateRange))) {
                    from = `utc_now-${dateRange}`;
                }
                this.changeDates(from, 'utc_now');
            },
        },
    };
});
