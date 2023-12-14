import { TrackCategory } from './utils.js';
const track = TrackCategory('Other');
export const __trackFriendInvite = (account_friends_invited) => track('friend_invite', {
    account_friends_invited,
});
//# sourceMappingURL=other.js.map