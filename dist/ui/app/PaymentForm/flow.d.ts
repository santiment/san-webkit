import type { ConfirmCardSetupData, SetupIntent, Token } from '@stripe/stripe-js';
import { mutateSubscribe } from './api.js';
export type TPaymentFlowResult = undefined | API.ExtractData<typeof mutateSubscribe>;
export declare const usePaymentFlowCtx: (<GTarget>({ ensureTarget, subscribeMutation, collectAnalytics, onPaymentSuccess, }: {
    ensureTarget: () => undefined | null | GTarget;
    subscribeMutation: (target: GTarget, data: {
        paymentMethodId: string;
        cardToken?: string;
    }) => Promise<API.ExtractData<typeof mutateSubscribe>>;
    collectAnalytics: (target: GTarget) => void | Record<string, any>;
    onPaymentSuccess: (target: GTarget, subscription: API.ExtractData<typeof mutateSubscribe>) => void;
}) => {
    startCardPaymentFlow: ({ action }?: {
        action?: string | undefined;
    }) => Promise<{
        id: string;
        trialEnd: null | string;
        status: string;
        paymentIntent: null | {
            id: string;
            status: string;
            clientSecret: string;
        };
        plan: import("../SubscriptionPlan/types.js").TSubscriptionPlan;
    } | null | undefined>;
    processPayment: ({ method, action, target, cardToken, ...paymentData }: {
        target?: ReturnType<typeof ensureTarget>;
        cardToken?: Token;
        paymentMethod?: ConfirmCardSetupData["payment_method"];
        setupIntent?: SetupIntent;
        method?: string;
        action?: string;
    }) => Promise<{
        id: string;
        trialEnd: null | string;
        status: string;
        paymentIntent: null | {
            id: string;
            status: string;
            clientSecret: string;
        };
        plan: import("../SubscriptionPlan/types.js").TSubscriptionPlan;
    } | null | undefined>;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: <GTarget>({ ensureTarget, subscribeMutation, collectAnalytics, onPaymentSuccess, }: {
        ensureTarget: () => undefined | null | GTarget;
        subscribeMutation: (target: GTarget, data: {
            paymentMethodId: string;
            cardToken?: string;
        }) => Promise<API.ExtractData<typeof mutateSubscribe>>;
        collectAnalytics: (target: GTarget) => void | Record<string, any>;
        onPaymentSuccess: (target: GTarget, subscription: API.ExtractData<typeof mutateSubscribe>) => void;
    }) => {
        startCardPaymentFlow: ({ action }?: {
            action?: string | undefined;
        }) => Promise<{
            id: string;
            trialEnd: null | string;
            status: string;
            paymentIntent: null | {
                id: string;
                status: string;
                clientSecret: string;
            };
            plan: import("../SubscriptionPlan/types.js").TSubscriptionPlan;
        } | null | undefined>;
        processPayment: ({ method, action, target, cardToken, ...paymentData }: {
            target?: ReturnType<typeof ensureTarget>;
            cardToken?: Token;
            paymentMethod?: ConfirmCardSetupData["payment_method"];
            setupIntent?: SetupIntent;
            method?: string;
            action?: string;
        }) => Promise<{
            id: string;
            trialEnd: null | string;
            status: string;
            paymentIntent: null | {
                id: string;
                status: string;
                clientSecret: string;
            };
            plan: import("../SubscriptionPlan/types.js").TSubscriptionPlan;
        } | null | undefined>;
    };
    __CTX: "usePaymentFlowCtx";
};
/**
 * Ensuring the `usePaymentFlowCtx` is set with appropriate handlers to support Sanbase's payment flow.
 * Accessing `useCustomerCtx` and `usePaymentFormCtx` to get the current user and selected plan/coupon info.
 */
export declare function useSanbasePaymentFlow(): void;
