<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import type { Sorter } from './utils'

  import { noop } from '@/utils'
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip'
  import Table from './index.svelte'

  type Item = $$Generic<SAN.Table.Item>
  type TableProps = ComponentProps<Table<Item>>

  interface $$Props extends TableProps {
    pagedClassName?: string
    pageSize?: number
    page?: number
    rows?: number[]
    pageOffset?: number
    onPageChange?: (page: number, pageSize?: number) => void
  }

  type RestProps = Omit<TableProps, 'class' | 'items'>

  type StrictProps = Required<$$Props>

  let className: StrictProps['class'] = ''
  export { className as class }
  export let items: StrictProps['items']

  export let pagedClassName: StrictProps['pagedClassName'] = ''
  export let page: StrictProps['page'] = 0
  export let pageSize: StrictProps['pageSize'] = 25
  export let rows: StrictProps['rows'] = [10, 25, 50]
  export let pageOffset: StrictProps['pageOffset'] = 0
  export let onPageChange: StrictProps['onPageChange'] = noop

  let isPageSizeOpened = false

  $: restProps = $$restProps as RestProps
  $: pagesAmount = Math.ceil(items.length / pageSize)
  $: maxPage = pagesAmount - 1
  $: pageOffset = page * pageSize
  $: pageEndOffset = pageOffset + pageSize
  $: pageItems = items.slice(pageOffset, pageEndOffset)

  $: if (rows.length > 0 && !rows.includes(pageSize)) {
    console.error('[pageSize] value should be present in [rows] array or it should be empty')
  }

  const applySort = (sorter: Sorter<Item>) =>
    items.slice().sort(sorter).slice(pageOffset, pageEndOffset)

  function onPageInput({ currentTarget }) {
    const value = +currentTarget.value

    if (!value || value < 1) page = 0
    else if (value > pagesAmount) page = maxPage
    else page = value - 1

    currentTarget.value = page + 1
    onPageChange(page)
  }

  function onPageSizeChange(size: number) {
    isPageSizeOpened = false
    pageSize = size
    page = 0
    onPageChange(page, size)
  }

  function onNextPage() {
    if (page >= pagesAmount) page = maxPage
    else page++
    onPageChange(page)
  }

  function onPrevPage() {
    if (page <= 1) page = 0
    else page--
    onPageChange(page)
  }
</script>

<Table {...restProps} class={className} items={pageItems} offset={pageOffset} {applySort}>
  <slot />
</Table>

<section class="paged row v-center gap-l mrg-l mrg--t single-line {pagedClassName}">
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

    <span>of {pagesAmount}</span>
  </page-indicator>

  <nav-buttons class="row mrg-a mrg--l">
    <button class="btn-2 btn--s row hv-center" class:disabled={page <= 0} on:click={onPrevPage}>
      Prev
      <Svg id="arrow-right" w="5" h="8" class="$style.left mrg-m mrg--l" />
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

<style lang="scss">
  .left {
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

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @include dac(phone-xs) {
    .rows-trigger {
      display: none;
    }
  }
</style>
