<script>import { noop } from './../../utils';
import Table from './index.svelte';
import Pagination from './Pagination.svelte';
let className = '';
export { className as class };
export let items;
export let pagedClassName = '';
export let page = 0;
export let pageSize = 25;
export let rows = [10, 25, 50];
export let pageOffset = 0;
export let onPageChange = noop;
export let totalItems = undefined;
$: restProps = $$restProps;
$: hasMoreItems = totalItems !== undefined && totalItems !== items.length;
$: itemsCount = totalItems ?? items.length;
$: pageOffset = page * pageSize;
$: pageEndOffset = pageOffset + pageSize;
$: pageItems = hasMoreItems ? items.slice(0, pageSize) : items.slice(pageOffset, pageEndOffset);
const applySort = (sorter) => items.slice().sort(sorter).slice(pageOffset, pageEndOffset);
</script>

<!-- This element act as a scorll contrainer for a table -->
<paged-table class={className}>
  <Table {...restProps} items={pageItems} offset={pageOffset} {applySort}>
    <slot />
  </Table>
</paged-table>

<Pagination
  bind:page
  bind:pageSize
  class="mrg-l mrg--t {pagedClassName}"
  totalItems={itemsCount}
  {rows}
  {onPageChange}
/>

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
paged-table {
  display: block;
}</style>
