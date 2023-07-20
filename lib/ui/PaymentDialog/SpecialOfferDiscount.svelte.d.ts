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
export type SpecialOfferDiscountProps = typeof __propDef.props;
export type SpecialOfferDiscountEvents = typeof __propDef.events;
export type SpecialOfferDiscountSlots = typeof __propDef.slots;
export default class SpecialOfferDiscount extends SvelteComponentTyped<SpecialOfferDiscountProps, SpecialOfferDiscountEvents, SpecialOfferDiscountSlots> {
}
export {};
