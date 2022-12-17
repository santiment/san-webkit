import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        title: string;
        isXmas?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ProductProps = typeof __propDef.props;
export declare type ProductEvents = typeof __propDef.events;
export declare type ProductSlots = typeof __propDef.slots;
export default class Product extends SvelteComponentTyped<ProductProps, ProductEvents, ProductSlots> {
}
export {};
