import type { SvelteComponentDev } from 'svelte/internal'

export type Item = { [key: string]: any }

export type Sorter = (a: Item, b: Item) => number
export type SortAccessor = (item: Item) => number

export type Format<T = Item> = (item: T, i: number, value?: any) => number | string
export type Column<T = Item> = {
  title: string
  className?: string
  sortAccessor?: SortAccessor

  Header?: SvelteComponentDev
  valueKey?: string
  isSortable?: boolean
} & ({ format: Format<T> } | { Component: SvelteComponentDev })

const COLUMN_PADDING = '<td></td>'
export function getMinRows(
  minRows: undefined | number,
  itemsLength: number,
  columnsLength: number,
) {
  if (!minRows) return ''

  const rowsAmount = (minRows as number) - itemsLength
  if (rowsAmount <= 0) return ''

  const columnsPadding = ''.padStart(columnsLength * COLUMN_PADDING.length, COLUMN_PADDING)

  let rows = ''
  for (let i = 0; i < rowsAmount; i++) {
    rows += '<tr>' + columnsPadding + '</tr>'
  }
  return rows
}
