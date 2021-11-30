import { mutate } from './index'

export enum VoteType {
  Layout = 'chartConfigurationId',
  Insight = 'insightId',
}

export const VOTE_MUTATION = (id: number, type: VoteType) => `
  mutation {
    vote(${type}:${id}) {
      votes
    }
  }
`

export const vote = (id: number, type: VoteType) =>
  mutate<any>(VOTE_MUTATION(id, type))
