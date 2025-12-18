<script lang="ts">
  import { DataTable } from '$ui/core/Table/index.js'
  import { generateItems } from '../utils.js'
  import { columns } from './columns.js'

  const TOTAL_ITEMS = 55
  const items = generateItems(TOTAL_ITEMS)

  let page = $state(1)
  let pageSize = $state(10)
</script>

<main class="flex h-screen items-start justify-center px-10 py-5">
  <DataTable
    {items}
    {columns}
    {page}
    {pageSize}
    totalItems={TOTAL_ITEMS}
    onPageChange={(p, size) => {
      page = p
      pageSize = size
    }}
    paged
  />
</main>
