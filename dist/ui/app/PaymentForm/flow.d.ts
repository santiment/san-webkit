import type { ConfirmCardSetupData, Token } from '@stripe/stripe-js';
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
export declare function usePaymentFlow(): {
    startCardPaymentFlow: () => Promise<void>;
    processPayment: ({ paymentMethod, plan, cardToken, }: {
        paymentMethod: ConfirmCardSetupData["payment_method"];
        plan: TSubscriptionPlan;
        cardToken?: Token;
    }) => Promise<void>;
};
