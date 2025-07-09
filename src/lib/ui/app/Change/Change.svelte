<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    change: number
  }

  const { class: className = '', change }: TProps = $props()
</script>

<div class={cn('relative flex items-center', change < 0 ? 'text-red' : 'text-lima', className)}>
  {#if change !== 0}
    <span
      class={cn(
        'mr-1 flex size-3 items-center justify-center rounded-full',
        change < 0 ? 'bg-red-light-1 fill-red [&>svg]:rotate-180' : 'bg-lima-light-1 fill-lima',
      )}
      title={change < 0 ? 'Decrease' : 'Increase'}
    >
      <Svg id="triangle" w="6" h="4" />
    </span>
  {/if}
  {change}%
</div>
