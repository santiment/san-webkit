<script>import { noop } from './../../utils';
import Svg from '../Svg/svelte';
import Tooltip from '../Tooltip';
let className = '';
export { className as class };
export let page = 0;
export let pageSize = 25;
export let rows = [10, 25, 50];
export let onPageChange = noop;
export let totalItems;
let isPageSizeOpened = false;
$: if (process.env.IS_DEV_MODE) {
    if (rows.length > 0 && !rows.includes(pageSize)) {
        console.error('[pageSize] value should be present in [rows] array or it should be empty');
    }
}
$: pagesAmount = Math.ceil(totalItems / pageSize);
$: maxPage = pagesAmount - 1;
const onPageInput = ({ currentTarget }) => {
    const value = +currentTarget.value;
    if (!value || value < 1)
        page = 0;
    else if (value > pagesAmount)
        page = maxPage;
    else
        page = value - 1;
    currentTarget.value = `${page + 1}`;
    onPageChange(page, pageSize);
};
function onPageSizeChange(size) {
    isPageSizeOpened = false;
    pageSize = size;
    page = 0;
    onPageChange(page, size);
}
function onNextPage() {
    if (page >= pagesAmount)
        page = maxPage;
    else
        page++;
    onPageChange(page, pageSize);
}
function onPrevPage() {
    if (page <= 1)
        page = 0;
    else
        page--;
    onPageChange(page, pageSize);
}
</script>

<section class="paged row v-center gap-l nowrap {className}">
  {#if rows.length > 1}
    <Tooltip on="click" position="top" bind:isOpened={isPageSizeOpened} let:trigger>
      <button use:trigger class="rows-trigger btn-2 btn--s row v-center gap-m">
        {pageSize} rows
        <Svg id="arrow-down" w="8" h="5" />
      </button>

      <tooltip slot="tooltip" class="pages column">
        {#each rows as row}
          <button
            class="btn-ghost"
            class:active={row === pageSize}
            on:click={() => onPageSizeChange(row)}>{row} rows</button
          >
        {/each}
      </tooltip>
    </Tooltip>
  {/if}

  <page-indicator class="row v-center gap-s c-waterloo">
    <span>Page</span>

    <input
      type="number"
      class="input txt-center"
      min="1"
      value={page + 1}
      on:change={onPageInput}
      max={pagesAmount}
    />

    <pages-amount>
      of {pagesAmount}
      <total-items class="mrg-s mrg--l">({totalItems} rows total)</total-items>
    </pages-amount>
  </page-indicator>

  <nav-buttons class="row mrg-a mrg--l">
    <button class="btn-2 btn--s row hv-center" class:disabled={page <= 0} on:click={onPrevPage}>
      Prev
      <Svg id="arrow-right" w="5" h="8" class="left-O2RuL0 mrg-m mrg--l" />
    </button>

    <button
      class="btn-2 btn--s row hv-center mrg-s mrg--l"
      class:disabled={page >= maxPage}
      on:click={onNextPage}
    >
      <Svg id="arrow-right" w="5" h="8" class="mrg-m mrg--r" />
      Next
    </button>
  </nav-buttons>
</section>

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
:global(.left-O2RuL0) {
  transform: rotate(180deg);
}

.rows-trigger {
  --h-padding: 13px;
}

.paged {
  --fill: var(--waterloo);
}

.pages {
  padding: 8px;
}

.active {
  --color: var(--green);
}

input {
  width: 45px;
  appearance: textfield;
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

:global(body.phone-xs) total-items,
:global(body.phone-xs) .rows-trigger {
  display: none;
}</style>
