<script>import { trackNftBattlePlayersTablePagination } from './../../../analytics/events/nftbattle';
import Table from './../../../ui/Table/Paged.svelte';
import { querySignals } from './api';
import { COLUMNS } from './columns';
const pageSize = 5;
let page = 0;
let totalCount = 0;
let pageOffset = 0;
// @ts-expect-error
$: items = (pageOffset, []);
$: emptyData = getEmptyData(totalCount);
$: pagedItems = getPagedData(items, emptyData, pageOffset);
$: getSignals(page);
function getSignals(queryPage) {
    querySignals(queryPage, pageSize).then(({ data, total }) => {
        if (page !== queryPage)
            return;
        totalCount = total;
        items = data;
    });
}
function onPageChange(newPage) {
    trackNftBattlePlayersTablePagination(newPage, newPage > page ? 'next' : 'prev');
    page = newPage;
}
function getEmptyData(totalCount) {
    const empty = new Array(totalCount);
    for (let i = 0; i < totalCount; i++)
        empty[i] = empty[i] || {};
    return empty;
}
function getPagedData(data, empty, pageOffset) {
    return empty
        .slice(0, pageOffset)
        .concat(data)
        .concat(empty.slice(data.length + pageOffset));
}
</script>

<h2 class="h4 txt-m mrg-xl mrg--b">Players</h2>

<p class="mrg-l mrg--b">Here are the players who have entered the battle.</p>

<Table
  class="table-KXvzzS border"
  items={pagedItems}
  columns={COLUMNS}
  rows={[]}
  {pageSize}
  {onPageChange}
  minRows={pageSize}
  bind:pageOffset
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
:global(.table-KXvzzS) :global(.skeleton) {
  height: 20px;
  width: 100px;
}
:global(.table-KXvzzS) :global(th) {
  border: none !important;
}
:global(.table-KXvzzS) :global(td) {
  height: 37px;
  border-top: 1px solid var(--porcelain);
}</style>
