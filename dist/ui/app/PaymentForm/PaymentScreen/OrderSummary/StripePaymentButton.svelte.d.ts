import { type TPaymentFlowResult } from '../../flow.js';
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
declare const StripePaymentButton: $$__sveltets_2_IsomorphicComponent<{
    onSuccess: (data: TPaymentFlowResult, walletName?: string) => void;
    onError: (data: any, walletName?: string) => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type StripePaymentButton = InstanceType<typeof StripePaymentButton>;
export default StripePaymentButton;
