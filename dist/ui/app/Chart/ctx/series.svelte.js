import { onMount } from 'svelte';
import { MetricStyle, } from '../../../../ctx/metrics-registry/types/index.js';
import { ss, createCtx } from '../../../../utils/index.js';
import { DEFAULT_FORMATTER } from '../../../../utils/formatters/index.js';
import { uuidv7 } from '../../../../utils/uuid/index.js';
const DEFAULT_LABELS_GETTER = () => ['', ''];
export function createSeries({ type, apiMetricName = '', label = apiMetricName, data = [], getLabels$ = DEFAULT_LABELS_GETTER, getSelectorLabels$ = DEFAULT_LABELS_GETTER, selector = null, interval, pane, style = 'line', color = '#00ff00', visible = true, scaleId, scaleMargins, scaleInverted = false, scaleVisible = true, isSelectorLocked = false, isFilledGradient = false, transformData, tooltipFormatter = DEFAULT_FORMATTER, scaleFormatter, meta, ...rest }) {
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
        id: rest.id ?? uuidv7(),
        type,
        apiMetricName,
        label,
        getLabels$,
        getSelectorLabels$,
        version: ss(rest.version),
        data: ss(data),
        visible: ss(visible),
        loading: ss(!data.length),
        error: ss(null),
        warnings: ss(null),
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
        toApiSchema$() {
            return {
                type,
                apiMetricName,
                id: metric.id,
                formula: metric.formula?.$,
                version: metric.version.$,
                interval: metric.interval.$,
                selector: metric.selector.$,
                pane: metric.pane.$,
                visible: metric.visible.$,
                color: metric.ui.$$.color,
                style: metric.ui.$$.style,
                // unit: metric.ui.$$.unit,
                scaleId: metric.scale.$$.id,
                scaleVisible: metric.scale.$$.visible,
                isSelectorLocked: metric.ui.$$.isSelectorLocked,
                isFilledGradient: metric.ui.$$.isFilledGradient,
                candleDownColor: metric.ui.$$.candleDownColor,
                baseline: $state.snapshot(metric.ui.$$.baseline),
            };
        },
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
                const deleted = series.splice(index, 1);
                series = series.slice();
                fireSeriesDeleteEvent(deleted[0], series);
            },
            deleteSeries(metricSeries) {
                const index = series.indexOf(metricSeries);
                if (index === -1)
                    return;
                this.delete(index);
            },
            findById(id) {
                return id && series.find((item) => item.id === id);
            },
        },
    };
});
const deleteEventSubscribers = new Set();
function fireSeriesDeleteEvent(metric, metrics) {
    deleteEventSubscribers.forEach((fn) => fn(metric, metrics));
}
export function useMetricSeriesDeleteListener(fn) {
    const { metricSeries } = useMetricSeriesCtx.get();
    onMount(() => {
        function onDelete(metric, metrics) {
            if (metricSeries.$ === metrics)
                fn(metric);
        }
        deleteEventSubscribers.add(onDelete);
        return () => {
            deleteEventSubscribers.delete(onDelete);
        };
    });
}
