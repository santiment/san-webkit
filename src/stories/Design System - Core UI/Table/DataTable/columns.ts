import type { Item } from '../utils.js'
import { usdFormatter } from '$lib/utils/formatters/index.js'

import { defineColumn, type ComponentExtraProps } from '$ui/core/Table/DataTable/types.js'
import CustomCell from './cells/CustomCell.svelte'
import Checkbox from './cells/Checkbox.svelte'
import CheckboxHead from './cells/CheckboxHead.svelte'

export type ColumnDeps = {
  selected: Set<number>
  checkAllSelected: () => boolean
  checkSelected: (item: Item) => boolean
  onSelect: (item: Item) => void
  onSelectAll: () => void
}

export const createColumns = (deps: ColumnDeps) => [
  defineColumn<
    Item,
    ComponentExtraProps<typeof Checkbox>,
    ComponentExtraProps<typeof CheckboxHead>
  >({
    id: 'checkbox',
    title: 'checkbox',
    Cell: Checkbox,
    Head: CheckboxHead,
    getCellProps: (item) => ({
      onSelect: deps.onSelect,
      checkSelected: deps.checkSelected,
    }),
    getHeadProps: () => ({
      onSelectAll: deps.onSelectAll,
      checkAllSelected: deps.checkAllSelected,
    }),
  }),
  defineColumn<Item>({
    id: 'count',
    title: '#',
    format: (_, index) => index + 1,
    class: 'w-px',
  }),
  defineColumn<Item>({
    id: 'title',
    title: 'Title',
    format: ({ title }) => title,
  }),
  defineColumn<Item>({
    id: 'price',
    title: 'Price',
    format: ({ price }) => usdFormatter(price),
  }),
  defineColumn<Item>({
    id: 'volume',
    title: 'Volume',
    format: (item) => item.volume,
  }),
  defineColumn<Item>({
    id: 'tokens',
    title: 'Tokens',
    Cell: CustomCell,
  }),
  defineColumn<Item>({
    id: 'empty',
  }),
]
