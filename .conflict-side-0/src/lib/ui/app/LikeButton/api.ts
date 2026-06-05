import { ApiMutation } from '$lib/api/index.js'

const VoteTypeToId = {
  chart: 'chartConfigurationId',
  dashboard: 'dashboardId',
  insight: 'insightId',
  alert: 'userTriggerId',
  watchlist: 'watchlistId',
}

export function normalizeFeatureType(feature: TVoteType) {
  if (feature === 'chart') return 'chart_layout'

  return feature
}

export type TVoteType = keyof typeof VoteTypeToId

export const mutateVote = ApiMutation(
  (id: number, type: TVoteType) => `
    mutation {
      vote(${VoteTypeToId[type]}:${id}) { votedAt }
    }
  `,
)
