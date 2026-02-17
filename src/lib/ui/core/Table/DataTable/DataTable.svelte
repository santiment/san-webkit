<script lang="ts" generics="GItem extends any, GColumn extends ColumnDef<any, any, any>">
  import type { ComponentProps } from 'svelte'
  import type { ColumnDef } from './types.js'

  import { cn } from '$ui/utils/index.js'

  import Table from '../Table.svelte'
  import TableBody from '../TableBody.svelte'
  import TableCell from '../TableCell.svelte'
  import TableHead from '../TableHead.svelte'
  import TableHeader from '../TableHeader.svelte'
  import TableRow from '../TableRow.svelte'
  import Pagination from '../Pagination.svelte'

  type TProps = {
    items: GItem[]
    columns: GColumn[]

    wrapperClass?: string
    class?: string
    headerClass?: string
    bodyClass?: string
    headerRowClass?: string
    bodyRowClass?: string

    pagination?: ComponentProps<typeof Pagination>
  }

  const {
    items,
    columns,
    wrapperClass,
    class: className,
    headerClass,
    bodyClass,
    headerRowClass,
    bodyRowClass,
    pagination,
  }: TProps = $props()

  const itemsCount = $derived(pagination?.totalItems ?? items.length)

  const pagedItems = $derived.by(() => {
    if (!pagination) return items

    const { totalItems, page, pageSize } = pagination

    const hasMoreItems = items.length !== totalItems
    const pageOffset = (page - 1) * pageSize
    const pageEndOffset = pageOffset + pageSize

    if (hasMoreItems) return items.slice(0, pageSize)

    return items.slice(pageOffset, pageEndOffset)
  })
</script>

<article class={cn('flex w-full flex-col gap-4', wrapperClass)}>
  <Table class={className}>
    <TableHeader class={headerClass}>
      <TableRow class={headerRowClass}>
        {#each columns as column}
          {@const { id, title, Head, class: className } = column}

          {#if Head}
            <Head {column} />
          {:else}
            <TableHead class={className}>{title || id}</TableHead>
          {/if}
        {/each}
      </TableRow>
    </TableHeader>
    <TableBody class={bodyClass}>
      {#each pagedItems as item, i}
        <TableRow class={bodyRowClass}>
          {#each columns as column}
            {@const { id, Cell, format, class: className } = column}

            {#if Cell}
              <Cell {item} {column} />
            {:else if format}
              <TableCell class={className}>
                {format(item, i, column)}
              </TableCell>
            {:else}
              <TableCell>
                <pre>Declare <code>Cell</code> or <code>format</code> for column <code>{id}</code
                  ></pre>
              </TableCell>
            {/if}
          {/each}
        </TableRow>
      {/each}
    </TableBody>
  </Table>

  {#if pagination}
    {@const { page, pageSize, rows, onPageChange } = pagination}

    <Pagination
      class={pagination.class}
      {page}
      {pageSize}
      {rows}
      {onPageChange}
      totalItems={itemsCount}
    />
  {/if}
</article>
