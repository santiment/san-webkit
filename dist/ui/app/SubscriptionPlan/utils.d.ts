import type { TProduct, TSubscriptionPlan } from './types.js';
export declare const checkIsCustomPlan: (planName: string) => boolean;
export declare const checkIsSanbaseProduct: (product: Pick<TProduct, "id">) => boolean;
export declare const checkIsSanApiProduct: (product: Pick<TProduct, "id">) => boolean;
export declare const checkIsBusinessPlan: (planName: string | undefined) => boolean;
export declare const getPlanName: (planName: string) => string;
export declare function getFormattedBillingPlan(plan: TSubscriptionPlan): {
    name: string;
    billing: "month" | "year";
    amount: number;
    price: number;
};
export declare function getFormattedPlan(monthlyPlan: TSubscriptionPlan, annualPlan?: null | TSubscriptionPlan): {
    isFree: boolean;
    isCustom: boolean;
    isBusiness: boolean;
    name: string;
    details: {
        description: string;
        features: string[];
    } | undefined;
    amount: {
        month: number;
        year: number | undefined;
    };
    price: {
        month: number;
        year: number | undefined;
        savePercentWithAnnual: number;
    };
};
export declare const checkIsCurrentPlan: (userPlan: null | TSubscriptionPlan, targetPlan?: Pick<TSubscriptionPlan, "name" | "interval">) => boolean;
export declare const checkIsAlternativeBillingPlan: (userPlan: null | TSubscriptionPlan, targetPlan: TSubscriptionPlan) => boolean;
