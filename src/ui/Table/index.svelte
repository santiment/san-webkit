<script lang="ts">
  import type { Sorter } from './utils'

  import { noop } from '@/utils'
  import { getMinRows } from './utils'
  import SorterArrows from './SorterArrows.svelte'

  type Item = $$Generic<SAN.Table.Item>

  let className = ''
  export { className as class }
  export let columns: SAN.Table.Column<Item>[]
  export let items: Item[]
  export let keyProp: undefined | string = undefined
  export let minRows: undefined | number = undefined
  export let sortedColumn: undefined | SAN.Table.Column<Item> = undefined
  export let sticky = false
  export let isLoading = false
  export let applySort = (sorter: Sorter<Item>, items: Item[]) => items.slice().sort(sorter)
  export let onSortClick: (
    column: SAN.Table.Column<Item>,
    isDescSort: boolean,
    sortDir: 'desc' | 'asc',
  ) => void = noop
  export let itemProps: null | { [key: string]: unknown } = null
  export let offset = 0
  export let onItemClick: (item: SAN.Table.Item) => void = noop
  export let sortDirection = 'desc' as 'desc' | 'asc'

  const ascSort: Sorter<Item> = (a, b) => sortedColumnAccessor(a) - sortedColumnAccessor(b)
  const descSort: Sorter<Item> = (a, b) => sortedColumnAccessor(b) - sortedColumnAccessor(a)

  $: currentSort = sortDirection === 'desc' ? descSort : ascSort
  $: rowsPadding = getMinRows(minRows, items.length, columns.length)
  $: sortedColumnAccessor = sortedColumn?.sortAccessor ?? (() => 0)
  $: sortedItems = sortedColumn?.sortAccessor ? applySort(currentSort, items) : items

  function changeSort({ currentTarget }: MouseEvent) {
    const i = (currentTarget as HTMLElement).dataset.i as string
    const column = columns[+i]

    const { sortAccessor, isSortable = sortAccessor } = column
    if (!isSortable) return

    const isDescSort = sortedColumn === column ? currentSort === descSort : false
    currentSort = isDescSort ? ascSort : descSort
    sortedColumn = column
    onSortClick(sortedColumn, !isDescSort, isDescSort ? 'asc' : 'desc')
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
      <tr on:click={() => onItemClick(item)}>
        {#each columns as column (column.title)}
          {@const { className, valueKey } = column}
          {@const isValidValueKey = (valueKey ?? null) !== null}
          {@const value = isValidValueKey ? item[valueKey] : undefined}

          <td class={className || ''}>
            {#if isValidValueKey && value === undefined}
              <div class="skeleton" />
            {:else if 'Component' in column}
              <svelte:component this={column.Component} {item} {value} {column} {...itemProps} />
            {:else if 'format' in column}
              {column.format(item, i + offset, value)}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
    {#if rowsPadding}
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html rowsPadding}
    {/if}
  </tbody>
  <caption>
    {#if isLoading}
      <div class="loader c-casper">Loading...</div>
    {/if}

    <slot />
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

    .cell-visible {
      overflow: visible !important;
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
