import { createStepSchema } from '../../../form-steps/types.js';
import Form from './ui/index.svelte';
import Legend from './ui/Legend.svelte';
export const STEP_SELECT_WATCHLIST_SCHEMA = createStepSchema({
    name: 'watchlist',
    ui: {
        title: 'Select Watchlist',
        label: 'Select Watchlist',
        description: 'You can choose any of your watchlists',
        Form,
        Legend,
    },
    initState(apiAlert) {
        return {
            watchlist: {
                id: apiAlert?.settings?.target.watchlist_id || null,
                title: '',
            },
        };
    },
    validate(state) {
        return !!state.watchlist.id;
    },
    reduceToApi(apiAlert, state) {
        Object.assign(apiAlert.settings, { type: 'metric_signal' });
        Object.assign(apiAlert.settings, { target: { watchlist_id: state.watchlist.id } });
        return apiAlert;
    },
});
