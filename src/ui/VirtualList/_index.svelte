<script lang="ts">
  import { tick } from 'svelte'

  type T = $$Generic

  export let items = [] as T[]
  export let renderAmount = 10

  const bufferItemsAmount = 3

  let itemsNode = null as null | HTMLElement

  let start = 0
  let end = renderAmount
  let itemsOffsetTop = 0

  $: itemsNodeHeight = itemsNode ? itemsNode.scrollHeight : 0
  $: itemHeight = itemsNodeHeight / renderAmount
  $: scrollHeight = itemHeight * items.length
  $: bufferHeight = itemHeight * bufferItemsAmount

  $: maxScroll = scrollHeight - itemsNodeHeight

  $: renderedItems = items.slice(start, end)

  async function onScroll(e: Event) {
    const viewportNode = e.currentTarget as HTMLElement
    const { scrollTop } = viewportNode

    const scrollPosition = scrollTop < maxScroll ? scrollTop : maxScroll
    const bufferOffset = scrollPosition - itemsOffsetTop

    const renderItemsOffset = Math.ceil(scrollPosition / itemHeight) - bufferItemsAmount

    start = renderItemsOffset > 0 ? renderItemsOffset : 0
    end = scrollPosition === maxScroll ? items.length : start + renderAmount

    await tick()

    if (start === 0 && scrollTop === 0) {
      return (itemsOffsetTop = 0)
    }

    const diff = bufferHeight - bufferOffset
    const shouldMoveScrollContainer = diff <= 0 || diff - itemHeight < itemsOffsetTop
    itemsOffsetTop = shouldMoveScrollContainer ? start * itemHeight : itemsOffsetTop
  }
</script>

<virtual-list class="column relative" on:scroll={onScroll}>
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
