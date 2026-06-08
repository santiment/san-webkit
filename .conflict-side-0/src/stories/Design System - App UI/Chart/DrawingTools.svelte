<script lang="ts">
  import { useDrawingToolsCtx } from '$ui/app/Chart/drawing-tools/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  const { drawingTools } = useDrawingToolsCtx()

  function onDeleteClick() {
    drawingTools.drawings.delete(drawingTools.selected.$)
  }
</script>

<div class="flex gap-2">
  {@render button(['trendline', 'T.Line'])}
  {@render button(['horizontal-line', 'H.Line'])}
  {@render button(['vertical-line', 'V.Line'])}
  {@render button(['rectangle', 'Rect'])}
  {@render button(['fib-retracement', 'Fib'])}

  {#if drawingTools.selected.$}
    <Button icon="delete" explanation="Delete selected drawing" onclick={onDeleteClick}></Button>
  {/if}
</div>

{#snippet button([type, label]: any)}
  <Button
    class={cn(drawingTools.drawing$ === type && 'bg-athens')}
    onclick={() => drawingTools.onSelect(type)}>{label}</Button
  >
{/snippet}
