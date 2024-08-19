<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Svg from '$ui/core/Svg'
  import { cn } from '$ui/utils'

  type Props = {
    icon: string
    message: string
    description: string
    action: { label: string; onClick: VoidFunction; className?: string }
  }

  const { icon, message, description, action }: Props = $props()

  const dispatch = createEventDispatcher()

  const ICONS_FILL_MAP = {
    info: 'fill-waterloo',
    'checkmark-circle': 'fill-green',
    warning: 'fill-orange',
    error: 'fill-red',
  }
</script>

<div
  class={cn(
    'min-w-[360px] justify-between gap-2 rounded-md border bg-white p-2 row',
    (description || action) && 'pb-4',
  )}
>
  <div class="flex h-8 w-8 items-center justify-center {ICONS_FILL_MAP[icon]}">
    <Svg id={icon} w={16} />
  </div>
  <div class="flex-1 gap-1 column">
    <h4 class="text-bleach min-h-8 text-nowrap text-sm font-medium leading-8">{message}</h4>
    {#if description}
      <p class="text-sm text-waterloo">{description}</p>
    {/if}
    {#if action && action.onClick && action.label}
      <div>
        <button
          class="btn cursor-pointer text-rhino hover:text-green {action.className}"
          on:click={action.onClick}>{action.label}</button
        >
      </div>
    {/if}
  </div>
  <button
    class="flex h-8 w-8 items-center justify-center fill-waterloo"
    on:click={() => dispatch('closeToast')}
  >
    <Svg id="close" w={12} />
  </button>
</div>
