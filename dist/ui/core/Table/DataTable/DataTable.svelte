<script
  lang="ts"
  generics="GItem extends Record<string, unknown>, GColumn extends BaseTableColumn<GItem>"
>
  import type { BaseTableColumn } from './types.js'

  import Table from '../Table.svelte'
  import TableBody from '../TableBody.svelte'
  import TableCell from '../TableCell.svelte'
  import TableHead from '../TableHead.svelte'
  import TableHeader from '../TableHeader.svelte'
  import TableRow from '../TableRow.svelte'

  type TProps = {
    items: GItem[]
    columns: GColumn[]

    class?: string
    headerClass?: string
    bodyClass?: string
    headerRowClass?: string
    bodyRowClass?: string
  }

  const {
    items,
    columns,
    class: className,
    headerClass,
    bodyClass,
    headerRowClass,
    bodyRowClass,
  }: TProps = $props()
</script>

<Table class={className}>
  <TableHeader class={headerClass}>
    <TableRow class={headerRowClass}>
      {#each columns as { title, Head, class: className }}
        {#if Head}
          <Head />
        {:else}
          <TableHead class={className}>{title}</TableHead>
        {/if}
      {/each}
    </TableRow>
  </TableHeader>
  <TableBody class={bodyClass}>
    {#each items as item, i}
      <TableRow class={bodyRowClass}>
        {#each columns as column}
          {#if column.Cell}
            <column.Cell {item} />
          {:else}
            <TableCell class={column.class}>
              {column.format(item, i)}
            </TableCell>
          {/if}
        {/each}
      </TableRow>
    {/each}
  </TableBody>
</Table>
