<script lang="ts">
  import { useDrawingToolsCtx } from '$ui/app/Chart/drawing-tools/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  const { drawingTools } = useDrawingToolsCtx({})
</script>

<div class="flex gap-2">
  {@render button(['rectangle', 'Rect'])}
  {@render button(['fib_retracement', 'Fib'])}
</div>

{#snippet button([type, label]: any)}
  <Button
    class={cn(drawingTools.drawing$ === type && 'bg-athens')}
    onclick={() => drawingTools.onSelect(type)}>{label}</Button
  >
{/snippet}
