export declare const mutateCreateStripeSetupIntent: () => Promise<string>;
export declare const mutateSubscribe: (variables: {
    planId: number;
    cardToken?: string;
    coupon?: string;
    paymentMethodId?: string;
}) => Promise<{
    id: string | number;
    trialEnd: string | null;
    plan: {
        id: string | number;
        name: string;
        product: {
            id: string | number;
        };
    };
}>;
