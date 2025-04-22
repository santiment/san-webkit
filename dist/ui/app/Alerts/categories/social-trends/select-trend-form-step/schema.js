import { createStepSchema } from '../../../form-steps/types.js';
import Form from './ui/index.svelte';
export const STEP_SELECT_TREND_SCHEMA = createStepSchema({
    name: 'select-trend',
    ui: {
        title: 'Select Social trend',
        label: 'Select Social trend',
        description: 'You can choose any social word, asset or watchlist',
        Form,
    },
    initState(apiAlert) {
        const { target, operation } = apiAlert?.settings || {};
        if (target && operation) {
            return { target, operation };
        }
        return {
            target: { slug: [] },
            operation: { trending_project: true },
        };
    },
    validate(state) {
        return !!state.target && (Array.isArray(state.target) ? state.target.length > 0 : true);
    },
    reduceToApi(apiAlert, state) {
        Object.assign(apiAlert.settings, state);
        return apiAlert;
    },
});
