<script lang="ts">
  import { DataTable } from '$ui/core/Table/index.js'
  import { generateItems } from '../utils.js'
  import { columns } from './columns.js'

  const items = generateItems(10)
</script>

<main class="flex h-screen items-start justify-center px-10 py-5">
  <DataTable {items} {columns} />
</main>
