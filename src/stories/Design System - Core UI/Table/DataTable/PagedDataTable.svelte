<script lang="ts">
  import DataTable from './DataTable.svelte'
  import { generateItems } from '../utils.js'

  const TOTAL_ITEMS = 55
  const items = generateItems(TOTAL_ITEMS)

  let page = $state(1)
  let pageSize = $state(10)
</script>

<main class="flex h-screen items-start justify-center px-10 py-5">
  <DataTable
    {items}
    pagination={{
      page,
      pageSize,
      totalItems: TOTAL_ITEMS,
      onPageChange: (p, size) => {
        page = p
        pageSize = size
      },
    }}
  />
</main>
