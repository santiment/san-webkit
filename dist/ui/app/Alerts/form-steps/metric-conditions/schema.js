import { getTimeFromApi } from '../../time.js';
import { getOperationFromApi, isComparisonOperation, reduceOperationToApi, } from './operations.js';
import { createStepSchema } from '../types.js';
import Form from './ui/index.svelte';
import Legend from './ui/Legend.svelte';
export const STEP_METRIC_CONDITIONS_SCHEMA = createStepSchema({
    name: 'metric-conditions',
    initState: (alert) => ({
        metric: alert?.settings?.metric ?? null,
        metricLabel: '',
        conditions: {
            operation: getOperationFromApi(alert?.settings?.operation) ?? {
                type: 'above',
                values: [1, 1],
            },
            time: alert?.settings ? getTimeFromApi(alert.settings.time_window) : '1d',
        },
    }),
    validate: ({ metric }) => !!metric,
    reduceToApi: (apiAlert, { metric, conditions }) => {
        Object.assign(apiAlert.settings, {
            metric: metric,
            operation: reduceOperationToApi(conditions.operation),
        });
        if (isComparisonOperation(conditions.operation.type)) {
            Object.assign(apiAlert.settings, {
                time_window: conditions.time,
            });
        }
        return apiAlert;
    },
    ui: {
        title: 'Choose Metric and Conditions',
        label: 'Choose Metric',
        description: 'Depend on which asset you choose, there will be available metrics for it and the opposite...',
        Form,
        Legend,
    },
});
