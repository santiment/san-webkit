import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        percentOff: any;
        selectedNameBilling: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SpecialOfferDiscountProps = typeof __propDef.props;
export declare type SpecialOfferDiscountEvents = typeof __propDef.events;
export declare type SpecialOfferDiscountSlots = typeof __propDef.slots;
export default class SpecialOfferDiscount extends SvelteComponentTyped<SpecialOfferDiscountProps, SpecialOfferDiscountEvents, SpecialOfferDiscountSlots> {
}
export {};
