<script lang="ts">import { Checkbox } from "bits-ui";
import { cn } from "$ui/utils/index.js";
let { isActive = false } = $props();
</script>

<Checkbox.Root
  bind:checked={isActive}
  class={cn(
    'size-4 min-w-4 rounded border border-porcelain bg-white hover:border-green',
    isActive &&
      'border-green bg-green bg-[url(/webkit/icons/checkmark.svg)] bg-center bg-no-repeat hover:bg-green-hover',
  )}
>
  <Checkbox.Indicator />
</Checkbox.Root>
