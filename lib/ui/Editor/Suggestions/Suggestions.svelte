<script>
  import { onMount } from 'svelte'
  import { getHorizontalCorrection } from './../../../ui/Tooltip/utils'
  export let key = ''
  export let items = []
  export let position
  export let loading = false
  export let setNode
  export let ctx = {}
  let node = undefined

  $: cursor = (items, 0)

  $: suggestions = items.slice(0, 5)

  $: style = node && getPositionStyles(position)

  ctx.moveCursor = (diff) => {
    const newCursor = (cursor + diff) % suggestions.length
    cursor = newCursor < 0 ? suggestions.length - 1 : newCursor
  }

  ctx.selectCursored = () => ctx.onSelect(suggestions[cursor])

  function getPositionStyles({ x, y, bottom }) {
    const { offsetWidth, offsetHeight } = node
    const { innerHeight } = window
    const isBottom = bottom + offsetHeight + 40 > innerHeight
    const yPosition = isBottom
      ? `bottom:${innerHeight - y + 5 - window.scrollY}`
      : `top:${bottom + window.scrollY}`
    const xPosition = x + getHorizontalCorrection(offsetWidth, x)
    return `${yPosition}px;left:${xPosition}px`
  }

  onMount(() => setNode(node))
</script>

<div class="border box" {style} bind:this={node}>
  {#each suggestions as item, i (item[key])}
    <button
      class="btn-ghost fluid row v-center"
      class:cursored={cursor === i}
      on:click|capture={() => ctx.onSelect(item)}
    >
      <slot {item} />
    </button>
  {:else}
    {loading ? 'Loading...' : 'No results'}
  {/each}
</div>

<style>
  div {
    position: absolute;
    padding: 8px;
    max-width: 220px;
    width: 220px;
    white-space: nowrap;
    z-index: 100;
  }

  .cursored {
    background: var(--athens);
  }
</style>
