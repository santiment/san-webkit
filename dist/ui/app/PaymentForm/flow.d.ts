import type { ConfirmCardSetupData, SetupIntent, Token } from '@stripe/stripe-js';
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
import { mutateSubscribe } from './api.js';
export type TPaymentFlowResult = undefined | API.ExtractData<typeof mutateSubscribe>;
export declare function usePaymentFlow(): {
    startCardPaymentFlow: ({ action }?: {
        action?: string | undefined;
    }) => Promise<{
        id: string;
        trialEnd: null | string;
        status: string;
        paymentIntent: null | {
            status: string;
            clientSecret: string;
        };
        plan: TSubscriptionPlan;
    } | null | undefined>;
    processPayment: ({ method, action, plan, cardToken, ...paymentData }: {
        plan: TSubscriptionPlan;
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
            status: string;
            clientSecret: string;
        };
        plan: TSubscriptionPlan;
    } | null | undefined>;
};
