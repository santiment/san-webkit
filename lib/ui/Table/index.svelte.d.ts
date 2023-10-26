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
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {};
    };
}
export type IndexProps<Item extends SAN.Table.Item> = ReturnType<__sveltets_Render<Item>['props']>;
export type IndexEvents<Item extends SAN.Table.Item> = ReturnType<__sveltets_Render<Item>['events']>;
export type IndexSlots<Item extends SAN.Table.Item> = ReturnType<__sveltets_Render<Item>['slots']>;
export default class Index<Item extends SAN.Table.Item> extends SvelteComponentTyped<IndexProps<Item>, IndexEvents<Item>, IndexSlots<Item>> {
}
export {};
