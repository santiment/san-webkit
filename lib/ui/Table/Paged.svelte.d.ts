/** @typedef {typeof __propDef.props}  PagedProps */
/** @typedef {typeof __propDef.events}  PagedEvents */
/** @typedef {typeof __propDef.slots}  PagedSlots */
export default class Paged extends SvelteComponentTyped<{
    [x: string]: any;
    items: any;
    page?: number | undefined;
    rows?: number[] | undefined;
    class?: string | undefined;
    pageSize?: number | undefined;
    pageOffset?: number | undefined;
    onPageChange?: ((_?: any) => any) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PagedProps = typeof __propDef.props;
export type PagedEvents = typeof __propDef.events;
export type PagedSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        items: any;
        page?: number | undefined;
        rows?: number[] | undefined;
        class?: string | undefined;
        pageSize?: number | undefined;
        pageOffset?: number | undefined;
        onPageChange?: ((_?: any) => any) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
