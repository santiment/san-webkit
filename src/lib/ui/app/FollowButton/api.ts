import { Query } from '$lib/api/executor.js'
import { ApiMutation } from '$lib/api/index.js'

const createFollowUserMutation = ApiMutation(
  (id: number | string) => `mutation {
    follow(userId:${id}) {
      id
    }
  }`,
)

const createUnfollowUserMutation = ApiMutation(
  (id: number | string) => `mutation {
    unfollow(userId:${id}) {
      id
    }
  }`,
)

export const mutateToggleUserFollow = (id: number | string, shouldFollow: boolean) =>
  (shouldFollow ? createFollowUserMutation : createUnfollowUserMutation)(Query)(id)
