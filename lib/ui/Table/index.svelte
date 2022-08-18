<script>import { getMinRows } from './utils';
import SorterArrows from './SorterArrows.svelte';
let className = '';
export { className as class };
export let columns;
export let items;
export let keyProp = undefined;
export let minRows = undefined;
export let sortedColumn = undefined;
export let sticky = false;
export let isLoading = false;
export let applySort = (sorter, items) => items.slice().sort(sorter);

const noop = _ => _;

const ascSort = (a, b) => sortedColumnAccessor(a) - sortedColumnAccessor(b);

const descSort = (a, b) => sortedColumnAccessor(b) - sortedColumnAccessor(a);

let currentSort = descSort;

$: rowsPadding = getMinRows(minRows, items.length, columns.length);

$: sortedColumnAccessor = (sortedColumn === null || sortedColumn === void 0 ? void 0 : sortedColumn.sortAccessor) || noop;

$: sortedItems = sortedColumn ? applySort(currentSort, items) : items;

function changeSort({
  currentTarget
}) {
  const i = currentTarget.dataset.i;
  const column = columns[+i];
  if (!column.sortAccessor) return;
  currentSort = sortedColumn === column && currentSort === descSort ? ascSort : descSort;
  sortedColumn = column;
}</script>

<table class={className} class:sticky-header={sticky}>
  <thead>
    <tr>
      {#each columns as column, i (column.title)}
        <th
          class={column.className || ''}
          class:sorted={sortedColumn === column}
          class:sortable={column.sortAccessor}
          data-i={i}
          on:click={changeSort}
          >{column.title}
          {#if sortedColumn === column}
            <SorterArrows isAscending={currentSort === ascSort} />
          {/if}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each sortedItems as item, i (keyProp ? item[keyProp] : item)}
      <tr>
        {#each columns as { title, className, format, Component } (title)}
          <td class={className || ''}>
            {#if Component}
              <svelte:component this={Component} {item} />
            {:else}
              {format(item, i)}
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

<style >:global(.cell-auto) {
  max-width: 0;
  width: 100%;
}
:global(.cell-min) {
  width: 1px;
}
:global(.cell-sticky) {
  position: sticky;
  left: 0;
}

table {
  width: 100%;
  border-spacing: 0;
  text-align: left;
  position: relative;
}
table :global(th),
table :global(td) {
  white-space: nowrap;
}
table :global(th) {
  font-weight: 500;
  padding: 5px 15px;
  color: var(--casper);
  background: var(--athens);
  border-bottom: 1px solid var(--porcelain);
}
table :global(td) {
  padding: 8px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}
table :global(tbody) :global(tr:hover) :global(td) {
  background: var(--athens);
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

.sticky-header :global(thead) {
  z-index: 1;
  position: sticky;
  top: var(--thead-top, 0);
}</style>
