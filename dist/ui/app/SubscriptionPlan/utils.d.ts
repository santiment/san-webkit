import type { TSubscriptionPlan } from './types.js';
import type { TProductsWithPlans } from './api.js';
export type TLooseProduct = {
    id?: string;
    name?: string;
};
export declare const checkIsSanbaseProduct: (product: TLooseProduct) => boolean;
export declare const checkIsSanApiProduct: (product: TLooseProduct) => boolean;
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
    isTrialSupported: boolean;
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
export declare function getPlansApiLimitsMap(products: TProductsWithPlans): Partial<Record<"PRO_PLUS" | "FREE" | "PRO" | "MAX" | "BUSINESS_PRO" | "BUSINESS_MAX" | "CUSTOM", number>>;
