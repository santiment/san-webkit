export declare const showPaymentDialog$: () => (props: Omit<TDialogProps & {
    onSuccess?: (data: import("./flow").TPaymentFlowResult) => void;
    onError?: () => void;
} & {
    defaultPlan?: null | TSubscriptionPlan;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>;
import { type TDialogProps } from '../../core/Dialog/index.js';
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const PaymentDialog: $$__sveltets_2_IsomorphicComponent<TDialogProps & {
    onSuccess?: (data: import("./flow").TPaymentFlowResult) => void;
    onError?: () => void;
} & {
    defaultPlan?: null | TSubscriptionPlan;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type PaymentDialog = InstanceType<typeof PaymentDialog>;
export default PaymentDialog;
