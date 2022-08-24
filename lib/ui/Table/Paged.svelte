<script>
  import Svg from './../../ui/Svg/svelte'
  import Tooltip from './../../ui/Tooltip/svelte'
  import Table from './index.svelte'
  let className = ''
  export { className as class }
  export let items
  export let pageSize = 25
  export let page = 0
  export let rows = [10, 25, 50]
  let isPageSizeOpened = false

  $: pagesAmount = Math.ceil(items.length / pageSize)

  $: maxPage = pagesAmount - 1

  $: pageOffset = page * pageSize

  $: pageEndOffset = pageOffset + pageSize

  $: pageItems = items.slice(pageOffset, pageEndOffset)

  const applySort = (sorter) => items.slice().sort(sorter).slice(pageOffset, pageEndOffset)

  function onPageInput({ currentTarget }) {
    const value = +currentTarget.value
    if (!value || value < 1) page = 0
    else if (value > pagesAmount) page = maxPage
    else page = value - 1
    currentTarget.value = page + 1
  }

  function onPageSizeChange(size) {
    isPageSizeOpened = false
    pageSize = size
    page = 0
  }

  function onNextPage() {
    if (page >= pagesAmount) page = maxPage
    else page++
  }

  function onPrevPage() {
    if (page <= 1) page = 0
    else page--
  }
</script>

<div class={className}>
  <Table {...$$restProps} items={pageItems} {applySort} />
</div>

<div class="paged row v-center mrg-l mrg--t">
  <Tooltip on="click" position="top" bind:isOpened={isPageSizeOpened}>
    <div slot="trigger" class="rows btn-2 btn--s mrg-s mrg--r row v-center justify">
      {pageSize} rows <Svg id="arrow-down" w="8" h="5" />
    </div>

    <div slot="tooltip" class="pages column">
      {#each rows as row}
        <button
          class="btn-ghost"
          class:active={row === pageSize}
          on:click={() => onPageSizeChange(row)}>{row} rows</button
        >
      {/each}
    </div>
  </Tooltip>

  <span class="c-waterloo">Page</span>

  <input
    type="number"
    class="input txt-center mrg-l mrg--l mrg--r"
    min="1"
    value={page + 1}
    on:change={onPageInput}
    max={pagesAmount}
  />

  <span class="c-waterloo"
    >of {pagesAmount}
    <span class="mrg-s mrg--l" />
    ({items.length} rows total)</span
  >

  <div
    class="btn-2 btn--s row hv-center mrg-a mrg--l"
    class:disabled={page <= 0}
    on:click={onPrevPage}
  >
    Prev
    <Svg id="arrow-right" w="5" h="8" class="left-2iV9Kj mrg-m mrg--l" />
  </div>
  <div
    class="btn-2 btn--s row hv-center mrg-s mrg--l"
    class:disabled={page >= maxPage}
    on:click={onNextPage}
  >
    <Svg id="arrow-right" w="5" h="8" class="mrg-m mrg--r" />
    Next
  </div>
</div>

<style>
  :global(.left-2iV9Kj) {
    transform: rotate(180deg);
  }

  .rows {
    min-width: 97px;
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
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
