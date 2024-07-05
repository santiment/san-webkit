<script>var _a;
import { noop } from './../../utils';
import { getMinRows } from './utils';
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
export let onSortClick = noop;
export let itemProps = null;
export let offset = 0;
export let onItemClick = noop;
export let sortDirection = 'desc';
export let preValidateSort = (() => { });
const ascSort = (a, b) => sortedColumnAccessor(a) - sortedColumnAccessor(b);
const descSort = (a, b) => sortedColumnAccessor(b) - sortedColumnAccessor(a);
$: currentSort = sortDirection === 'desc' ? descSort : ascSort;
$: rowsPadding = getMinRows(minRows, items.length, columns.length);
$: sortedColumnAccessor = (_a = sortedColumn === null || sortedColumn === void 0 ? void 0 : sortedColumn.sortAccessor) !== null && _a !== void 0 ? _a : (() => 0);
$: sortedItems = (sortedColumn === null || sortedColumn === void 0 ? void 0 : sortedColumn.sortAccessor) ? applySort(currentSort, items) : items;
function changeSort({ currentTarget }) {
    const i = currentTarget.dataset.i;
    const column = columns[+i];
    const validated = preValidateSort(column);
    if (validated === false)
        return;
    const { sortAccessor, isSortable = sortAccessor } = column;
    if (!isSortable)
        return;
    const isDescSort = sortedColumn === column ? currentSort === descSort : false;
    currentSort = isDescSort ? ascSort : descSort;
    sortedColumn = column;
    onSortClick(sortedColumn, !isDescSort, isDescSort ? 'asc' : 'desc');
}
</script>

<table class={className} class:sticky-header={sticky}>
  <thead>
    <tr>
      {#each columns as column, i (column.key ?? column.title)}
        {@const { className, title, sortAccessor, isSortable = sortAccessor, Header } = column}
        <th
          class="row v-center {className || ''}"
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
        {#each columns as column (column.key ?? column.title)}
          {@const index = i + offset}
          {@const { className, valueKey, componentProps } = column}
          {@const isValidValueKey = (valueKey ?? null) !== null}
          {@const value = isValidValueKey ? item[valueKey] : undefined}

          <td class={className || ''}>
            {#if isValidValueKey && value === undefined}
              <div class="skeleton" />
            {:else if column.Component}
              <svelte:component
                this={column.Component}
                {item}
                {value}
                {column}
                {index}
                {...itemProps}
                {...componentProps}
              />
            {:else if column.format}
              {column.format(item, index, value)}
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

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
:global(.cell-auto) {
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
:global(.cell-visible) {
  overflow: visible !important;
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
  z-index: var(--thead-z-index, 2);
  position: sticky;
  top: var(--thead-top, 0);
}</style>
