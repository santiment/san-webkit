import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        columns: SAN.Table.Column[];
        items: SAN.Table.Item[];
        keyProp?: undefined | string;
        minRows?: undefined | number;
        sortedColumn?: undefined | SAN.Table.Column;
        sticky?: boolean | undefined;
        isLoading?: boolean | undefined;
        applySort?: ((sorter: any, items: any) => any) | undefined;
        onSortClick?: ((column: SAN.Table.Column, isDescSort: boolean) => void) | undefined;
        itemProps: {
            [key: string]: any;
        };
        offset?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
