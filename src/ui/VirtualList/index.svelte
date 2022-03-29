<script lang="ts">
  import { tick } from 'svelte'

  let className = ''
  export { className as class }
  export let items: any[]
  export let key: string | undefined
  export let renderAmount = 10
  export let maxHeight: number
  export let defaultItemHeight = 0
  export let viewportNode: HTMLElement | undefined = undefined
  export let renderHeight
  export let hideEmptyResults = false

  const delayItems = 3

  let listNode
  let listHeight = defaultItemHeight * items.length
  let offsetTop = 0
  let start = 0
  let end = renderAmount

  $: items && reset()
  $: listNode && tick().then(tick).then(updateListHeight)

  $: renderItems = items.slice(start, end)
  $: renderHeight = listHeight / renderAmount
  $: scrollHeight = renderHeight * items.length
  $: scrollStop = scrollHeight - listHeight
  $: offsetRenderDelay = renderHeight * delayItems

  $: style = listHeight ? `height:${scrollHeight}px` : ''
  $: viewportStyle = scrollHeight && maxHeight ? getViewportStyle() : ''

  function getViewportStyle() {
    tick().then(() => {
      const listHeight = listNode ? listNode.offsetHeight + 1 : scrollHeight
      const height = scrollHeight <= maxHeight ? listHeight : maxHeight
      viewportStyle = `height:${height}px`
    })

    return ''
  }

  async function onScroll() {
    const { scrollTop } = viewportNode

    const newOffset = scrollTop < scrollStop ? scrollTop : scrollStop
    const newDelay = newOffset - offsetTop
    const renderOffset = Math.ceil(newOffset / renderHeight) - delayItems

    start = renderOffset > 0 ? renderOffset : 0
    end = newOffset === scrollStop ? items.length : start + renderAmount

    await tick()

    if (start === 0 && scrollTop === 0) {
      return (offsetTop = 0)
    }

    const diff = offsetRenderDelay - newDelay
    offsetTop = diff <= 0 || diff - renderHeight < offsetTop ? start * renderHeight : offsetTop
  }

  function reset() {
    if (viewportNode) viewportNode.scrollTop = 0
    offsetTop = 0
    start = 0
    end = renderAmount
  }

  function updateListHeight() {
    listNode.offsetWidth // NOTE(vanguard): Awaiting style recalc
    listHeight = listNode.scrollHeight
  }
</script>

<div
  bind:this={viewportNode}
  style={viewportStyle}
  class="viewport relative {className}"
  on:scroll={onScroll}>
  <div class="scroll" {style}>
    <div class="list" style="transform:translateY({offsetTop}px)" bind:this={listNode}>
      {#each renderItems as item, i (key ? item[key] : item)}
        <slot {item} i={start + i} />
      {/each}
    </div>
  </div>

  {#if !hideEmptyResults && !renderItems.length}
    <slot name="empty">
      <div class="c-waterloo mrg-s mrg--l">No results found</div>
    </slot>
  {/if}
</div>

<style>
  .viewport {
    overflow-y: auto;
    height: 100%;
  }

  .scroll {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>
