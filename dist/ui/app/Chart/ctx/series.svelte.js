import { ss } from 'svelte-runes';
import { createCtx } from '../../../../utils/index.js';
import { DEFAULT_FORMATTER } from './formatters.js';
let __METRIC_SERIES_ID = 0;
export function createSeries({ name, label = name, selector = null, scaleId, style = 'line', color, pane, scaleMargins, scaleInverted = false, transform, transformData, tooltipFormatter = DEFAULT_FORMATTER, scaleFormatter, }) {
    const scale = $state({
        id: scaleId || name,
        visible: true,
        inverted: scaleInverted,
        scaleMargins,
    });
    return {
        id: __METRIC_SERIES_ID++,
        apiMetricName: name,
        label,
        type: ss(style),
        data: ss([]),
        color: ss(color || 'green'),
        loading: ss(true),
        error: ss(null),
        pane: ss(pane),
        transform,
        transformData,
        tooltipFormatter,
        scaleFormatter,
        scale: {
            get $$() {
                return scale;
            },
        },
        selector: ss(selector),
        chartSeriesApi: null,
    };
}
export const useMetricSeriesCtx = createCtx('useMetricSeriesCtx', (defaultMetrics = []) => {
    let series = $state.raw(defaultMetrics.map((item) => {
        return createSeries(item);
    }));
    return {
        metricSeries: {
            get $() {
                return series;
            },
            add(metric) {
                series.push(createSeries(metric));
                series = series.slice();
            },
            delete(metricSeries) {
                const index = series.indexOf(metricSeries);
                if (index === -1)
                    return;
                series.splice(index, 1);
                series = series.slice();
            },
        },
    };
});
