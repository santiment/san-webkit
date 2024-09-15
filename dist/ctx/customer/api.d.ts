import { UniQuery } from '../../api/executor.js';
import { type TSubscription } from '../../ui/app/SubscriptionPlan/subscription.js';
import type { TSubscriptionPlan } from '../../ui/app/SubscriptionPlan/types.js';
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
        settings: {
            theme: null | 'nightmode';
            isPromoter: boolean;
            sanbaseVersion: null | string;
        };
    };
    isLoggedIn: boolean;
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
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>) | (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)["fetch"];
}>) => Promise<T>) = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../api/index.js").TExecutorOptions)) => () => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<{
    id: string;
    email: null | string;
    name: null | string;
    username: null | string;
    avatarUrl: null | string;
    privacyPolicyAccepted: boolean;
    marketingAccepted: boolean;
    firstLogin: boolean;
    isModerator: boolean;
    settings: {
        theme: null | "nightmode";
        isPromoter: boolean;
        sanbaseVersion: null | string;
    };
    isEligibleForSanbaseTrial: boolean;
    subscriptions: null | TSubscription[];
} | null> : Promise<{
    id: string;
    email: null | string;
    name: null | string;
    username: null | string;
    avatarUrl: null | string;
    privacyPolicyAccepted: boolean;
    marketingAccepted: boolean;
    firstLogin: boolean;
    isModerator: boolean;
    settings: {
        theme: null | "nightmode";
        isPromoter: boolean;
        sanbaseVersion: null | string;
    };
    isEligibleForSanbaseTrial: boolean;
    subscriptions: null | TSubscription[];
} | null>;
type TApiAnnualDiscount = null | {
    isEligible: boolean;
    discount: null | {
        percentOff: number;
        expireAt: string;
    };
};
export declare const queryCustomerAnnualDiscount: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>) | (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)["fetch"];
}>) => Promise<T>) = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../api/index.js").TExecutorOptions)) => () => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<TApiAnnualDiscount> : Promise<TApiAnnualDiscount>;
export declare const queryCurrentUserSanBalance: <GExecutor extends (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>) | (<T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)["fetch"];
}>) => Promise<T>) = <T>(schema: import("../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../api/index.js").TExecutorOptions)) => () => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<{
    sanBalance: number;
} | null> : Promise<{
    sanBalance: number;
} | null>;
export declare function normalizeAnnualDiscount(annualDiscount: undefined | null | TApiAnnualDiscount): TCustomer['annualDiscount'];
export declare function loadCustomerData(fetcher: Parameters<typeof UniQuery>[0], update: (customerData: TCustomer | Pick<TCustomer, 'sanBalance'> | Pick<TCustomer, 'annualDiscount'>) => void): Promise<void>;
export {};
