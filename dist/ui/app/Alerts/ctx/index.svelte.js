import { createCtx } from '../../../../utils/index.js';
import { createAlertStep } from '../form-steps/index.svelte.js';
export const useAlertFormCtx = createCtx('alerts_useAlertFormCtx', ({ schema, alert }) => {
    const steps = schema.steps.map((step) => createAlertStep(alert, step));
    let selectedIndex = $state(0);
    const selectedStep = $derived(steps[selectedIndex]);
    const isAlertValid = $derived(steps.every((step) => step.isValid.$));
    return {
        schema: schema,
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
        isAlertValid: {
            get $() {
                return isAlertValid;
            },
        },
    };
});
