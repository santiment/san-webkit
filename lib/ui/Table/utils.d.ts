import type { ComponentType } from 'svelte';
export type Item = {
    [key: string]: any;
};
export type Sorter = (a: Item, b: Item) => number;
export type SortAccessor = (item: Item) => number;
export type Format<T = Item> = (item: T, i: number, value?: any) => number | string;
export type Column<T = Item> = {
    title: string;
    className?: string;
    sortAccessor?: SortAccessor;
    Header?: ComponentType;
    valueKey?: string;
    isSortable?: boolean;
} & ({
    format: Format<T>;
} | {
    Component: ComponentType;
});
export declare function getMinRows(minRows: undefined | number, itemsLength: number, columnsLength: number): string;
