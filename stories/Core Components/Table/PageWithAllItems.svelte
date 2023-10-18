<script lang="ts">
  import Table from '@/ui/Table/Paged.svelte'
  import { columns, generateItems } from './mock'

  const items = generateItems(20)
</script>

<section>
  <Table {items} {columns} pageSize={5} rows={[5, 10, 20]} />
</section>
