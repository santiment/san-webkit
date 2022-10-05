import type { SvelteComponentDev } from 'svelte/internal';
export declare type Item = {
    [key: string]: any;
};
export declare type Sorter = (a: Item, b: Item) => number;
export declare type SortAccessor = (item: Item) => number;
export declare type Column<T = Item> = {
    title: string;
    format: (item: T, i: number, value?: T) => number | string;
    className?: string;
    sortAccessor?: SortAccessor;
    Component?: SvelteComponentDev;
    Header?: SvelteComponentDev;
    valueKey?: string;
    isSortable?: boolean;
};
export declare function getMinRows(minRows: undefined | number, itemsLength: number, columnsLength: number): string;
