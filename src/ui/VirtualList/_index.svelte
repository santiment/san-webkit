<script lang="ts">
  import { tick } from 'svelte'

  type T = $$Generic

  export let items = [] as T[]
  export let itemHeight = 0
  export let renderAmount = 10

  const bufferItemsAmount = 3

  let viewportNode = null as null | HTMLElement
  let itemsNode = null as null | HTMLElement

  let viewportHeight = 0
  // let itemsNodeHeight = 0
  let itemsOffsetTop = 0

  let start = 0
  let end = renderAmount

  $: items && recalculate(viewportNode)

  $: scrollHeight = itemHeight * items.length
  $: bufferHeight = itemHeight * bufferItemsAmount

  $: maxScroll = scrollHeight - viewportHeight

  $: renderedItems = items.slice(start, end)

  const recalculate = (currentTarget: null | HTMLElement) =>
    currentTarget && onScroll({ currentTarget })

  async function onScroll(e: { currentTarget: HTMLElement }) {
    const viewportNode = e.currentTarget
    const { scrollTop } = viewportNode

    const scrollPosition = scrollTop < maxScroll ? scrollTop : maxScroll
    const bufferOffset = scrollPosition - itemsOffsetTop

    const renderItemsOffset = Math.ceil(scrollPosition / itemHeight) - bufferItemsAmount

    start = renderItemsOffset > 0 ? renderItemsOffset : 0
    end = start + renderAmount

    if (itemsOffsetTop > maxScroll) {
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
</script>

<virtual-list
  class="column relative"
  on:scroll={onScroll}
  bind:offsetHeight={viewportHeight}
  bind:this={viewportNode}
>
  <virtual-list-scroll style:height={scrollHeight + 'px'}>
    <virtual-list-items
      class="column"
      bind:this={itemsNode}
      style:transform="translateY({itemsOffsetTop}px)"
    >
      {#each renderedItems as item (item)}
        <slot {item} />
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
