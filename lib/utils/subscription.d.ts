import type { CustomerData } from './../stores/user';
export declare enum Status {
    ACTIVE = "ACTIVE",
    TRIALING = "TRIALING",
    INCOMPLETE = "INCOMPLETE"
}
export declare const checkIsTrialSubscription: ({ status }?: Pick<SAN.Subscription, "status">) => boolean;
export declare const checkIsIncompleteSubscription: ({ status }?: Pick<SAN.Subscription, "status">) => boolean;
export declare const checkIsActiveSubscription: ({ status }: SAN.Subscription) => boolean;
export declare const calculateTrialDaysLeft: (trialEnd: string) => number;
export declare function getSanbaseSubscription(subscriptions: SAN.Subscription[]): SAN.Subscription | undefined;
export declare function getTrialDaysLeft(subscription: SAN.Subscription): string | undefined;
export declare function getUserSubscriptionInfo(customerData: Pick<CustomerData, 'isEligibleForTrial' | 'annualDiscount'>, subscription: Pick<SAN.Subscription, 'plan' | 'trialEnd' | 'status'>): {
    isEligibleForTrial: boolean;
    isIncomplete: boolean;
    annualDiscount: SAN.AnnualDiscount | undefined;
    annualDiscountPercent: number | false | undefined;
    annualDiscountDaysLeft: number;
    userPlanName: any;
    trialDaysLeft: number;
};
export declare function normalizeAnnualDiscount(annualDiscount: undefined | null | SAN.AnnualDiscount): {
    isEligible: boolean;
    expireAt: string | undefined;
    percent: number | false | undefined;
    daysLeft: number;
};
export declare function getNextPaymentDate(plan: SAN.Plan): Date;
