import { mutateFollowUser } from './../../api/follow.js';
export const EVENT = 'FOLLOW_CLICKED';
export const ANON_EVENT = 'ANON_FOLLOW_CLICKED';
export const checkIsFollowing = (currentUser, userId) => { var _a, _b; return (_b = (_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.following) === null || _a === void 0 ? void 0 : _a.users.some(({ id }) => +id === +userId)) !== null && _b !== void 0 ? _b : false; };
export function startFollowFlow(currentUser, userId) {
    var _a, _b;
    const followings = (_b = (_a = currentUser.following) === null || _a === void 0 ? void 0 : _a.users) !== null && _b !== void 0 ? _b : [];
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