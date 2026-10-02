import type { Item } from '../utils.js'
import { usdFormatter } from '$lib/utils/formatters/index.js'

import {
  defineColumn,
  type ColumnDef,
  type ComponentExtraProps,
} from '$ui/core/Table/DataTable/types.js'
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

export const createColumns = (deps: ColumnDeps) =>
  [
    defineColumn<
      Item,
      ComponentExtraProps<typeof Checkbox>,
      ComponentExtraProps<typeof CheckboxHead>
    >({
      id: 'checkbox',
      title: 'checkbox',
      Cell: Checkbox,
      Head: CheckboxHead,
      getCellProps: () => ({
        onSelect: deps.onSelect,
        checkSelected: deps.checkSelected,
      }),
      getHeadProps: () => ({
        onSelectAll: deps.onSelectAll,
        checkAllSelected: deps.checkAllSelected,
      }),
    }),
    {
      id: 'index',
      title: '#',
      format: (_, index) => index + 1,
      class: 'w-px',
    },
    {
      id: 'title',
      title: 'Title',
      format: ({ title }) => title,
    },
    {
      id: 'price',
      title: 'Price',
      format: ({ price }) => usdFormatter(price),
      isSortable: true,
      sortAccessor: ({ price }) => price,
    },
    {
      id: 'volume',
      title: 'Volume',
      format: (item) => item.volume,
      isSortable: true,
      sortAccessor: ({ volume }) => volume,
    },
    {
      id: 'tokens',
      title: 'Tokens',
      Cell: CustomCell,
    },
    {
      id: 'empty',
    },
  ] satisfies ColumnDef<Item, any, any>[]
