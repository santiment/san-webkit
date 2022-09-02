import { mutateFollowUser } from './../../api/follow';
export const EVENT = 'FOLLOW_CLICKED';
export const ANON_EVENT = 'ANON_FOLLOW_CLICKED';
export const checkIsFollowing = (currentUser, userId) => currentUser && currentUser.following.users.some(({ id }) => +id === +userId);
export function startFollowFlow(currentUser, userId) {
    const followings = currentUser.following.users;
    const userIndex = followings.findIndex(({ id }) => +id === +userId);
    const isFollowed = userIndex !== -1;
    if (isFollowed) {
        followings.splice(userIndex, 1);
    }
    else {
        followings.push({ id: userId });
    }
    return mutateFollowUser(userId, !isFollowed);
}
//# sourceMappingURL=flow.js.map