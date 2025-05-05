import { Query } from '../../../../../api/executor.js';
import { createAlertSchema } from '../types.js';
import { queryWatchlistName } from '../watchlist/api.js';
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
    async suggestTitle([trendStep]) {
        const { target } = trendStep.state.$$;
        if ('slug' in target)
            return `${target.slug} in trending assets`;
        if ('word' in target)
            return `${target.word} in trending words`;
        if ('watchlist_id' in target) {
            const watchlistName = await queryWatchlistName(Query)(target.watchlist_id);
            return `"${watchlistName}" is trending`;
        }
        return '';
    },
    suggestDescription(_steps) {
        return '';
    },
});
