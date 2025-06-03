import type { TSubscriptionPlan } from '../../ui/app/SubscriptionPlan/types.js';
import { UniQuery } from '../../api/executor.js';
import { type TSubscription } from '../../ui/app/SubscriptionPlan/subscription.js';
export type TCustomer = {
    currentUser: null | {
        id: string;
        email: null | string;
        name: null | string;
        username: null | string;
        avatarUrl: null | string;
        privacyPolicyAccepted: boolean;
        marketingAccepted: boolean;
        firstLogin: boolean;
        isModerator: boolean;
        featureAccessLevel: 'ALPHA' | 'BETA' | 'RELEASED';
        following?: {
            users: {
                id: string | number;
            }[];
        };
        settings: {
            theme: null | 'nightmode';
            isPromoter: boolean;
            sanbaseVersion: null | string;
            alertNotifyEmail: boolean;
            alertNotifyTelegram: boolean;
        };
        ethAccounts: {
            address: string;
        }[];
    };
    isLoggedIn: boolean;
    isEarlyAccessMember: boolean;
    sanBalance: number;
    isEligibleForSanbaseTrial: boolean;
    annualDiscount: null | {
        isEligible: boolean;
        expireAt: null | string;
        percent: null | number;
        daysLeft: number;
    };
    isBusinessSubscription: boolean;
    isConsumerSubscription: boolean;
    isCanceledSubscription: boolean;
    isIncompleteSubscription: boolean;
    isFree: boolean;
    isPro: boolean;
    isProPlus: boolean;
    isMax: boolean;
    isBusinessPro: boolean;
    isBusinessMax: boolean;
    isCustom: boolean;
    isTrialSubscription: boolean;
    trialDaysLeft: number;
    plan: null | TSubscriptionPlan;
    planName: string;
    primarySubscription: null | TSubscription;
    sanbaseSubscription: null | TSubscription;
    apiSubscription: null | TSubscription;
    subscriptions: null | TSubscription[];
};
export declare const DEFAULT: TCustomer;
export declare const queryCurrentUserSubscriptions: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor.js").Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
}>)) => <GData extends {
    id: string;
    email: null | string;
    name: null | string;
    username: null | string;
    avatarUrl: null | string;
    privacyPolicyAccepted: boolean;
    marketingAccepted: boolean;
    firstLogin: boolean;
    isModerator: boolean;
    featureAccessLevel: string;
    following?: {
        users: {
            id: string | number;
        }[];
    };
    settings: {
        theme: null | "nightmode";
        isPromoter: boolean;
        sanbaseVersion: null | string;
        alertNotifyEmail: boolean;
        alertNotifyTelegram: boolean;
    };
    ethAccounts: {
        address: string;
    }[];
    isEligibleForSanbaseTrial: boolean;
    subscriptions: null | TSubscription[];
} | null = {
    id: string;
    email: null | string;
    name: null | string;
    username: null | string;
    avatarUrl: null | string;
    privacyPolicyAccepted: boolean;
    marketingAccepted: boolean;
    firstLogin: boolean;
    isModerator: boolean;
    featureAccessLevel: string;
    following?: {
        users: {
            id: string | number;
        }[];
    };
    settings: {
        theme: null | "nightmode";
        isPromoter: boolean;
        sanbaseVersion: null | string;
        alertNotifyEmail: boolean;
        alertNotifyTelegram: boolean;
    };
    ethAccounts: {
        address: string;
    }[];
    isEligibleForSanbaseTrial: boolean;
    subscriptions: null | TSubscription[];
} | null>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
type TApiAnnualDiscount = null | {
    isEligible: boolean;
    discount: null | {
        percentOff: number;
        expireAt: string;
    };
};
export declare const queryCustomerAnnualDiscount: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor.js").Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
}>)) => <GData extends TApiAnnualDiscount = TApiAnnualDiscount>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare const queryCurrentUserSanBalance: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../api/executor.js").Query = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
}>)) => <GData extends {
    sanBalance: number;
} | null = {
    sanBalance: number;
} | null>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
export declare function normalizeAnnualDiscount(annualDiscount: undefined | null | TApiAnnualDiscount): TCustomer['annualDiscount'];
export declare function loadCustomerData(fetcher: Parameters<typeof UniQuery>[0], update: (customerData: TCustomer | Pick<TCustomer, 'sanBalance'> | Pick<TCustomer, 'annualDiscount'>) => void): Promise<void>;
export {};
