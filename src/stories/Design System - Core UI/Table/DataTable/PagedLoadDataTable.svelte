<script lang="ts">
  import { DataTable } from '$ui/core/Table/index.js'
  import { generateItems } from '../utils.js'
  import { columns } from './columns.js'

  let page = $state(1)
  let pageSize = $state(10)
  let items = $state(generateItems(10))
</script>

<main class="flex h-screen items-start justify-center px-10 py-5">
  <DataTable
    {page}
    {items}
    {columns}
    {pageSize}
    totalItems={60}
    onPageChange={(p, size) => {
      page = p
      pageSize = size
      items = generateItems(size)
    }}
    paged
  />
</main>
