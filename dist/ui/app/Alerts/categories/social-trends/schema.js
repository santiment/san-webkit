import { createAlertSchema } from '../types.js';
import { STEP_SELECT_TREND_SCHEMA } from './select-trend-form-step/schema.js';
export const ALERT_SOCIAL_TRENDS_SCHEMA = createAlertSchema({
    name: 'social-trends',
    ui: {
        label: 'Social trends',
        description: 'Create an alert for any of the social words, asset or watchlist',
        icon: 'comment',
    },
    steps: [STEP_SELECT_TREND_SCHEMA],
    deduceApiAlert(apiAlert) {
        return apiAlert.settings?.type === 'trending_words';
    },
});
