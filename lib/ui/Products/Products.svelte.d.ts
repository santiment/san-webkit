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
export declare type ProductsProps = typeof __propDef.props;
export declare type ProductsEvents = typeof __propDef.events;
export declare type ProductsSlots = typeof __propDef.slots;
export default class Products extends SvelteComponentTyped<ProductsProps, ProductsEvents, ProductsSlots> {
}
export {};
