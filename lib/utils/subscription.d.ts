import type { CustomerData } from './../stores/user';
export declare enum Status {
    ACTIVE = "ACTIVE",
    TRIALING = "TRIALING"
}
export declare const checkIsTrialSubscription: ({ status }?: SAN.Subscription) => boolean;
export declare const checkIsActiveSubscription: ({ status }: SAN.Subscription) => boolean;
export declare const calculateTrialDaysLeft: (trialEnd: string) => number;
export declare function getSanbaseSubscription(subscriptions: SAN.Subscription[]): SAN.Subscription | undefined;
export declare function getTrialDaysLeft(subscription: SAN.Subscription): string | undefined;
export declare function getUserSubscriptionInfo(customerData: Pick<CustomerData, 'isEligibleForTrial' | 'annualDiscount'>, subscription: Pick<SAN.Subscription, 'plan' | 'trialEnd'>): {
    isEligibleForTrial: boolean;
    annualDiscount: SAN.AnnualDiscount | undefined;
    annualDiscountPercent: number | false | undefined;
    annualDiscountDaysLeft: number;
    userPlanName: any;
    trialDaysLeft: number;
};
export declare function getNextPaymentDate(plan: SAN.Plan): Date;
