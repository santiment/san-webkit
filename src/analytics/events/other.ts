import { TrackCategory } from './utils'

const track = TrackCategory('Other')

export const __trackFriendInvite = (account_friends_invited: number) =>
  track('friend_invite', {
    account_friends_invited,
  })
