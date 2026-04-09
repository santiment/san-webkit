import type { TSubscriptionPlan } from './types.js';
export declare enum Status {
    ACTIVE = "ACTIVE",
    TRIALING = "TRIALING",
    INCOMPLETE = "INCOMPLETE"
}
export type TSubscription = {
    id: string;
    status: Status;
    plan: TSubscriptionPlan;
    trialEnd: null | string;
    cancelAtPeriodEnd: null | string;
    currentPeriodEnd: string;
};
export declare const checkIsTrialSubscription: ({ status }?: Pick<TSubscription, "status">) => boolean;
export declare const checkIsIncompleteSubscription: ({ status }?: Pick<TSubscription, "status">) => boolean;
export type TPublicSubscription = {
    productName: string;
    planName: string;
};
type TSubscriptionLike = TSubscription | TPublicSubscription;
export declare const getSanbaseSubscription: <GSub extends TSubscriptionLike>(subscriptions: null | GSub[]) => GSub | null;
export declare const getApiSubscription: <GSub extends TSubscriptionLike>(subscriptions: null | GSub[]) => GSub | null;
export declare function getPrimarySubscription<GSub extends TSubscriptionLike>(subscriptions: null | GSub[]): GSub | null;
export declare function getCustomerSubscriptionData(subscription: null | TSubscription): {
    planName: string;
    isPro: boolean;
    isProPlus: boolean;
    isMax: boolean;
    isBusinessPro: boolean;
    isBusinessMax: boolean;
    isCustom: boolean;
    isBusinessSubscription: boolean;
    isConsumerSubscription: boolean;
    isCanceledSubscription: boolean;
    isIncompleteSubscription: boolean;
    isTrialSubscription: boolean;
    trialDaysLeft: null;
} | {
    plan: TSubscriptionPlan;
    planName: string;
    isBusinessMax: boolean;
    isBusinessPro: boolean;
    isMax: boolean;
    isProPlus: boolean;
    isPro: boolean;
    isFree: boolean;
    isCustom: boolean;
    isBusinessSubscription: boolean;
    isConsumerSubscription: boolean;
    isCanceledSubscription: boolean;
    isIncompleteSubscription: boolean;
    isTrialSubscription: boolean;
    trialDaysLeft: number | null;
    currentPeriodEnd: string | number;
};
export {};
