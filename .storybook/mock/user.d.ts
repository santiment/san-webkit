export type CurrentUser = null | {
    /** @default "Santiment Mock User" */
    name?: null | string;
    /** @default "santiment.mock.user" */
    username?: null | string;
    /** @default "user.mock@santiment.net" */
    email?: null | string;
    /** @default false */
    avatar?: boolean;
    /** @default false */
    moderator?: boolean;
    /** @default 0 */
    sanBalance?: number;
    /** @default false */
    isEligibleForSanbaseTrial?: boolean;
    /** @default null */
    plan?: null | {
        /** @default false */
        pro?: boolean;
        /** @default false */
        proPlus?: boolean;
        /** @default false */
        monthly?: boolean;
        /** @default false */
        yearly?: boolean;
        /** @default false */
        trial?: boolean;
        /** @default undefined */
        trialDaysLeft?: number;
        /** @default undefined */
        cancelledInDays?: number;
    };
    overwrite?: Record<string, any>;
};
export declare function mockUser(currentUser: CurrentUser): void | {
    id: number;
    name: string;
    username: string;
    email: string;
    avatarUrl: string;
    sanBalance: number;
    isEligibleForSanbaseTrial: boolean;
    isModerator: boolean;
    subscriptions: any[];
};
export declare const CURRENT_USER_MOCK: {
    readonly schema: "currentUser";
    readonly query: "currentUser";
    readonly mock: typeof mockUser;
};
