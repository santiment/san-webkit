<script lang="ts">
  import type { TProps } from './types.js'

  import { cn } from '$ui/utils/index.js'

  const { id, class: className = '', w, h, illus = false, style = '' }: TProps = $props()

  const defaultWidth = getSizeFromId()

  const width = $derived(w ?? defaultWidth)
  const height = $derived(h ?? width)

  function getSizeFromId() {
    const size = Number(id.split('-').at(-1))
    return Number.isFinite(size) ? size : 16
  }
</script>

<svg
  style="width:{width}px;height:{height}px;min-width:{width}px;{style}"
  style:--svg-stroke="currentColor"
  class={cn(className)}
>
  <use href="/webkit/sprites/{illus ? 'illus/' : 'icons/'}{id}.svg#0" />
</svg>
