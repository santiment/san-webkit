import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: string;
        title: string;
        href: string;
        desc: string;
        dimensions: any;
        active: boolean;
        accent: string;
        note?: string | undefined;
        isCompact?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ProductProps = typeof __propDef.props;
export type ProductEvents = typeof __propDef.events;
export type ProductSlots = typeof __propDef.slots;
export default class Product extends SvelteComponentTyped<ProductProps, ProductEvents, ProductSlots> {
}
export {};
