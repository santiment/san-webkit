import { createStepSchema } from '../../../form-steps/types.js';
import Form from '../../watchlist/watchlist-form-step/ui/index.svelte';
export const STEP_SELECT_SCREENER_SCHEMA = createStepSchema({
    name: 'screener',
    ui: {
        title: 'Select Screener',
        label: 'Select Screener',
        description: 'You can choose any of your screeners',
        Form,
    },
    initState(apiAlert) {
        const watchlist_id = apiAlert?.settings?.target.watchlist_id || null;
        return {
            metric: 'social_volume_total',
            target: { watchlist_id },
        };
    },
    validate(state) {
        return !!state.target.watchlist_id;
    },
    reduceToApi(apiAlert, state) {
        Object.assign(apiAlert.settings, state);
        Object.assign(apiAlert.settings, {
            operation: { selector: { watchlist_id: state.target.watchlist_id } },
        });
        return apiAlert;
    },
});
