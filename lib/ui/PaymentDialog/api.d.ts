import type { SubscribeMutation } from './../../api/plans';
export declare const mutateCreateStripeSetupIntent: () => Promise<string>;
export declare const mutateSubscribe: (variables: {
    planId: number;
    cardToken?: string;
    coupon?: string;
    paymentMethodId?: string;
}) => Promise<SubscribeMutation>;
