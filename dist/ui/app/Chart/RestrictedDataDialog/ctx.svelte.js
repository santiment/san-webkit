import { useMetricsRestrictionsCtx } from '../../../../ctx/metrics-registry/index.js';
import { createCtx } from '../../../../utils/index.js';
import { useMetricSeriesCtx } from '../ctx/series.svelte.js';
import { showRestrictedDataDialog$ } from './RestrictedDataDialog.svelte';
export const useChartPlanRestrictionsCtx = createCtx('webkit_useChartPlanRestrictionsCtx', () => {
    const showRestrictedDataDialog = showRestrictedDataDialog$();
    const { MetricsRestrictions } = useMetricsRestrictionsCtx.get();
    const { metricSeries } = useMetricSeriesCtx.get();
    let chartPlanRestrictions = $state.raw({});
    $effect(() => {
        chartPlanRestrictions = metricSeries.$.reduce((acc, item) => {
            const restrictions = MetricsRestrictions.$[item.apiMetricName];
            if (restrictions && (restrictions.restrictedFrom || restrictions.restrictedTo)) {
                acc[item.apiMetricName] = Object.assign({ label: item.label }, restrictions);
            }
            return acc;
        }, {});
    });
    return {
        chartPlanRestrictions: {
            get $() {
                return chartPlanRestrictions;
            },
            has$(apiMetricName) {
                return apiMetricName in chartPlanRestrictions;
            },
            showDialog: showRestrictedDataDialog,
        },
    };
});
