import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js';
import { createAlertSchema } from '../types.js';
import { STEP_SELECT_WATCHLIST_SCHEMA } from './watchlist-form-step/schema.js';
export const ALERT_WATCHLIST_SCHEMA = createAlertSchema({
    name: 'watchlist',
    ui: {
        label: 'Watchlist',
        description: 'Create an alert for the specific watchlist of yours',
        icon: 'watchlist',
    },
    steps: [STEP_SELECT_WATCHLIST_SCHEMA, STEP_METRIC_CONDITIONS_SCHEMA],
    deduceApiAlert({ settings }) {
        return Boolean(settings?.type.includes('metric_signal') && settings?.target.watchlist_id);
    },
    suggestTitle(_steps) {
        return '';
    },
    suggestDescription(_steps) {
        return '';
    },
});
