import type { TSubscriptionPlan } from './types.js';
export declare enum Status {
    ACTIVE = "ACTIVE",
    TRIALING = "TRIALING",
    INCOMPLETE = "INCOMPLETE"
}
export type TSubscription = {
    status: Status;
    plan: TSubscriptionPlan;
    trialEnd: null | string;
    cancelAtPeriodEnd: null | string;
};
export declare const checkIsTrialSubscription: ({ status }?: Pick<TSubscription, "status">) => boolean;
export declare const checkIsIncompleteSubscription: ({ status }?: Pick<TSubscription, "status">) => boolean;
export declare const checkIsActiveSubscription: ({ status }?: Pick<TSubscription, "status">) => boolean;
export declare const getSanbaseSubscription: (subscriptions: null | TSubscription[]) => TSubscription | null;
export declare const getApiSubscription: (subscriptions: null | TSubscription[]) => TSubscription | null;
export declare function getPrimarySubscription(subscriptions: null | TSubscription[]): TSubscription | null;
export declare function getCustomerSubscriptionData(subscription: null | TSubscription): {
    planName: string;
    isPro: boolean;
    isProPlus: boolean;
    isMax: boolean;
    isBusinessPro: boolean;
    isBusinessMax: boolean;
    isCanceledSubscription: boolean;
    isIncompleteSubscription: boolean;
    isTrialSubscription: boolean;
    trialDaysLeft: number;
} | {
    plan: TSubscriptionPlan;
    planName: string;
    isBusinessMax: boolean;
    isBusinessPro: boolean;
    isMax: boolean;
    isProPlus: boolean;
    isPro: boolean;
    isFree: boolean;
    isCanceledSubscription: boolean;
    isIncompleteSubscription: boolean;
    isTrialSubscription: boolean;
    trialDaysLeft: number;
};
