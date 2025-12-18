import type { BaseTableColumn } from '$ui/core/Table/index.js'

export type Item = {
  slug: string
  name: string
  price: number
  volume: number
}

export const columns: BaseTableColumn<Item> = [
  {
    title,
  },
]
