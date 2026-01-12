<script lang="ts">
  import type { TProps } from './types.js'

  import { cn } from '../../utils/index.js'

  let { id, class: className = '', w = 16, h = w, illus = false, style = '' }: TProps = $props()
</script>

<svg
  style="width:{w}px;height:{h}px;min-width:{w}px;{style}"
  style:--svg-stroke="currentColor"
  class={cn(className)}
>
  <use href="/webkit/sprites/{illus ? 'illus/' : 'icons/'}{id}.svg#0" />
</svg>
