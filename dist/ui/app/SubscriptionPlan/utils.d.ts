import type { TProduct, TSubscriptionPlan } from './types.js';
export declare const checkIsSanbaseProduct: (product: Pick<TProduct, "id">) => boolean;
export declare const checkIsSanApiProduct: (product: Pick<TProduct, "id">) => boolean;
export declare const checkIsBusinessPlan: (plan: null | Pick<TSubscriptionPlan, "name">) => boolean;
export declare const getPlanName: (plan: Pick<TSubscriptionPlan, "name">) => string;
export declare const getFormattedPlan: (monthlyPlan: TSubscriptionPlan, annualPlan?: null | TSubscriptionPlan) => {
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
export declare const checkIsCurrentPlan: (userPlan: null | TSubscriptionPlan, targetPlan: TSubscriptionPlan) => boolean;
export declare const checkIsAlternativeBillingPlan: (userPlan: null | TSubscriptionPlan, targetPlan: TSubscriptionPlan) => boolean;
