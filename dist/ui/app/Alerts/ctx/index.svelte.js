import { createCtx } from '../../../../utils/index.js';
import { useMetricsRestrictionsCtx } from '../../../../ctx/metrics-registry/index.js';
import { createAlertStep } from '../form-steps/index.svelte.js';
export const useAlertFormCtx = createCtx('alerts_useAlertFormCtx', ({ schema, alert }) => {
    const steps = schema.steps.map((step) => createAlertStep(alert, step));
    const { MetricsRestrictions } = useMetricsRestrictionsCtx();
    let selectedIndex = $state(0);
    const selectedStep = $derived(steps[selectedIndex]);
    const nextStep = $derived(selectedIndex < steps.length ? steps[selectedIndex + 1] : null);
    const isAlertValid = $derived(steps.every((step) => step.isValid.$));
    function reduceStepsToAlert() {
        const apiAlert = steps.reduce((acc, step) => {
            const state = $state.snapshot(step.state.$$);
            const stepAlertPart = step.reduceToApi(state);
            return {
                ...acc,
                ...stepAlertPart,
                settings: { ...acc.settings, ...stepAlertPart.settings },
            };
        }, {});
        const changedType = getChangedAlertType(apiAlert.settings);
        if (changedType && apiAlert.settings) {
            apiAlert.settings.type = changedType;
        }
        return apiAlert;
    }
    function getChangedAlertType(settings) {
        if (settings?.type !== 'metric_signal')
            return null;
        if (!('metric' in settings) || typeof settings.metric !== 'string')
            return null;
        const minInterval = MetricsRestrictions.$[settings.metric]?.minInterval;
        if (minInterval === '1d') {
            return 'daily_metric_signal';
        }
        return null;
    }
    return {
        schema: schema,
        reduceStepsToAlert,
        steps,
        selectedStep: {
            get $() {
                return selectedStep;
            },
            get index$() {
                return selectedIndex;
            },
            set index$(value) {
                selectedIndex = value;
            },
        },
        nextStep: {
            get $() {
                return nextStep;
            },
        },
        isAlertValid: {
            get $() {
                return isAlertValid;
            },
        },
    };
});
