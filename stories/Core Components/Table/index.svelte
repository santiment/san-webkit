<script>
  import Table from '@/ui/Table/index.svelte'
  import { columns, generateItems } from './mock'

  const items = generateItems(5)
</script>

<Table {items} {columns} keyProp="id" />
