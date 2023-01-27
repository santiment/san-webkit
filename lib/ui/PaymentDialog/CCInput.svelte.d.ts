import { SvelteComponentTyped } from "svelte";
import { stripe } from './../../stores/stripe';
declare const __propDef: {
    props: {
        StripeCard: stripe.elements.Element | undefined;
        nightMode?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CcInputProps = typeof __propDef.props;
export declare type CcInputEvents = typeof __propDef.events;
export declare type CcInputSlots = typeof __propDef.slots;
export default class CcInput extends SvelteComponentTyped<CcInputProps, CcInputEvents, CcInputSlots> {
}
export {};
