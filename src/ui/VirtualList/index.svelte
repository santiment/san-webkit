<script lang="ts" context="module">
  export { Controller } from './ctx'
</script>

<script lang="ts">
  import { tick } from 'svelte'
  import { getControllerCtx } from './ctx'
  import { noop } from '@/utils'

  type T = $$Generic

  let className = ''
  export { className as class }
  export let itemHeight: number
  export let items = [] as T[]
  export let renderAmount = 10
  export let maxFluidHeight = 0
  export let bufferItemsAmount = 3
  export let pageSize = renderAmount
  export let pageOffset = 5
  export let preloadPage = noop as (page: number, pages: [number, number]) => void

  Object.assign(getControllerCtx() || {}, { scrollTo })

  const pages = [0, 0] as [number, number]

  let viewportNode = null as null | HTMLElement
  let itemsNode = null as null | HTMLElement
  let viewportStyle = ''

  let viewportHeight = 0
  let itemsOffsetTop = 0

  let start = 0
  let end = renderAmount

  if (process.env.IS_DEV_MODE) {
    if (!itemHeight) throw new Error('VirtualList should have itemHeight prop specified to work')
  }

  $: padding = getPadding(itemsNode)
  $: scrollHeight = itemHeight * items.length + padding
  $: bufferHeight = itemHeight * bufferItemsAmount

  $: maxScroll = scrollHeight < viewportHeight ? 0 : scrollHeight - viewportHeight

  $: items && recalculate(viewportNode)
  $: renderedItems = items.slice(start, end)

  const normalize = (value: number) => (value > 0 ? value : 0)

  function getPadding(itemsNode: null | HTMLElement) {
    if (!itemsNode) return 0
    const { paddingTop, paddingBottom } = getComputedStyle(itemsNode)
    return parseFloat(paddingTop) + parseFloat(paddingBottom)
  }

  async function recalculate(currentTarget: null | HTMLElement) {
    if (!currentTarget || !itemsNode) return

    await onScroll({ currentTarget })

    if (!maxFluidHeight) return

    const itemsNodeHeight = itemsNode.offsetHeight + 1
    const height = scrollHeight <= maxFluidHeight ? itemsNodeHeight : maxFluidHeight

    viewportStyle = `height:${height}px`
  }

  async function onScroll(e: { currentTarget: HTMLElement }) {
    const viewportNode = e.currentTarget
    const { scrollTop } = viewportNode

    const scrollPosition = scrollTop < maxScroll ? scrollTop : maxScroll
    const bufferOffset = scrollPosition - itemsOffsetTop

    const renderItemsOffset = Math.ceil(scrollPosition / itemHeight) - bufferItemsAmount

    start = renderItemsOffset > 0 ? renderItemsOffset : 0
    const _end = start + renderAmount
    end = maxScroll > 0 && scrollPosition === maxScroll ? Math.max(items.length, _end) : _end

    if (itemsOffsetTop > maxScroll || (start > 0 && end >= items.length)) {
      itemsOffsetTop = maxScroll
    }

    await tick()

    const pageLeft = Math.floor(normalize(start - pageOffset) / pageSize)
    const pageRight = Math.floor((end + pageOffset) / pageSize)
    // if (pageLeft !== pageRight) { // TODO: Call preload only for unique page [@vanguard | ]
    if (pageLeft > 0 && pageLeft !== pages[0]) preloadPage((pages[0] = pageLeft), pages)
    if (pageRight !== pages[1]) preloadPage((pages[1] = pageRight), pages)
    // }

    if (start === 0 && scrollTop === 0) {
      return (itemsOffsetTop = 0)
    }

    const diff = bufferHeight - bufferOffset
    const shouldMoveScrollContainer = diff <= 0 || diff - itemHeight < itemsOffsetTop
    itemsOffsetTop = shouldMoveScrollContainer ? start * itemHeight : itemsOffsetTop
  }

  function scrollTo(index: number) {
    if (viewportNode) {
      const { scrollTop, clientHeight } = viewportNode
      const bottom = scrollTop + clientHeight

      const itemTop = itemHeight * index
      const itemBottom = itemTop + itemHeight

      if (itemTop < scrollTop) {
        viewportNode.scroll(0, itemTop)
      } else if (bottom < itemBottom) {
        viewportNode.scroll(0, scrollTop + itemBottom - bottom)
      }
    }
  }
</script>

<virtual-list
  class="column relative {className}"
  on:scroll={onScroll}
  style={viewportStyle}
  bind:offsetHeight={viewportHeight}
  bind:this={viewportNode}
>
  <virtual-list-scroll style:height={scrollHeight + 'px'}>
    <virtual-list-items
      class="column"
      bind:this={itemsNode}
      style:transform="translateY({itemsOffsetTop}px)"
    >
      {#each renderedItems as item, i (item)}
        <slot {item} i={start + i} />
      {/each}
    </virtual-list-items>
  </virtual-list-scroll>

  <slot name="empty" />
</virtual-list>

<style>
  virtual-list {
    overflow-y: auto;
    height: 100%;
    flex: 1;
  }

  virtual-list-scroll {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>
