import type { ComponentType } from 'svelte';
export type Item = {
    [key: string]: unknown;
};
export type Sorter<T = Item> = (a: T, b: T) => number;
export type SortAccessor<T = Item> = (item: T) => number;
export type Format<T = Item> = (item: T, i: number, value?: unknown) => number | string;
export type Column<T = Item> = {
    title: string;
    className?: string;
    sortAccessor?: SortAccessor<T>;
    Header?: ComponentType;
    valueKey?: number | string;
    isSortable?: boolean;
    Component?: ComponentType;
    format?: Format<T>;
} & ({
    format: Format<T>;
} | {
    Component: ComponentType;
});
export declare function getMinRows(minRows: undefined | number, itemsLength: number, columnsLength: number): string;
