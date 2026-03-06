export declare const showPaymentDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps & {
    onSuccess?: (data: import("./flow").TPaymentFlowResult) => void;
    onError?: () => void;
} & {
    defaultPlan?: null | TSubscriptionPlan;
    triggeredBy?: {
        textContent?: null | string;
        dataset: Partial<{
            type: string;
            source: string;
        }>;
    };
}, "resolve" | "Controller" | "reject">) => Promise<undefined>);
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
import { type ComponentProps } from 'svelte';
import { type TDialogProps } from '../../core/Dialog/index.js';
import OrderSummary from './PaymentScreen/OrderSummary/index.svelte';
type Props = TDialogProps & ComponentProps<typeof OrderSummary> & {
    defaultPlan?: null | TSubscriptionPlan;
    triggeredBy?: {
        textContent?: null | string;
        dataset: Partial<{
            type: string;
            source: string;
        }>;
    };
};
declare const PaymentDialog: import("svelte").Component<Props, {}, "">;
type PaymentDialog = ReturnType<typeof PaymentDialog>;
export default PaymentDialog;
