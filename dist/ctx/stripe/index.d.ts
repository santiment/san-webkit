import type { Stripe } from '@stripe/stripe-js';
export declare function useStripeCtx({ delay }?: {
    delay?: number | undefined;
}): {
    stripe: {
        readonly $: Stripe | null;
        load(): Stripe | null;
    };
};
export declare function useDelayFlow(value?: number): import("svelte-runes").SS<number>;
