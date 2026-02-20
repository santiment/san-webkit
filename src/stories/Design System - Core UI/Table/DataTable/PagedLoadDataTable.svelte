<script lang="ts">
  import DataTable from './DataTable.svelte'
  import { generateItems } from '../utils.js'
  import type { ColumnDef } from '$ui/core/Table/index.js'
  import type { SortDirection } from '$ui/core/Table/DataTable/types.js'

  let page = $state(1)
  let pageSize = $state(10)
  let items = $state(generateItems(10))

  let sortColumn = $state<ColumnDef<any>>()
  let sortDirection = $state<SortDirection>('DESC')

  function loadItems(count: number) {
    items = generateItems(count)
  }

  function onSortChange(column: ColumnDef<any>, sortDirection: SortDirection) {
    sortColumn = column

    const newItems = generateItems(pageSize)

    const { sortAccessor } = column
    if (!sortAccessor) {
      items = newItems
      return
    }

    items = newItems.toSorted((a, b) =>
      sortDirection === 'ASC'
        ? sortAccessor(a) - sortAccessor(b)
        : sortAccessor(b) - sortAccessor(a),
    )
  }
</script>

<main class="flex h-screen items-start justify-center px-10 py-5">
  <DataTable
    {items}
    {sortColumn}
    {sortDirection}
    onSort={onSortChange}
    pagination={{
      page,
      pageSize,
      totalItems: 60,
      onPageChange: (p, size) => {
        page = p
        pageSize = size
        loadItems(size)
      },
    }}
  />
</main>
