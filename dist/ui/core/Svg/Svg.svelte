<script lang="ts">import { cn } from "../../utils/index.js";
let {
  id,
  class: className = "",
  w = 16,
  h = w,
  illus = false,
  style = ""
} = $props();
</script>

<svg style="width:{w}px;height:{h}px;min-width:{w}px;{style}" class={cn(className)}>
  <use href="/webkit/sprites/{illus ? 'illus/' : 'icons/'}{id}.svg#0" />
</svg>
