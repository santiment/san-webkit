<script lang="ts">import { createAvatar } from "@melt-ui/svelte";
import { cn } from "../../utils/index.js";
let {
  src,
  alt = "Avatar",
  class: className,
  children
} = $props();
const {
  states: { loadingStatus },
  elements: { image, fallback }
} = createAvatar({ src });
</script>

<div
  class={cn(
    'inline-flex size-5 rounded-full fill-waterloo center',
    $loadingStatus !== 'loaded' && 'bg-porcelain',
    className,
  )}
>
  <img loading="lazy" {...$image} {alt} use:image class="h-full w-full rounded-[inherit]" />
  <span {...$fallback} use:fallback>
    {@render children()}
  </span>
</div>
