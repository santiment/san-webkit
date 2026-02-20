<script lang="ts" generics="GItem extends any, GColumn extends ColumnDef<any, any, any>">
  import type { ComponentProps } from 'svelte'
  import type { ColumnDef, SortDirection } from './types.js'

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

    minRows?: number

    wrapperClass?: string
    class?: string
    headerClass?: string
    bodyClass?: string
    headerRowClass?: string
    bodyRowClass?: string

    pagination?: ComponentProps<typeof Pagination>

    sortColumn?: GColumn
    sortDirection?: SortDirection
    preValidateSort?: (column: GColumn) => boolean
    onSort?: (column: GColumn, direction: SortDirection) => void
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
    minRows = pagination?.pageSize,
    preValidateSort,
    onSort,
  }: TProps = $props()

  let sortColumn = $state<GColumn | null>(null)
  let sortDirection = $state<SortDirection>('DESC')

  let rowHeight = $state(0)

  const sortedItems = $derived.by(() => {
    if (!sortColumn) return items
    const { sortAccessor } = sortColumn
    if (!sortAccessor) return items

    return items.toSorted((a, b) =>
      sortDirection === 'ASC'
        ? sortAccessor(a) - sortAccessor(b)
        : sortAccessor(b) - sortAccessor(a),
    )
  })

  const itemsCount = $derived(pagination?.totalItems ?? items.length)

  const pagedItems = $derived.by(() => {
    if (!pagination) return sortedItems

    const { totalItems, page, pageSize } = pagination

    const hasMoreItems = items.length !== totalItems
    const pageOffset = (page - 1) * pageSize
    const pageEndOffset = pageOffset + pageSize

    if (hasMoreItems) return sortedItems.slice(0, pageSize)

    return sortedItems.slice(pageOffset, pageEndOffset)
  })

  const padRowsAmount = $derived(minRows ? minRows - pagedItems.length : 0)

  function setSort(column: GColumn) {
    if (!column.isSortable) return
    applySort(column)
    onSort?.(column, sortDirection)
  }

  function applySort(column: GColumn) {
    const isValid = preValidateSort?.(column) ?? true
    if (!isValid) return

    if (column.id !== sortColumn?.id) {
      sortDirection = 'DESC'
      sortColumn = column
    } else {
      sortDirection = sortDirection === 'DESC' ? 'ASC' : 'DESC'
    }
  }
</script>

<article class={cn('flex w-full flex-col gap-4', wrapperClass)}>
  <Table class={className}>
    <TableHeader class={headerClass}>
      <TableRow class={headerRowClass}>
        {#each columns as column}
          {@const { id, title, Head, class: className, getHeadProps, isSortable } = column}
          {@const isSorted = sortColumn?.id === column.id}

          {#if Head}
            <Head {column} {...getHeadProps?.()} />
          {:else}
            <TableHead
              class={className}
              onclick={() => setSort(column)}
              sortDirection={isSorted ? sortDirection : undefined}
              {isSortable}
            >
              {title || id}
            </TableHead>
          {/if}
        {/each}
      </TableRow>
    </TableHeader>
    <TableBody class={bodyClass}>
      {#each pagedItems as item, i}
        <TableRow bind:height={rowHeight} class={bodyRowClass}>
          {#each columns as column}
            {@const { id, Cell, format, class: className, getCellProps } = column}

            {#if Cell}
              <Cell {item} {column} {...getCellProps?.(item)} />
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

      {#each { length: padRowsAmount } as _}
        <TableRow style="height: {rowHeight}px;">
          {#each columns as _}
            <TableCell noStyles />
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
