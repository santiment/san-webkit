<script lang="ts">
  import { cn } from '$ui/utils/index.js'

  let {
    id,
    class: className,
    w = 16,
    h = w,
    illus = false,
  }: {
    id: string
    class?: string
    w?: number | string
    h?: number | string
    illus?: boolean
  } = $props()
</script>

<svg style="width:{w}px;height:{h}px;min-width:{w}px" class={cn(className)}>
  <use href="/webkit/sprites/{illus ? 'illus/' : 'icons/'}{id}.svg#0" />
</svg>
