import type { ComponentType } from 'svelte/internal';
export declare type Item = {
    [key: string]: any;
};
export declare type Sorter = (a: Item, b: Item) => number;
export declare type SortAccessor = (item: Item) => number;
export declare type Format<T = Item> = (item: T, i: number, value?: any) => number | string;
export declare type Column<T = Item> = {
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