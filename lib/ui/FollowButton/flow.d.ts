export declare const EVENT = "FOLLOW_CLICKED";
export declare const ANON_EVENT = "ANON_FOLLOW_CLICKED";
type Id = number | string;
export type CurrentUser = {
    following: {
        users: {
            id: Id;
        }[];
    };
};
export declare const checkIsFollowing: (currentUser: null | CurrentUser, userId: Id) => boolean | null;
export declare function startFollowFlow(currentUser: CurrentUser, userId: Id): Promise<SAN.API.QueryBase>;
export {};
