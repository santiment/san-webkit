<script lang="ts">import { createAvatar } from "@melt-ui/svelte";
import { cn } from "$ui/utils/index.js";
let {
  src,
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
  <img loading="lazy" {...$image} use:image alt="Avatar" class="h-full w-full rounded-[inherit]" />
  <span {...$fallback} use:fallback>
    {@render children()}
  </span>
</div>
