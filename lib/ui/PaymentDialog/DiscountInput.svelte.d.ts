import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        percentOff?: number | undefined;
        ctx?: {
            coupon: string;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiscountInputProps = typeof __propDef.props;
export type DiscountInputEvents = typeof __propDef.events;
export type DiscountInputSlots = typeof __propDef.slots;
export default class DiscountInput extends SvelteComponentTyped<DiscountInputProps, DiscountInputEvents, DiscountInputSlots> {
}
export {};
