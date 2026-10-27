import { ApiMutation } from '../../../api/index.js';
const VoteTypeToId = {
    chart: 'chartConfigurationId',
    dashboard: 'dashboardId',
    insight: 'insightId',
    alert: 'userTriggerId',
    watchlist: 'watchlistId',
};
export function normalizeFeatureType(feature) {
    if (feature === 'chart')
        return 'chart_layout';
    return feature;
}
export const mutateVote = ApiMutation((id, type) => `
    mutation {
      vote(${VoteTypeToId[type]}:${id}) { votedAt }
    }
  `);
