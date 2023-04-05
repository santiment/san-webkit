import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        isCompact?: boolean | undefined;
        isColumn?: boolean | undefined;
        active?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProductsProps = typeof __propDef.props;
export type ProductsEvents = typeof __propDef.events;
export type ProductsSlots = typeof __propDef.slots;
export default class Products extends SvelteComponentTyped<ProductsProps, ProductsEvents, ProductsSlots> {
}
export {};
