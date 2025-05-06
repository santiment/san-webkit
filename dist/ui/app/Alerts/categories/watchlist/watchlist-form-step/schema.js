import { createStepSchema } from '../../../form-steps/types.js';
import Form from './ui/index.svelte';
export const STEP_SELECT_WATCHLIST_SCHEMA = createStepSchema({
    name: 'watchlist',
    ui: {
        title: 'Select Watchlist',
        label: 'Select Watchlist',
        description: 'You can choose any of your watchlists',
        Form,
    },
    initState(apiAlert) {
        return {
            target: {
                watchlist_id: apiAlert?.settings?.target.watchlist_id || null,
            },
        };
    },
    validate(state) {
        return !!state.target.watchlist_id;
    },
    reduceToApi(apiAlert, state) {
        Object.assign(apiAlert.settings, state);
        return apiAlert;
    },
});
