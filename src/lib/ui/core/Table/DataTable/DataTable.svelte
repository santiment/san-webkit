<script
  lang="ts"
  generics="GItem extends Record<string, unknown>, GColumn extends BaseTableColumn<GItem>"
>
  import type { ComponentProps } from 'svelte'
  import type { BaseTableColumn } from './types.js'

  import Table from '../Table.svelte'
  import TableBody from '../TableBody.svelte'
  import TableCell from '../TableCell.svelte'
  import TableHead from '../TableHead.svelte'
  import TableHeader from '../TableHeader.svelte'
  import TableRow from '../TableRow.svelte'
  import Pagination from '../Pagination.svelte'

  type TProps = Partial<ComponentProps<typeof Pagination>> & {
    items: GItem[]
    columns: GColumn[]

    class?: string
    headerClass?: string
    bodyClass?: string
    headerRowClass?: string
    bodyRowClass?: string

    paged?: boolean
  }

  const {
    items,
    columns,
    class: className,
    headerClass,
    bodyClass,
    headerRowClass,
    bodyRowClass,
    totalItems,
    page = 1,
    pageSize = items.length,
    rows,
    onPageChange,
    paged,
  }: TProps = $props()

  const hasMoreItems = $derived(items.length !== totalItems)
  const itemsCount = $derived(totalItems ?? items.length)
  const pageOffset = $derived((page - 1) * pageSize)
  const pageEndOffset = $derived(pageOffset + pageSize)

  const pagedItems = $derived.by(() => {
    console.log({ paged, hasMoreItems, pageOffset, pageEndOffset })
    if (!paged) return items
    if (hasMoreItems) return items.slice(0, pageSize)

    return items.slice(pageOffset, pageEndOffset)
  })
</script>

<article class="flex w-full flex-col gap-4">
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
      {#each pagedItems as item, i}
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

  {#if paged}
    <Pagination {page} {pageSize} {rows} {onPageChange} totalItems={itemsCount} />
  {/if}
</article>
