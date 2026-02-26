import { MetricStyle, } from '../../../../ctx/metrics-registry/types/index.js';
import { ss, createCtx } from '../../../../utils/index.js';
import { DEFAULT_FORMATTER } from '../../../../utils/formatters/index.js';
import { uuidv4 } from '../../../../utils/uuid/index.js';
const DEFAULT_LABELS_GETTER = () => ['', ''];
export function createSeries({ type, apiMetricName = '', label = apiMetricName, getLabels$ = DEFAULT_LABELS_GETTER, getSelectorLabels$ = DEFAULT_LABELS_GETTER, selector = null, interval, pane, style = 'line', color = '#00ff00', visible = true, scaleId, scaleMargins, scaleInverted = false, scaleVisible = true, isSelectorLocked = false, isFilledGradient = false, transformData, tooltipFormatter = DEFAULT_FORMATTER, scaleFormatter, meta, ...rest }) {
    const scale = $state({
        id: scaleId || apiMetricName,
        visible: scaleVisible,
        inverted: scaleInverted,
        scaleMargins,
    });
    let paneSignal = $state(pane);
    const ui = $state({
        color,
        style,
        isSelectorLocked,
        isFilledGradient,
        tooltipFormatter,
        scaleFormatter,
        candleDownColor: style === MetricStyle.CANDLES ? rest.candleDownColor : undefined,
        baseline: rest.baseline,
        signal: rest.signal,
    });
    const formula = 'formula' in rest && rest.formula ? ss(rest.formula) : undefined;
    const metric = {
        id: uuidv4(),
        type,
        apiMetricName,
        label,
        getLabels$,
        getSelectorLabels$,
        version: ss(rest.version),
        data: ss([]),
        visible: ss(visible),
        loading: ss(true),
        error: ss(null),
        aggregation: ss(style === MetricStyle.CANDLES ? 'OHLC' : undefined),
        pane: {
            get $() {
                // Reading signal
                paneSignal;
                return metric.chartSeriesApi?.getPane().paneIndex() ?? pane;
            },
            update$() {
                pane = metric.chartSeriesApi?.getPane().paneIndex() ?? pane;
                // Triggering signal update
                paneSignal = NaN;
            },
        },
        scale: {
            get $$() {
                return scale;
            },
        },
        interval: ss(interval),
        selector: ss(selector),
        formula,
        ui: {
            get $$() {
                return ui;
            },
        },
        chartSeriesApi: null,
        transformData,
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
        aggregation: $state.snapshot(item.aggregation.$),
        selector: $state.snapshot(item.selector.$),
        version: $state.snapshot(item.version.$),
        formula: $state.snapshot(item.formula?.$),
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
