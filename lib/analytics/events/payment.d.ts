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
export declare const trackPaymentFormSubmitted: ({ source, amount, promocode, plan, planId, billing, currency, hasSanTokensDiscount, }: {
    amount: number;
    promocode?: string | undefined;
    plan: string;
    planId: number;
    billing: SAN.PlanInterval;
    currency?: CurrencyType | undefined;
    hasSanTokensDiscount: boolean;
    source: string;
}) => number;
export declare const trackPaymentSuccess: (source: any, method?: string) => number;
export declare const trackPaymentFail: (source: any, method?: string) => number;
export declare const trackPaymentFormPlanSelect: ({ amount, plan, planId, billing, currency, }: {
    amount: number;
    plan: string;
    planId: number;
    billing: SAN.PlanInterval;
    currency?: CurrencyType | undefined;
}) => number;
