import { parseRangeString } from '../../../../../utils/dates/index.js';
import { Query } from '../../../../../api/executor.js';
import { STEP_SELECT_SCREENER_SCHEMA } from './screener-form-step/schema.js';
import { createAlertSchema } from '../types.js';
import { TimeModifiers } from '../../time.js';
import { formatChannels } from '../../channels.js';
import { queryWatchlistName } from '../watchlist/api.js';
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
    async suggestTitle([screenerStep]) {
        const { watchlist_id } = screenerStep.state.$$.target;
        if (!watchlist_id)
            return '';
        const watchlistName = await queryWatchlistName(Query)(watchlist_id);
        return `Project enters/exits ${watchlistName}`;
    },
    async suggestDescription([screenerStep, notificationStep]) {
        const { watchlist_id } = screenerStep.state.$$.target;
        if (!watchlist_id)
            return '';
        const { cooldown, channel } = notificationStep.state.$$;
        const { amount, modifier } = parseRangeString(cooldown);
        const cooldownLabel = TimeModifiers[modifier].label.toLowerCase();
        const watchlistName = await queryWatchlistName(Query)(watchlist_id);
        return `Notify me when any project enters/exits ${watchlistName}. Send me notifications every ${amount} ${cooldownLabel} via ${formatChannels(channel)}.`;
    },
});
