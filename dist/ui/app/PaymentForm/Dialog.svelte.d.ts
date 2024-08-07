import { SvelteComponent } from "svelte";
export declare const showPaymentDialog$: () => (props: Omit<TDialogProps & {
    defaultPlan?: null | TSubscriptionPlan;
}, "Controller" | "resolve" | "reject">) => Promise<undefined>;
import { type TDialogProps } from '../../core/Dialog/index.js';
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
declare const __propDef: {
    props: TDialogProps & {
        defaultPlan?: null | TSubscriptionPlan;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponent<DialogProps, DialogEvents, DialogSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<TDialogProps & {
        defaultPlan?: null | TSubscriptionPlan;
    }>);
    $$bindings: "";
}
export {};
