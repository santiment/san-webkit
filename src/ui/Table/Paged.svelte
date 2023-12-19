<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import type { Sorter } from './utils'

  import { noop } from '@/utils'
  import Table from './index.svelte'
  import Pagination from './Pagination.svelte'

  type Item = $$Generic<SAN.Table.Item>
  type TableProps = ComponentProps<Table<Item>>
  type PaginationProps = ComponentProps<Pagination>

  interface $$Props extends TableProps, Omit<PaginationProps, 'class' | 'totalItems'> {
    pagedClassName?: PaginationProps['class']
    totalItems?: PaginationProps['totalItems']
    pageOffset?: number
  }

  type StrictProps = Required<$$Props>

  let className: StrictProps['class'] = ''
  export { className as class }
  export let items: StrictProps['items']

  export let pagedClassName: StrictProps['pagedClassName'] = ''
  export let page: StrictProps['page'] = 0
  export let pageSize: StrictProps['pageSize'] = 25
  export let rows: StrictProps['rows'] = [10, 25, 50]
  export let pageOffset: StrictProps['pageOffset'] = 0
  export let onPageChange: StrictProps['onPageChange'] = noop
  export let totalItems: $$Props['totalItems'] = undefined

  $: restProps = $$restProps as Omit<TableProps, 'class' | 'items'>

  $: hasMoreItems = totalItems !== undefined && totalItems !== items.length
  $: itemsCount = totalItems ?? items.length
  $: pageOffset = page * pageSize
  $: pageEndOffset = pageOffset + pageSize
  $: pageItems = hasMoreItems ? items.slice(0, pageSize) : items.slice(pageOffset, pageEndOffset)

  const applySort = (sorter: Sorter<Item>) =>
    items.slice().sort(sorter).slice(pageOffset, pageEndOffset)
</script>

<!-- This element act as a scorll contrainer for a table -->
<paged-table class={className}>
  <Table {...restProps} items={pageItems} offset={pageOffset} {applySort}>
    <slot />
  </Table>
</paged-table>

<Pagination
  bind:page
  bind:pageSize
  class="mrg-l mrg--t {pagedClassName}"
  totalItems={itemsCount}
  {rows}
  {onPageChange}
/>

<style lang="scss">
  paged-table {
    display: block;
  }
</style>
