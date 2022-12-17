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
export declare type PayerInfoProps = typeof __propDef.props;
export declare type PayerInfoEvents = typeof __propDef.events;
export declare type PayerInfoSlots = typeof __propDef.slots;
export default class PayerInfo extends SvelteComponentTyped<PayerInfoProps, PayerInfoEvents, PayerInfoSlots> {
}
export {};
