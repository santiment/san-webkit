<script lang="ts">
  import DataTable from './DataTable.svelte'

  import { generateItems } from '../utils.js'

  const items = generateItems(10)
</script>

<main class="flex h-screen items-start justify-center px-10 py-5">
  <DataTable {items} />
</main>
