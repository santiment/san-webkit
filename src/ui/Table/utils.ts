import type { ComponentType } from 'svelte'

export type Item = { [key: string]: unknown }

export type Sorter<T = Item> = (a: T, b: T) => number
export type SortAccessor<T = Item> = (item: T) => number

export type Format<T = Item> = (item: T, i: number, value?: unknown) => number | string
export type Column<T = Item> = {
  title: string
  className?: string
  sortAccessor?: SortAccessor<T>

  Header?: ComponentType
  valueKey?: number | string
  isSortable?: boolean
  Component?: any
  format?: any
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
