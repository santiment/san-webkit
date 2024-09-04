import { CardMethod } from './PaymentScreen/PaymentMethodSelector/Card/index.js';
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
import { type TProductsWithPlans } from '../SubscriptionPlan/api.js';
import { getFormattedPlan } from '../SubscriptionPlan/utils.js';
import type { StripeAddressElement, StripeCardElement } from '@stripe/stripe-js';
export declare const usePaymentFormCtx: {
    (args_0?: {
        defaultPlan?: null | TSubscriptionPlan;
    } | undefined): {
        paymentForm: import("svelte-runes").SS<{
            isCardPayment: boolean;
            setupIntentClientSecret: string;
            cardElement: null | StripeCardElement;
            addressElement: null | StripeAddressElement;
        }>;
        paymentMethod: import("svelte-runes").SS<{
            name: string;
            img: any;
            Component: typeof import("./PaymentScreen/PaymentMethodSelector/Card/index.svelte.js").default;
        }>;
        billingPeriod: import("svelte-runes").SS<"month" | "year">;
        subscriptionPlan: import("svelte-runes").SS<{
            selected: TSubscriptionPlan | null;
            month: null | TSubscriptionPlan;
            year: null | TSubscriptionPlan;
            formatted: null | ReturnType<typeof getFormattedPlan>;
        }>;
        coupon: import("svelte-runes").SS<{
            value: string;
            isValid: boolean;
            percentOff: number;
        } | null>;
        discount: import("svelte-runes").SS<{
            description: string;
            percentOff: number;
            amount: number;
            amountOff: number;
            price: number;
            priceOff: number;
        } | null | undefined>;
        productsWithPlans: import("svelte-runes").SS<TProductsWithPlans>;
        selectPaymentMethod(option: typeof CardMethod): void;
        selectSubscriptionPlan: (selectedPlan: null | TSubscriptionPlan) => void;
    };
    get(): {
        paymentForm: import("svelte-runes").SS<{
            isCardPayment: boolean;
            setupIntentClientSecret: string;
            cardElement: null | StripeCardElement;
            addressElement: null | StripeAddressElement;
        }>;
        paymentMethod: import("svelte-runes").SS<{
            name: string;
            img: any;
            Component: typeof import("./PaymentScreen/PaymentMethodSelector/Card/index.svelte.js").default;
        }>;
        billingPeriod: import("svelte-runes").SS<"month" | "year">;
        subscriptionPlan: import("svelte-runes").SS<{
            selected: TSubscriptionPlan | null;
            month: null | TSubscriptionPlan;
            year: null | TSubscriptionPlan;
            formatted: null | ReturnType<typeof getFormattedPlan>;
        }>;
        coupon: import("svelte-runes").SS<{
            value: string;
            isValid: boolean;
            percentOff: number;
        } | null>;
        discount: import("svelte-runes").SS<{
            description: string;
            percentOff: number;
            amount: number;
            amountOff: number;
            price: number;
            priceOff: number;
        } | null | undefined>;
        productsWithPlans: import("svelte-runes").SS<TProductsWithPlans>;
        selectPaymentMethod(option: typeof CardMethod): void;
        selectSubscriptionPlan: (selectedPlan: null | TSubscriptionPlan) => void;
    };
    set(args_0?: {
        defaultPlan?: null | TSubscriptionPlan;
    } | undefined): {
        paymentForm: import("svelte-runes").SS<{
            isCardPayment: boolean;
            setupIntentClientSecret: string;
            cardElement: null | StripeCardElement;
            addressElement: null | StripeAddressElement;
        }>;
        paymentMethod: import("svelte-runes").SS<{
            name: string;
            img: any;
            Component: typeof import("./PaymentScreen/PaymentMethodSelector/Card/index.svelte.js").default;
        }>;
        billingPeriod: import("svelte-runes").SS<"month" | "year">;
        subscriptionPlan: import("svelte-runes").SS<{
            selected: TSubscriptionPlan | null;
            month: null | TSubscriptionPlan;
            year: null | TSubscriptionPlan;
            formatted: null | ReturnType<typeof getFormattedPlan>;
        }>;
        coupon: import("svelte-runes").SS<{
            value: string;
            isValid: boolean;
            percentOff: number;
        } | null>;
        discount: import("svelte-runes").SS<{
            description: string;
            percentOff: number;
            amount: number;
            amountOff: number;
            price: number;
            priceOff: number;
        } | null | undefined>;
        productsWithPlans: import("svelte-runes").SS<TProductsWithPlans>;
        selectPaymentMethod(option: typeof CardMethod): void;
        selectSubscriptionPlan: (selectedPlan: null | TSubscriptionPlan) => void;
    };
};
export declare const mutateCreateStripeSetupIntent: <GExecutor extends (<T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>) | (<T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
    fetcher: (typeof globalThis)["fetch"];
}>) => Promise<T>) = <T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    refCount?: boolean;
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T | T[]>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & import("../../../api/index.js").TExecutorOptions)) => () => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<string> : Promise<string>;
