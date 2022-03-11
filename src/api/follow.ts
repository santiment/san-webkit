import { mutate } from '@/api'

const FOLLOW_USER_MUTATION = (id: number | string) => `
  mutation {
    follow(userId:${id}) {
      id
    }
  }
`

const UNFOLLOW_USER_MUTATION = (id: number | string) => `
  mutation {
    unfollow(userId:${id}) {
      id
    }
  }
`

export const mutateFollowUser = (id: number | string, shouldFollow: boolean) =>
  mutate((shouldFollow ? FOLLOW_USER_MUTATION : UNFOLLOW_USER_MUTATION)(id))
