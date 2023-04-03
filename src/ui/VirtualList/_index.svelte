<script lang="ts" context="module">
  export { Controller } from './ctx'
</script>

<script lang="ts">
  import { tick } from 'svelte'
  import { getControllerCtx } from './ctx'

  type T = $$Generic

  export let itemHeight: number
  export let items = [] as T[]
  export let renderAmount = 10
  export let maxFluidHeight = 0

  Object.assign(getControllerCtx() || {}, { scrollTo })
  const bufferItemsAmount = 3

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

    if (itemsOffsetTop > maxScroll || end >= items.length) {
      itemsOffsetTop = maxScroll
    }

    await tick()

    if (start === 0 && scrollTop === 0) {
      return (itemsOffsetTop = 0)
    }

    const diff = bufferHeight - bufferOffset
    const shouldMoveScrollContainer = diff <= 0 || diff - itemHeight < itemsOffsetTop
    itemsOffsetTop = shouldMoveScrollContainer ? start * itemHeight : itemsOffsetTop
  }

  function scrollTo(index: number) {
    viewportNode?.scroll(0, itemHeight * index)
  }
</script>

<virtual-list
  class="column relative"
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
