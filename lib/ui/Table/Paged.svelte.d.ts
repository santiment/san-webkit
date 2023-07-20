import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        items: any;
        pageSize?: number | undefined;
        page?: number | undefined;
        rows?: number[] | undefined;
        pageOffset?: number | undefined;
        onPageChange?: ((page: number, pageSize?: number) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PagedProps = typeof __propDef.props;
export type PagedEvents = typeof __propDef.events;
export type PagedSlots = typeof __propDef.slots;
export default class Paged extends SvelteComponentTyped<PagedProps, PagedEvents, PagedSlots> {
}
export {};
