import type { Component, ComponentProps } from 'svelte'

type BaseHeadProps<GItem, GCellExtra = object, GHeaderExtra = object> = {
  column: ColumnDef<GItem, GCellExtra, GHeaderExtra>
}

type BaseCellProps<GItem, GCellExtra = object, GHeaderExtra = object> = {
  item: GItem
  column: ColumnDef<GItem, GCellExtra, GHeaderExtra>
}

export type ComponentExtraProps<T extends Component<any, any, any>> = Omit<
  ComponentProps<T>,
  keyof BaseCellProps<any, any, any>
>

export type ColumnDef<GItem, GCellExtra = object, GHeaderExtra = object> = {
  id: string
  class?: string

  title?: string
  Head?: Component<BaseHeadProps<GItem, GCellExtra, GHeaderExtra> & GHeaderExtra>
  getHeadProps?: () => GHeaderExtra

  format?: (
    item: GItem,
    index: number,
    column: ColumnDef<GItem, GCellExtra, GHeaderExtra>,
  ) => string | number
  Cell?: Component<BaseCellProps<GItem, GCellExtra, GHeaderExtra> & GCellExtra>
  getCellProps?: (item: GItem) => GCellExtra

  isSortable?: boolean
  sortAccessor?: (item: GItem) => number
}

export const defineColumn = <GItem, GCellExtra = object, GHeaderExtra = object>(
  col: ColumnDef<GItem, GCellExtra, GHeaderExtra>,
) => col

export type SortDirection = 'DESC' | 'ASC'
