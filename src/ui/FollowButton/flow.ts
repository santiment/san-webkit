import { mutateFollowUser } from '@/api/follow'

type Id = number | string
export type CurrentUser = {
  following: {
    users: {
      id: Id
    }[]
  }
}

export const checkIsFollowing = (currentUser: CurrentUser, userId: Id) =>
  currentUser && currentUser.following.users.some(({ id }) => +id === +userId)

export function startFollowFlow(currentUser: CurrentUser, userId: Id) {
  const followings = currentUser.following.users
  const userIndex = followings.findIndex(({ id }) => +id === +userId)
  const isFollowed = userIndex !== -1

  if (isFollowed) {
    followings.splice(userIndex, 1)
  } else {
    followings.push({ id: userId })
  }

  return mutateFollowUser(userId, !isFollowed)
}
