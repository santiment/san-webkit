import type { TCustomer } from '$lib/ctx/customer/api.js'

import { mutateToggleUserFollow } from './api.js'

export const checkIsFollowing = (currentUser: TCustomer['currentUser'], userId: number | string) =>
  currentUser?.following?.users.some(({ id }) => +id === +userId)

export function startFollowFlow(currentUser: TCustomer['currentUser'], userId: number | string) {
  if (!currentUser?.following) return

  const followings = currentUser.following.users
  const userIndex = followings.findIndex(({ id }) => +id === +userId)
  const isFollowed = userIndex !== -1

  if (isFollowed) {
    followings.splice(userIndex, 1)
  } else {
    followings.push({ id: userId.toString() })
  }

  return mutateToggleUserFollow(userId, !isFollowed)
}
