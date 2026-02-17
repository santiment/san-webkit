import type { Item } from '../utils.js'
import { usdFormatter } from '$lib/utils/formatters/index.js'

import { defineColumn } from '$ui/core/Table/DataTable/types.js'
import CustomCell from './cells/CustomCell.svelte'
import Checkbox from './cells/Checkbox.svelte'
import CheckboxHead from './cells/CheckboxHead.svelte'

export const columns = [
  defineColumn<Item, { onSelect: () => void }, { onSelect: () => void }>({
    id: 'checkbox',
    title: 'checkbox',
    Cell: Checkbox,
    Head: CheckboxHead,
    getCellProps: () => ({
      onSelect: () => {},
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
