<script lang="ts">
  import { cn } from '$ui/utils/index.js'

  const { class: className = '' } = $props()
</script>

<div
  class={cn(
    'h-[2.4px] w-[2.4px] rounded-full',
    'shadow-[9.6px_0_0_2.4px_#14c393,_-9.6px_0_0_2.4px_#14c393]',
    'animate-[spin_1.2s_linear_infinite]',
    className,
  )}
></div>
