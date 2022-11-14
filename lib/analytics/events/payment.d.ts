export declare enum CurrencyType {
    USD = "USD"
}
export declare const trackPaymentFormClosed: () => number;
export declare const trackPaymentFormOpened: ({ plan, planId, amount, billing, source, currency, }: {
    plan: string;
    planId: number;
    amount: number;
    billing: SAN.PlanInterval;
    currency?: CurrencyType | undefined;
    source: string;
}) => number;
export declare const trackPaymentFormSubmitted: ({ amount, promocode, plan, billing, currency, hasSanTokensDiscount, }: {
    amount: number;
    promocode?: string | undefined;
    plan: string;
    billing: SAN.PlanInterval;
    currency?: CurrencyType | undefined;
    hasSanTokensDiscount: boolean;
}) => number;
export declare const trackPaymentSuccess: () => number;
export declare const trackPaymentFormPlanSelect: ({ amount, plan, billing, currency, }: {
    amount: number;
    plan: string;
    billing: SAN.PlanInterval;
    currency?: CurrencyType | undefined;
}) => number;
