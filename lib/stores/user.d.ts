/// <reference types="svelte" />
export declare const ANNUAL_DISCOUT_FRAGMENT = "\n  annualDiscount:checkAnnualDiscountEligibility {\n    isEligible\n    discount {\n      percentOff\n      expireAt\n    }\n  }\n";
export declare const accessor: ({ currentUser, annualDiscount }: {
    currentUser: any;
    annualDiscount: any;
}) => any;
export declare const queryCustomerData: () => Promise<any>;
export type CustomerData = {
    isLoggedIn: boolean;
    sanBalance: number;
    isEligibleForTrial: boolean;
    annualDiscount?: SAN.AnnualDiscount;
};
export declare const DEFAULT: CustomerData;
declare const subscribe: (this: void, run: import("svelte/store").Subscriber<CustomerData>, invalidate?: import("svelte/store").Invalidator<CustomerData> | undefined) => import("svelte/store").Unsubscriber;
export declare const customerData$: {
    fetched: boolean;
    set: (this: void, value: CustomerData) => void;
    setValue(value: any): any;
    setDefault(): void;
    query(): Promise<any>;
    subscribe(run: Parameters<typeof subscribe>[0], invalidate: any): ReturnType<typeof subscribe>;
    clear(): void;
    refetch(): any;
};
export type CurrentUserType = {
    id: number;
    email: string | null;
    username: string | null;
    name: string | null;
    privacyPolicyAccepted: boolean;
    marketingAccepted: boolean;
    firstLogin: boolean;
    avatarUrl?: string;
    isModerator?: boolean;
    isEligibleForTrial: boolean;
    apikeys: string[];
    ethAccounts?: {
        address: string;
    }[];
    settings: {
        theme: string;
        hasTelegramConnected: boolean;
        isPromoter: boolean;
        alertNotifyEmail: boolean;
        alertNotifyTelegram: boolean;
    };
};
export type CurrentUser$Type = ReturnType<typeof CurrentUser$$>['currentUser$'];
export declare const CURRENT_USER_FRAGMENT = "\n    id\n    email\n    username\n    name\n    privacyPolicyAccepted\n    marketingAccepted\n    avatarUrl\n    apikeys\n    firstLogin\n    isModerator\n    isEligibleForTrial:isEligibleForSanbaseTrial\n    settings {\n      theme\n      alertNotifyEmail\n      alertNotifyTelegram\n      hasTelegramConnected\n      isPromoter\n    }\n    following {\n      count\n      users {id}\n    }\n    ethAccounts {\n      address\n    }  \n";
export declare const CURRENT_USER_QUERY: string;
export declare const queryCurrentUser: (requestEvent?: import("./../api").RequestEvent | undefined) => Promise<SAN.API.Query<"currentUser", CurrentUserType | null>>;
export declare function CurrentUser$$(currentUser: null | CurrentUserType): {
    currentUser$: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<CurrentUserType | null>, invalidate?: import("svelte/store").Invalidator<CurrentUserType | null> | undefined) => import("svelte/store").Unsubscriber;
        set(currentUser: null | CurrentUserType): void;
    };
};
export declare const getCurrentUser$Ctx: () => {
    currentUser$: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<CurrentUserType | null>, invalidate?: import("svelte/store").Invalidator<CurrentUserType | null> | undefined) => import("svelte/store").Unsubscriber;
        set(currentUser: null | CurrentUserType): void;
    };
};
export {};
