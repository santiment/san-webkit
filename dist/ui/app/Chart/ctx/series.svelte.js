import { ss, createCtx } from '../../../../utils/index.js';
import { DEFAULT_FORMATTER } from '../../../../utils/formatters/index.js';
let __METRIC_SERIES_ID = 0;
export function createSeries({ name, label = name, selector = null, scaleId, style = 'line', color, pane, visible = true, scaleMargins, scaleInverted = false, transform, transformData, tooltipFormatter = DEFAULT_FORMATTER, scaleFormatter, formula, meta, }) {
    const scale = $state({
        id: scaleId || name,
        visible: true,
        inverted: scaleInverted,
        scaleMargins,
    });
    let paneSignal = $state(pane);
    const metric = {
        id: __METRIC_SERIES_ID++,
        apiMetricName: name,
        label,
        type: ss(style),
        data: ss([]),
        color: ss(color || 'green'),
        visible: ss(visible),
        loading: ss(true),
        error: ss(null),
        pane: {
            get $() {
                // Reading signal
                paneSignal;
                return metric.chartSeriesApi?.getPane().paneIndex() ?? pane;
            },
            update$() {
                // Triggering signal update
                paneSignal = NaN;
            },
        },
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
        formula: ss(formula),
        meta,
    };
    return metric;
}
export const useMetricSeriesCtx = createCtx('webkit_useMetricSeriesCtx', (defaultMetrics = []) => {
    let series = $state.raw(defaultMetrics.map((item) => {
        return createSeries(item);
    }));
    const asScope = $derived(series.map((item) => ({
        name: item.apiMetricName,
        selector: $state.snapshot(item.selector.$),
        formula: $state.snapshot(item.formula.$),
    })));
    return {
        metricSeries: {
            get $() {
                return series;
            },
            get asScope$() {
                return asScope;
            },
            add(metric) {
                const series = createSeries(metric);
                this.addSeries(series);
                return series;
            },
            addSeries(metricSeries) {
                const index = series.push(metricSeries);
                series = series.slice();
                return index;
            },
            delete(index) {
                series.splice(index, 1);
                series = series.slice();
            },
            deleteSeries(metricSeries) {
                const index = series.indexOf(metricSeries);
                if (index === -1)
                    return;
                this.delete(index);
            },
        },
    };
});
