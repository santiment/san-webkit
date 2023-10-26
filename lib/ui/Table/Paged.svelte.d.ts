import { SvelteComponentTyped } from "svelte";
import type { Sorter } from './utils';
declare class __sveltets_Render<Item extends SAN.Table.Item> {
    props(): {
        class?: string | undefined;
        columns: SAN.Table.Column<Item>[];
        items: Item[];
        keyProp?: string | undefined;
        minRows?: number | undefined;
        sortedColumn?: SAN.Table.Column<Item> | undefined;
        sticky?: boolean | undefined;
        isLoading?: boolean | undefined;
        applySort?: ((sorter: Sorter<Item>, items: Item[]) => Item[]) | undefined;
        onSortClick?: ((column: SAN.Table.Column<Item>, isDescSort: boolean) => void) | undefined;
        itemProps?: {
            [key: string]: unknown;
        } | null | undefined;
        offset?: number | undefined;
        onItemClick?: ((item: import("./utils").Item) => void) | undefined;
        pagedClassName?: string | undefined;
        pageSize?: number | undefined;
        page?: number | undefined;
        rows?: number[] | undefined;
        pageOffset?: number | undefined;
        totalItems?: number | undefined;
        onPageChange?: ((page: number, pageSize: number) => void) | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {};
    };
}
export type PagedProps<Item extends SAN.Table.Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type PagedEvents<Item extends SAN.Table.Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type PagedSlots<Item extends SAN.Table.Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Paged<Item extends SAN.Table.Item> extends SvelteComponentTyped<PagedProps<Item>, PagedEvents<Item>, PagedSlots<Item>> {
}
export {};
