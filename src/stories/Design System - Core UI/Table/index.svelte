<script lang="ts">
  import { usdFormatter } from '$ui/app/Chart/ctx/formatters.js'
  import { Table, TableBody, TableCell, TableHeader, TableRow } from '$ui/core/Table/index.js'
  import TableHead from '$ui/core/Table/TableHead.svelte'

  type TData = {
    name: string
    price: number
    count: number
  }

  const DATA: TData[] = [
    { name: 'bitcoin', price: 100_000, count: 10 },
    { name: 'ethereum', price: 3000, count: 200 },
    { name: 'tether', price: 1, count: 123 },
    { name: 'doge', price: 0.15, count: 14310 },
  ]
</script>

<div class="flex h-screen items-start justify-center px-10 py-5">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>#</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Count</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {#each DATA as { name, price, count }, i}
        <TableRow>
          <TableCell>{i + 1}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{usdFormatter(price)}</TableCell>
          <TableCell>{count}</TableCell>
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</div>
