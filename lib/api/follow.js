import { mutate } from '@/api';
const FOLLOW_USER_MUTATION = (id) => `
  mutation {
    follow(userId:${id}) {
      id
    }
  }
`;
const UNFOLLOW_USER_MUTATION = (id) => `
  mutation {
    unfollow(userId:${id}) {
      id
    }
  }
`;
export const mutateFollowUser = (id, shouldFollow) => mutate((shouldFollow ? FOLLOW_USER_MUTATION : UNFOLLOW_USER_MUTATION)(id));
//# sourceMappingURL=follow.js.map