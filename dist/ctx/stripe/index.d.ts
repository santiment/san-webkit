import type { Stripe } from '@stripe/stripe-js';
export declare const useStripeCtx: {
    (): {
        stripe: {
            readonly $: Stripe | null;
            load(): Stripe | null;
        };
    };
    get(): {
        stripe: {
            readonly $: Stripe | null;
            load(): Stripe | null;
        };
    };
    set(): {
        stripe: {
            readonly $: Stripe | null;
            load(): Stripe | null;
        };
    };
};
