<script lang="ts">
  import { usdFormatter } from '$lib/utils/formatters/index.js'
  import { Table, TableBody, TableCell, TableHeader, TableRow } from '$ui/core/Table/index.js'
  import TableHead from '$ui/core/Table/TableHead.svelte'
  import { generateItems, type Item } from './utils.js'

  const DATA: Item[] = generateItems(100)
</script>

<div class="flex items-start justify-center px-10 py-5">
  <Table>
    <TableHeader sticky>
      <TableRow>
        <TableHead class="w-px">#</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Count</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {#each DATA as { id, title, price, volume }, i}
        <TableRow>
          <TableCell class="w-px">{id + 1}</TableCell>
          <TableCell>{title}</TableCell>
          <TableCell>{usdFormatter(price)}</TableCell>
          <TableCell>{volume}</TableCell>
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</div>
