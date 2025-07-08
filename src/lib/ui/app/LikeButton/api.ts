import { ApiMutation } from '$lib/api/index.js'

export enum VoteType {
  Layout = 'chartConfigurationId',
  Insight = 'insightId',
  Watchlist = 'watchlistId',
  Dashboard = 'dashboardId',
}

export const mutateVote = ApiMutation(
  (id: number, type: VoteType) => `
    mutation {
      vote(${type}:${id}) { votedAt }
    }
  `,
)
