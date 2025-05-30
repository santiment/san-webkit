import { onMount } from 'svelte';
import { createCtx } from '../../../../utils/index.js';
import { useChartCtx, useMetricSeriesCtx } from '../ctx/index.js';
export const usePanesTooltip = createCtx('charts_usePanesTooltip', () => {
    const { chart } = useChartCtx.get();
    const { metricSeries } = useMetricSeriesCtx.get();
    let hoverPoint = $state.raw(null);
    const paneSet = $derived(metricSeries.$.reduce((acc, metric) => {
        const pane = metric.pane.$ || 0;
        const set = acc[pane] || new Set();
        set.add(metric);
        acc[pane] = set;
        return acc;
    }, {}));
    const panes = $derived(paneSet && chart.$.panes());
    onMount(() => {
        chart.$.subscribeCrosshairMove(handleCrosshairMove);
        return () => {
            chart.$.unsubscribeCrosshairMove(handleCrosshairMove);
        };
    });
    function handleCrosshairMove(param) {
        if (param.time) {
            hoverPoint = {
                datetime: param.time * 1000,
                seriesData: param.seriesData,
            };
        }
        else {
            hoverPoint = null;
        }
    }
    return {
        paneSet: {
            get $() {
                return paneSet;
            },
        },
        panes: {
            get $() {
                return panes;
            },
        },
        hoverPoint: {
            get $() {
                return hoverPoint;
            },
        },
    };
});
