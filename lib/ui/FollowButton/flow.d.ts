export declare const EVENT = 'FOLLOW_CLICKED'
export declare const ANON_EVENT = 'ANON_FOLLOW_CLICKED'
declare type Id = number | string
export declare type CurrentUser = {
  following: {
    users: {
      id: Id
    }[]
  }
}
export declare const checkIsFollowing: (currentUser: CurrentUser, userId: Id) => boolean
export declare function startFollowFlow(
  currentUser: CurrentUser,
  userId: Id,
): Promise<SAN.API.QueryBase>
export {}
