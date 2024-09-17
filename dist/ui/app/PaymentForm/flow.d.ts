import type { ConfirmCardSetupData, SetupIntent, Token } from '@stripe/stripe-js';
import { mutateSubscribe } from './api.js';
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
export type TPaymentFlowResult = undefined | API.ExtractData<typeof mutateSubscribe>;
export declare function usePaymentFlow(): {
    startCardPaymentFlow: () => Promise<{
        id: string;
        trialEnd: null | string;
        status: string;
        paymentIntent: null | {
            status: string;
            clientSecret: string;
        };
        plan: TSubscriptionPlan;
    } | null | undefined>;
    processPayment: ({ plan, cardToken, ...paymentData }: {
        plan: TSubscriptionPlan;
        cardToken?: Token;
        paymentMethod?: ConfirmCardSetupData["payment_method"];
        setupIntent?: SetupIntent;
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
