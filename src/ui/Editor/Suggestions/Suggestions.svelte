<script lang="ts">
  import { onMount } from 'svelte'
  import { getHorizontalCorrection } from '@/ui/Tooltip/utils'

  export let key: string
  export let items = [] as any[]
  export let position: { x: number; y: number; bottom: number }
  export let onSelect
  export let loading = false
  export let setNode

  let node: HTMLDivElement | undefined = undefined

  $: style = node && getPositionStyles(position)

  function getPositionStyles({ x, y, bottom }): string {
    const { offsetWidth, offsetHeight } = node as any as HTMLElement
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
  {#each items.slice(0, 5) as item (item[key])}
    <button class="btn-ghost fluid row v-center" on:click|capture={() => onSelect(item)}>
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
</style>
