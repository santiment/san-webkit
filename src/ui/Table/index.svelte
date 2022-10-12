<script lang="ts">
  import type { Sorter, SortAccessor } from './utils'

  import { noop } from '@/utils'
  import { getMinRows } from './utils'
  import SorterArrows from './SorterArrows.svelte'

  let className = ''
  export { className as class }
  export let columns: SAN.Table.Column[]
  export let items: SAN.Table.Item[]
  export let keyProp: undefined | string = undefined
  export let minRows: undefined | number = undefined
  export let sortedColumn: undefined | SAN.Table.Column = undefined
  export let sticky = false
  export let isLoading = false
  export let applySort = (sorter, items) => items.slice().sort(sorter)
  export let onSortClick = noop as (column: SAN.Table.Column, isAscSort: boolean) => void
  export let itemProps: { [key: string]: any }

  const ascSort: Sorter = (a, b) => sortedColumnAccessor(a) - sortedColumnAccessor(b)
  const descSort: Sorter = (a, b) => sortedColumnAccessor(b) - sortedColumnAccessor(a)

  let currentSort = descSort

  $: rowsPadding = getMinRows(minRows, items.length, columns.length)
  $: sortedColumnAccessor = sortedColumn?.sortAccessor as SortAccessor
  $: sortedItems = sortedColumn && sortedColumnAccessor ? applySort(currentSort, items) : items

  function changeSort({ currentTarget }: MouseEvent) {
    const i = (currentTarget as HTMLElement).dataset.i as string
    const column = columns[+i]

    const { sortAccessor, isSortable = sortAccessor } = column
    if (!isSortable) return

    const isAscSort = sortedColumn === column && currentSort === descSort
    currentSort = isAscSort ? ascSort : descSort
    sortedColumn = column
    onSortClick(sortedColumn, isAscSort)
  }
</script>

<table class={className} class:sticky-header={sticky}>
  <thead>
    <tr>
      {#each columns as column, i (column.title)}
        {@const { className, title, sortAccessor, isSortable = sortAccessor, Header } = column}
        <th
          class={className || ''}
          class:sorted={sortedColumn === column}
          class:sortable={isSortable}
          data-i={i}
          on:click={changeSort}
        >
          {#if Header}
            <svelte:component this={Header} {...itemProps} />
          {:else}
            {title}
            {#if sortedColumn === column}
              <SorterArrows isAscending={currentSort === ascSort} />
            {/if}
          {/if}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each sortedItems as item, i (keyProp ? item[keyProp] : item)}
      <tr>
        {#each columns as { title, className, format, Component, valueKey } (title)}
          {@const value = item[valueKey]}
          <td class={className || ''}>
            {#if valueKey && value === undefined}
              <div class="skeleton" />
            {:else if Component}
              <svelte:component this={Component} {item} {value} {...itemProps} />
            {:else}
              {format(item, i, value)}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
    {#if rowsPadding}
      {@html rowsPadding}
    {/if}
  </tbody>
  <caption>
    {#if isLoading}
      <div class="loader c-casper">Loading...</div>
    {/if}
  </caption>
</table>

<style lang="scss">
  :global {
    .cell-auto {
      max-width: 0;
      width: 100%;
    }

    .cell-min {
      width: 1px;
    }

    .cell-sticky {
      position: sticky;
      left: 0;
    }
  }

  table {
    width: 100%;
    border-spacing: 0;
    text-align: left;
    position: relative;

    :global {
      th,
      td {
        white-space: nowrap;
      }

      th {
        font-weight: 500;
        padding: 5px 15px;
        color: var(--casper);
        background: var(--athens);
        border-bottom: 1px solid var(--porcelain);
      }

      td {
        padding: 8px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      tbody tr:hover td {
        background: var(--athens);
      }
    }
  }

  .loader {
    padding: 10px 20px;
    background: var(--athens);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 4px;
  }

  .sortable {
    cursor: pointer;
    --sorter-up: var(--mystic);
    --sorter-down: var(--waterloo);
  }
  .sorted {
    color: var(--black);
    user-select: none;
  }

  .sticky-header :global {
    thead {
      z-index: var(--thead-z-index, 2);
      position: sticky;
      top: var(--thead-top, 0);
    }
  }
</style>
