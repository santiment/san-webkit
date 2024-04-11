/// <reference types="stripe-v3" />
export declare function startStripePaymentButtonsFlow(stripe: stripe.Stripe, { plan, total, coupon, onSuccess, onError, }: {
    plan: SAN.Plan;
    total?: number;
    coupon?: string;
    onSuccess: (data: any, methodName?: string) => void;
    onError: (error?: any, methodName?: string) => void;
}): Promise<"none" | null | undefined>;
export declare function startPaymentIntentFlow(stripe: stripe.Stripe, variables: {
    planId: number;
    paymentMethodId: string;
    coupon?: string;
}): Promise<{
    id: string | number;
    trialEnd: string | null;
    status: string;
    paymentIntent?: {
        clientSecret: string;
    } | undefined;
    plan: {
        id: string | number;
        name: string;
        product: {
            id: string | number;
        };
    };
}>;
export declare function start3DSPaymentFlow(stripe: stripe.Stripe, variables: {
    planId: string | number;
    coupon?: string;
    card: stripe.elements.Element;
    checkoutInfo: {
        name: string;
        address_city: string;
        address_country: string;
        address_line1: string;
        address_line2: string;
    };
}): Promise<{
    id: string | number;
    trialEnd: string | null;
    status: string;
    paymentIntent?: {
        clientSecret: string;
    } | undefined;
    plan: {
        id: string | number;
        name: string;
        product: {
            id: string | number;
        };
    };
}>;
