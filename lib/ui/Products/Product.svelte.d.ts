import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: any;
        title: any;
        href: any;
        desc: any;
        dimensions: any;
        active: any;
        accent: any;
        note?: undefined;
        isCompact?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
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
