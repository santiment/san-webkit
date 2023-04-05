import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        discount: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiscountCodeProps = typeof __propDef.props;
export type DiscountCodeEvents = typeof __propDef.events;
export type DiscountCodeSlots = typeof __propDef.slots;
export default class DiscountCode extends SvelteComponentTyped<DiscountCodeProps, DiscountCodeEvents, DiscountCodeSlots> {
}
export {};
