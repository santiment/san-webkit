import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
import type { StripeAddressElement, StripeCardElement } from '@stripe/stripe-js';
import { CardMethod } from './PaymentScreen/PaymentMethodSelector/Card/index.js';
import { type TProductsWithPlans } from '../SubscriptionPlan/api.js';
import { getFormattedPlan } from '../SubscriptionPlan/utils.js';
export declare const SCREENS: readonly [{
    readonly name: "1. Choose your plan";
    readonly backLabel: "Choose plan";
}, {
    readonly name: "2. Payment details";
}];
export declare const usePaymentFormCtx: (({ defaultPlan }?: {
    defaultPlan?: null | TSubscriptionPlan;
}) => {
    paymentForm: import("svelte-runes").SS<{
        isCardPayment: boolean;
        setupIntentClientSecret: string;
        cardElement: null | StripeCardElement;
        addressElement: null | StripeAddressElement;
    }>;
    paymentMethod: import("svelte-runes").SS<{
        name: string;
        img: string;
        Component: import("svelte").Component<{
            delayStripe?: number;
        }, {}, "">;
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
    resultPayment: import("svelte-runes").SS<{
        description: string;
        percentOff: number;
        amount: number;
        amountOff: number;
        price: number;
        priceOff: number;
    } | {
        price: number | undefined;
        amount: number | undefined;
    }>;
    productsWithPlans: import("svelte-runes").SS<TProductsWithPlans>;
    selectPaymentMethod(option: typeof CardMethod): void;
    selectSubscriptionPlan: (selectedPlan: null | TSubscriptionPlan) => void;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        paymentForm: import("svelte-runes").SS<{
            isCardPayment: boolean;
            setupIntentClientSecret: string;
            cardElement: null | StripeCardElement;
            addressElement: null | StripeAddressElement;
        }>;
        paymentMethod: import("svelte-runes").SS<{
            name: string;
            img: string;
            Component: import("svelte").Component<{
                delayStripe?: number;
            }, {}, "">;
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
        resultPayment: import("svelte-runes").SS<{
            description: string;
            percentOff: number;
            amount: number;
            amountOff: number;
            price: number;
            priceOff: number;
        } | {
            price: number | undefined;
            amount: number | undefined;
        }>;
        productsWithPlans: import("svelte-runes").SS<TProductsWithPlans>;
        selectPaymentMethod(option: typeof CardMethod): void;
        selectSubscriptionPlan: (selectedPlan: null | TSubscriptionPlan) => void;
    };
    set: ({ defaultPlan }?: {
        defaultPlan?: null | TSubscriptionPlan;
    }) => {
        paymentForm: import("svelte-runes").SS<{
            isCardPayment: boolean;
            setupIntentClientSecret: string;
            cardElement: null | StripeCardElement;
            addressElement: null | StripeAddressElement;
        }>;
        paymentMethod: import("svelte-runes").SS<{
            name: string;
            img: string;
            Component: import("svelte").Component<{
                delayStripe?: number;
            }, {}, "">;
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
        resultPayment: import("svelte-runes").SS<{
            description: string;
            percentOff: number;
            amount: number;
            amountOff: number;
            price: number;
            priceOff: number;
        } | {
            price: number | undefined;
            amount: number | undefined;
        }>;
        productsWithPlans: import("svelte-runes").SS<TProductsWithPlans>;
        selectPaymentMethod(option: typeof CardMethod): void;
        selectSubscriptionPlan: (selectedPlan: null | TSubscriptionPlan) => void;
    };
};
export declare const mutateCreateStripeSetupIntent: <GExecutor extends (<T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof import("../../../api/executor.js").Query = <T>(schema: import("../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
    signal: null | AbortSignal;
}>)) => <GData extends string = string>() => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
