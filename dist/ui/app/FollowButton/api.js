import { Query } from '../../../api/executor.js';
import { ApiMutation } from '../../../api/index.js';
const createFollowUserMutation = ApiMutation((id) => `mutation {
    follow(userId:${id}) {
      id
    }
  }`);
const createUnfollowUserMutation = ApiMutation((id) => `mutation {
    unfollow(userId:${id}) {
      id
    }
  }`);
export const mutateToggleUserFollow = (id, shouldFollow) => (shouldFollow ? createFollowUserMutation : createUnfollowUserMutation)(Query)(id);
