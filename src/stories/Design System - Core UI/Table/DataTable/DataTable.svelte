<script lang="ts">
  import { DataTable } from '$ui/core/Table/index.js'
  import type { ComponentProps } from 'svelte'
  import { type Item } from '../utils.js'
  import { createColumns } from './columns.js'
  import { SvelteSet } from 'svelte/reactivity'

  type TProps = {
    items: Item[]
    pagination?: ComponentProps<typeof DataTable>['pagination']
  }

  const { items, pagination }: TProps = $props()

  let selectedRows = $state(new SvelteSet<number>())
  const isAllSelected = $derived(selectedRows.size === items.length)

  const columns = $derived(
    createColumns({
      selected: selectedRows,
      checkAllSelected: () => isAllSelected,
      checkSelected: (item) => selectedRows.has(item.id),
      onSelect,
      onSelectAll,
    }),
  )

  function onSelect(item: Item) {
    if (selectedRows.has(item.id)) {
      selectedRows.delete(item.id)
    } else {
      selectedRows.add(item.id)
    }
  }

  function onSelectAll() {
    if (isAllSelected) {
      selectedRows.clear()
    } else {
      selectedRows = new SvelteSet(items.map(({ id }) => id))
    }
  }
</script>

<main class="flex h-screen items-start justify-center px-10 py-5">
  <DataTable {items} {columns} {pagination} />
</main>
