import { mutate } from './../api';
export var VoteType;
(function (VoteType) {
    VoteType["Layout"] = "chartConfigurationId";
    VoteType["Insight"] = "insightId";
    VoteType["Watchlist"] = "watchlistId";
    VoteType["Dashboard"] = "dashboardId";
})(VoteType || (VoteType = {}));
export const VOTE_MUTATION = (id, type) => `
  mutation {
    vote(${type}:${id}) { votedAt }
  }
`;
export const vote = (id, type) => mutate(VOTE_MUTATION(id, type));
//# sourceMappingURL=vote.js.map