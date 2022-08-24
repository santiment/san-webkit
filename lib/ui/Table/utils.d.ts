import type { SvelteComponentDev } from 'svelte/internal'
export declare type Item = {
  [key: string]: any
}
export declare type Sorter = (a: Item, b: Item) => number
export declare type SortAccessor = (item: Item) => number
export declare type Column = {
  title: string
  format: (item: Item, i: number) => number | string
  className?: string
  sortAccessor?: SortAccessor
  Component?: SvelteComponentDev
}
export declare function getMinRows(
  minRows: undefined | number,
  itemsLength: number,
  columnsLength: number,
): string
