import { ApiMutation } from '../../../api/index.js';
export var VoteType;
(function (VoteType) {
    VoteType["Layout"] = "chartConfigurationId";
    VoteType["Insight"] = "insightId";
    VoteType["Watchlist"] = "watchlistId";
    VoteType["Dashboard"] = "dashboardId";
})(VoteType || (VoteType = {}));
export const mutateVote = ApiMutation((id, type) => `
    mutation {
      vote(${type}:${id}) { votedAt }
    }
  `);
