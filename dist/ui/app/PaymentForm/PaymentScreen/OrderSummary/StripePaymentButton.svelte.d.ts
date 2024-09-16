import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        onSuccess: (data: any, walletName?: string) => void;
        onError: (data: any, walletName?: string) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StripePaymentButtonProps = typeof __propDef.props;
export type StripePaymentButtonEvents = typeof __propDef.events;
export type StripePaymentButtonSlots = typeof __propDef.slots;
export default class StripePaymentButton extends SvelteComponent<StripePaymentButtonProps, StripePaymentButtonEvents, StripePaymentButtonSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        onSuccess: (data: any, walletName?: string) => void;
        onError: (data: any, walletName?: string) => void;
    }>);
    $$bindings: "";
}
export {};
