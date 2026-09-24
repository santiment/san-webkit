import { type TPaymentFlowResult } from '../../flow.js';
type $$ComponentProps = {
    isPaymentInProcess?: boolean;
    delayStripe?: number;
    onSuccess: (data: TPaymentFlowResult, walletName?: string) => void;
    onError: (data: any, walletName?: string) => void;
};
declare const StripePaymentButton: import("svelte").Component<$$ComponentProps, {}, "isPaymentInProcess">;
type StripePaymentButton = ReturnType<typeof StripePaymentButton>;
export default StripePaymentButton;
