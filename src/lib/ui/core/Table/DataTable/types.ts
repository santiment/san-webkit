import type { Component } from 'svelte'

export type ColumnDef<GItem, GCellExtra = object, GHeaderExtra = object> = {
  id: string
  class?: string

  title?: string
  Head?: Component<{ column: ColumnDef<GItem, GCellExtra, GHeaderExtra> } & GHeaderExtra>
  getHeadProps?: () => GHeaderExtra

  format?: (
    item: GItem,
    index: number,
    column: ColumnDef<GItem, GCellExtra, GHeaderExtra>,
  ) => string | number
  Cell?: Component<{ item: GItem; column: ColumnDef<GItem, GCellExtra, GHeaderExtra> } & GCellExtra>
  getCellProps?: () => GCellExtra
}

export const defineColumn = <GItem, GCellExtra = object, GHeaderExtra = object>(
  col: ColumnDef<GItem, GCellExtra, GHeaderExtra>,
) => col
