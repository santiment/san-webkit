/// <reference types="stripe-v3" />
import type { Subscriber, Unsubscriber } from 'svelte/store';
declare type Value = null | stripe.Stripe;
declare type Store = {
    load: () => void;
    subscribe: (this: void, run: Subscriber<Value>, invalidate?: any) => Unsubscriber;
};
export declare const stripe: Store;
export {};
