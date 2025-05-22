import { createStepSchema } from '../../../form-steps/types.js';
import Form from './ui/index.svelte';
import Legend from './ui/Legend.svelte';
export const STEP_SELECT_SCREENER_SCHEMA = createStepSchema({
    name: 'screener',
    ui: {
        title: 'Select Screener',
        label: 'Select Screener',
        description: 'You can choose any of your screeners',
        Form,
        Legend,
    },
    initState(apiAlert) {
        const watchlist_id = apiAlert?.settings?.target.watchlist_id || null;
        return {
            metric: 'social_volume_total',
            screener: { id: watchlist_id, title: '' },
        };
    },
    validate(state) {
        return !!state.screener.id;
    },
    reduceToApi(apiAlert, { metric, screener }) {
        Object.assign(apiAlert.settings, { type: 'screener_signal' });
        Object.assign(apiAlert.settings, {
            metric,
            target: { watchlist_id: screener.id },
        });
        Object.assign(apiAlert.settings, {
            operation: { selector: { watchlist_id: screener.id } },
        });
        return apiAlert;
    },
});
