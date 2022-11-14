export declare enum CurrencyType {
    USD = "USD"
}
export declare const trackPaymentFormOpened: (currency?: CurrencyType) => number;
export declare const trackPaymentFormSubmitted: ({ amount, promocode, subscription_tier, timeframe, currency, san_tokens_discount, }: {
    amount: number;
    promocode?: string | undefined;
    subscription_tier: string;
    timeframe: 'monthly' | 'yearly';
    currency: CurrencyType;
    san_tokens_discount: boolean;
}) => number;
export declare const trackPaymentSuccess: (payment_success: boolean) => number;
