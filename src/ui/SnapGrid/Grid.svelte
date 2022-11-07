<script lang="ts">
  import { tick } from 'svelte'
  import { setSnapGridCtx } from './context'
  import { SnapGrid } from './index'
  import { calcHeight, getResponsiveTranslate, getWidth } from './style'

  let className = ''
  export { className as class }
  export let tag = 'div'
  export let isDragging = false

  export let cols = 12
  export let rowSize = 30
  export let layout: any[]

  export let maxCols: number
  export let minCols: number
  export let maxRows: number
  export let minRows: number

  let node
  const settings = { cols, rowSize, maxCols, minCols, maxRows, minRows }
  const snapGrid = setSnapGridCtx(SnapGrid(layout, settings, { onStart, onEnd }))
  const { onDragStart } = snapGrid

  $: if (node) snapGrid.updateLayout(layout)
  $: if (node && layout) tick().then(() => snapGrid.mount(node))

  function getStyle(item) {
    const [, , , height] = item

    return `width:${getWidth(item, snapGrid)};
      height:${calcHeight(height, snapGrid)}px;
      transform:${getResponsiveTranslate(item, snapGrid)}`
  }

  function onStart() {
    isDragging = true
  }
  function onEnd() {
    setTimeout(() => (isDragging = false), 150)
  }
</script>

<svelte:element this={tag} bind:this={node} class="snap-grid {className}">
  {#each layout as item, i (item)}
    <slot {i} class="snap-item" style={getStyle(item)} onMouseDown={onDragStart} />
  {/each}
</svelte:element>

<style>
  .snap-grid {
    transition: height 0.2s;
  }
</style>
