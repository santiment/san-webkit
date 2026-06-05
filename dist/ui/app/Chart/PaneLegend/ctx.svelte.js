import { onMount } from 'svelte';
import { createCtx } from '../../../../utils/index.js';
import { useChartCtx, useMetricSeriesCtx } from '../ctx/index.js';
export const usePanesTooltip = createCtx('charts_usePanesTooltip', () => {
    const { chart } = useChartCtx.get();
    const { metricSeries } = useMetricSeriesCtx.get();
    let hoverPoint = $state.raw(null);
    const paneIndexSeries = $derived(metricSeries.$.reduce((acc, metric) => {
        const index = metric.pane.$ ?? 0;
        // @ts-ignore
        const pane = metric.chartSeriesApi?.getPane()._pane;
        const series = acc.get(pane) || [index];
        series.push(metric);
        return acc.set(pane, series);
    }, new Map()));
    onMount(() => {
        chart.$.subscribeCrosshairMove(handleCrosshairMove);
        return () => {
            chart.$.unsubscribeCrosshairMove(handleCrosshairMove);
        };
    });
    function handleCrosshairMove(param) {
        // param.logical < 0 ? 'left' : 'right'
        if (param.time) {
            hoverPoint = {
                datetime: param.time * 1000,
                index: param.logical,
            };
        }
        else {
            hoverPoint = null;
        }
    }
    return {
        paneIndexSeries: {
            get $() {
                return paneIndexSeries;
            },
        },
        hoverPoint: {
            get $() {
                return hoverPoint;
            },
        },
    };
});
export const useShiftModeStartPoint = createCtx('charts_useShiftModeStartPoint', () => {
    let startPointIndex = $state.raw(null);
    return {
        startPointIndex: {
            get $() {
                return startPointIndex;
            },
            set $(value) {
                startPointIndex = value;
            },
        },
    };
});
export const usePaneLegendCompactCtx = createCtx('charts_usePaneLegendCompactToggleCtx', (defaultValue = { isHiddenMetricsDisplayed: true }) => {
    let isHiddenMetricsDisplayed = $state(defaultValue.isHiddenMetricsDisplayed);
    return {
        isHiddenMetricsDisplayed: {
            get $() {
                return isHiddenMetricsDisplayed;
            },
            set $(value) {
                isHiddenMetricsDisplayed = value;
            },
        },
    };
});
