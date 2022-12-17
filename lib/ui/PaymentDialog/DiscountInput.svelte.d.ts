import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        percentOff?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DiscountInputProps = typeof __propDef.props;
export declare type DiscountInputEvents = typeof __propDef.events;
export declare type DiscountInputSlots = typeof __propDef.slots;
export default class DiscountInput extends SvelteComponentTyped<DiscountInputProps, DiscountInputEvents, DiscountInputSlots> {
}
export {};
