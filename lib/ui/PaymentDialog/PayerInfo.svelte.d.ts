/// <reference types="stripe-v3" />
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        StripeCard: stripe.elements.Element;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PayerInfoProps = typeof __propDef.props;
export type PayerInfoEvents = typeof __propDef.events;
export type PayerInfoSlots = typeof __propDef.slots;
export default class PayerInfo extends SvelteComponentTyped<PayerInfoProps, PayerInfoEvents, PayerInfoSlots> {
}
export {};
