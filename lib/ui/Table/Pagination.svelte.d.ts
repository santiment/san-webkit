import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
        rows?: number[] | undefined;
        onPageChange?: ((page: number, pageSize: number) => void) | undefined;
        totalItems: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PaginationProps = typeof __propDef.props;
export type PaginationEvents = typeof __propDef.events;
export type PaginationSlots = typeof __propDef.slots;
export default class Pagination extends SvelteComponentTyped<PaginationProps, PaginationEvents, PaginationSlots> {
}
export {};
