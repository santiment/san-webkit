import type { SvelteComponentDev } from 'svelte/internal'

export type Item = { [key: string]: any }

export type Sorter = (a: Item, b: Item) => number
export type SortAccessor = (item: Item) => number

export type Column<T = Item> = {
  title: string
  format: (item: T, i: number, value?: T) => number | string
  className?: string
  sortAccessor?: SortAccessor
  Component?: SvelteComponentDev
  Header?: SvelteComponentDev
  valueKey?: string
}

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
