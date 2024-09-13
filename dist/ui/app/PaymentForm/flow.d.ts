import type { ConfirmCardSetupData, SetupIntent, Token } from '@stripe/stripe-js';
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
export declare function usePaymentFlow(): {
    startCardPaymentFlow: () => Promise<void>;
    processPayment: ({ plan, cardToken, ...paymentData }: {
        plan: TSubscriptionPlan;
        cardToken?: Token;
        paymentMethod?: ConfirmCardSetupData["payment_method"];
        setupIntent?: SetupIntent;
    }) => Promise<void>;
};
