import { STEP_SELECT_SCREENER_SCHEMA } from './screener-form-step/schema.js';
import { createAlertSchema } from '../types.js';
export const ALERT_SCREENER_SCHEMA = createAlertSchema({
    name: 'screener',
    ui: {
        label: 'Screener',
        description: 'Create an alert for one of your screeners',
        icon: 'screener',
    },
    steps: [STEP_SELECT_SCREENER_SCHEMA],
    deduceApiAlert(apiAlert) {
        return apiAlert.settings?.type === 'screener_signal';
    },
});
