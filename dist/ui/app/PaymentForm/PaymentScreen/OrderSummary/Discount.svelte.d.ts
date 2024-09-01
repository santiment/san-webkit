import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiscountProps = typeof __propDef.props;
export type DiscountEvents = typeof __propDef.events;
export type DiscountSlots = typeof __propDef.slots;
export default class Discount extends SvelteComponent<DiscountProps, DiscountEvents, DiscountSlots> {
}
export {};
