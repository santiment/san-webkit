import { usdFormatter } from '$ui/app/Chart/ctx/formatters.js'
import type { BaseTableColumn } from '$ui/core/Table/DataTable/types.js'
import CustomCell from './CustomCell.svelte'
import type { Item } from '../utils.js'

export const columns: BaseTableColumn<Item>[] = [
  {
    title: '#',
    format: (_, index) => index + 1,
  },
  {
    title: 'Title',
    format: ({ title }) => title,
  },
  {
    title: 'Price',
    format: ({ price }) => usdFormatter(price),
  },
  {
    title: 'Tokens',
    Cell: CustomCell,
  },
]
