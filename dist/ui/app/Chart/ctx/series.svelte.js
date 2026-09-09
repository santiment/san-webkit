import { onMount } from 'svelte';
import { MetricStyle, MetricType, suggestCombinedDistributionLabel, } from '../../../../ctx/metrics-registry/types/index.js';
import { ss, createCtx } from '../../../../utils/index.js';
import { DEFAULT_FORMATTER, DEFAULT_Y_FORMATTER, mvrvRatioFormatter, percentFormatter, usdFormatter, } from '../../../../utils/formatters/index.js';
import { uuidv7 } from '../../../../utils/uuid/index.js';
import { ONE_DAY_IN_MS } from '../../../../utils/dates/index.js';
export function createSeries({ type, apiMetricName = '', label = apiMetricName, data = [], 
// getLabels$ = DEFAULT_LABELS_GETTER,
// getSelectorLabels$ = DEFAULT_LABELS_GETTER,
selector = null, interval, pane = 0, unit, style = 'line', color = '#00ff00', visible = true, scaleId, scaleMargins, scaleInverted = false, scaleVisible = true, isSelectorLocked = false, isFilledGradient, transformData, baseline, meta, ...rest }, helpers) {
    const scale = $state({
        id: scaleId || apiMetricName || Math.random().toString(),
        visible: scaleVisible,
        inverted: scaleInverted,
        scaleMargins,
    });
    let paneSignal = $state(pane);
    if (isFilledGradient === undefined) {
        isFilledGradient = meta?.styleOptions?.isFilledGradient ?? false;
    }
    if (meta?.styleOptions?.baseline) {
        baseline = { ...meta.styleOptions.baseline, bottomColor: color, ...baseline };
    }
    const ui = $state({
        color,
        style,
        unit,
        isSelectorLocked,
        isFilledGradient,
        baseline,
        candleDownColor: style === MetricStyle.CANDLES ? rest.candleDownColor : undefined,
        signal: rest.signal,
    });
    const formula = 'formula' in rest && rest.formula ? ss(rest.formula) : undefined;
    const formatters = $derived.by(() => {
        const { unit } = ui;
        const result = { tooltipFormatter: DEFAULT_FORMATTER, scaleFormatter: DEFAULT_Y_FORMATTER };
        if (unit === 'usd') {
            result.tooltipFormatter = usdFormatter;
        }
        else if (unit === 'percent') {
            result.tooltipFormatter = percentFormatter;
            result.scaleFormatter = percentFormatter;
        }
        else if (unit === 'mvrv_percent') {
            result.tooltipFormatter = mvrvRatioFormatter;
            result.scaleFormatter = mvrvRatioFormatter;
        }
        return result;
    });
    let processedRecacheRef = 0;
    let recacheRef = $state.raw(0);
    const metric = {
        id: rest.id ?? uuidv7(),
        type: type,
        apiMetricName,
        label,
        // getLabels$,
        // getSelectorLabels$,
        recache: {
            schedule: () => recacheRef++,
            wasScheduled$() {
                const wasScheduled = recacheRef !== processedRecacheRef;
                processedRecacheRef = recacheRef;
                return wasScheduled;
            },
        },
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
        formatters: {
            get $() {
                return formatters;
            },
        },
        scale: {
            get $$() {
                return scale;
            },
        },
        interval: ss(interval),
        getAutoInterval: createAutoIntervalGetter(meta?.granularityRules),
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
            const scaleVisible = metric.scale.$$.visible;
            return {
                type,
                apiMetricName: (metric.type !== MetricType.FORMULAS &&
                    metric.type !== MetricType.COMBINED_DISTRIBUTION &&
                    apiMetricName) ||
                    undefined,
                id: metric.id,
                formula: metric.type === MetricType.FORMULAS ? $state.snapshot(metric.formula.$) : undefined,
                distribution: metric.type === MetricType.COMBINED_DISTRIBUTION ? metric.distribution : undefined,
                version: metric.version.$,
                interval: metric.interval.$,
                selector: 'selector' in metric ? $state.snapshot(metric.selector.$) : undefined,
                // default 0 -> undefined (omit from API)
                pane: metric.pane.$ || undefined,
                // default true -> undefined (omit from API)
                visible: metric.visible.$ && undefined,
                color: metric.ui.$$.color,
                style: metric.ui.$$.style,
                unit: metric.ui.$$.unit,
                // default random id -> undefined (omit from API)
                scaleId: scaleVisible ? metric.scale.$$.id : undefined,
                // default true -> undefined (omit from API)
                scaleVisible: scaleVisible && undefined,
                // default false -> undefined (omit from API)
                isSelectorLocked: metric.ui.$$.isSelectorLocked || undefined,
                // default false -> undefined (omit from API)
                isFilledGradient: metric.ui.$$.isFilledGradient || undefined,
                candleDownColor: metric.ui.$$.candleDownColor,
                baseline: $state.snapshot(metric.ui.$$.baseline),
            };
        },
    };
    if (metric.type === MetricType.FORMULAS) {
        delete metric.selector;
        Object.defineProperty(metric, 'label', {
            get: () => metric.formula.$.name,
        });
    }
    else if (metric.type === MetricType.COMBINED_DISTRIBUTION) {
        const distribution = ('distribution' in rest && rest.distribution) || {};
        if (!distribution.ranges?.length) {
            distribution.ranges = ['0_to_0.001'];
        }
        const { base = 'holders_distribution', ranges } = distribution;
        const SELECTOR_VAR = 'sel';
        const combinedExpression = ranges
            .map((range) => `api_metric("${base}_${range}",${SELECTOR_VAR})`)
            .join('+');
        metric.apiMetricName = `${base}_0_to_0.001`;
        metric.distribution = { base, ranges };
        metric.label = suggestCombinedDistributionLabel(metric.distribution);
        metric.formula = {
            $: {
                id: metric.id,
                name: metric.label,
                get expr() {
                    return `${SELECTOR_VAR}=${JSON.stringify(metric.selector.$)}\n` + combinedExpression;
                },
            },
        };
        // delete (metric as any).formula
    }
    else {
        delete metric.formula;
    }
    if (helpers?.getAssetSelectorLabel &&
        (metric.type === MetricType.ASSET ||
            metric.type === MetricType.COMBINED_DISTRIBUTION ||
            metric.type === MetricType.TRADITIONAL_FINANCE)) {
        Object.defineProperty(metric, 'selectorLabel$', {
            get: helpers?.getAssetSelectorLabel?.bind(null, metric),
        });
    }
    return metric;
}
// export type TSeries = ReturnType<typeof createSeries>
export const useMetricSeriesCtx = createCtx('webkit_useMetricSeriesCtx', (defaultMetrics = [], helpers) => {
    let series = $state.raw(defaultMetrics.map((item) => {
        return createSeries(item, helpers);
    }));
    const asScope = $derived(series.map((item) => ({
        name: item.apiMetricName ?? '',
        aggregation: $state.snapshot(item.aggregation.$),
        selector: 'selector' in item ? $state.snapshot(item.selector.$) : null,
        version: $state.snapshot(item.version.$),
        formula: item.type === MetricType.FORMULAS ? $state.snapshot(item.formula.$) : undefined,
    })));
    return {
        metricSeries: {
            get $() {
                return series;
            },
            get asScope$() {
                return asScope;
            },
            export$() {
                return series.map((item) => item.toApiSchema$());
            },
            add(metric) {
                const series = createSeries(metric, helpers);
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
function createAutoIntervalGetter(granularityRules) {
    if (!granularityRules) {
        return;
    }
    const rules = granularityRules.map(({ maxTimeRangeDays, value }) => [maxTimeRangeDays * ONE_DAY_IN_MS, value]);
    return (from, to) => {
        const diff = +to - +from;
        return rules.find((rule) => diff < rule[0])?.[1];
    };
}
