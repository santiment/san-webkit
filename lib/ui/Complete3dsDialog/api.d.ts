export declare const queryGetSubscriptionWithPaymentIntent: (id: number | string) => Promise<{
    clientSecret: string;
    status: 'requires_action' | 'requires_payment_method' | string;
} | undefined>;
