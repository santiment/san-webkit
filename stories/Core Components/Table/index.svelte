<script lang="ts">
  import type { Item } from './mock'

  import Table from '@/ui/Table/index.svelte'
  import { columns, generateItems } from './mock'

  const items = generateItems(5)

  function onItemClick(item: Item) {
    console.log(item)
  }
</script>

<Table {items} {columns} {onItemClick} keyProp="id" />
