<script lang="ts">
  import { createEventDispatcher, type Snippet } from 'svelte'
  import Button from '$ui/core/Button/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  type Props = {
    icon: 'info' | 'checkmark-circle' | 'warning' | 'error'
    message: string
    description?: string | Snippet
    action?: { label: string; onClick: (event: MouseEvent) => void }
  }

  const { icon, message, description, action }: Props = $props()

  const dispatch = createEventDispatcher()
  const ICONS_MAP: { [key: string]: { fill: string; h?: number; w?: number } } = {
    info: { fill: 'fill-waterloo' },
    'checkmark-circle': { fill: 'fill-green' },
    warning: { fill: 'fill-orange', h: 14 },
    error: { fill: 'fill-red' },
  }
</script>

<div
  class={cn(
    'w-[460px] gap-4 rounded-md border bg-white pl-6 pr-2.5 pt-5 shadow row xs:w-full',
    description && !action ? 'pb-6' : 'pb-5',
  )}
>
  <figure class={cn('flex h-6 w-4 center', ICONS_MAP[icon].fill)}>
    <Svg id={icon} w={ICONS_MAP[icon].w || 16} h={ICONS_MAP[icon].h || 16} />
  </figure>
  <div class="flex-1 gap-2 column">
    <h4 class="text-base font-medium text-rhino">{message}</h4>
    {#if description}
      <p class="text-base text-fiord">
        {#if typeof description === 'string'}
          {description}
        {:else}
          {@render description()}
        {/if}
      </p>
    {/if}
    {#if action}
      <div class="mt-1">
        <Button variant="fill" onclick={action.onClick}>
          {action.label}
        </Button>
      </div>
    {/if}
  </div>
  <Button
    icon="close"
    iconSize={10}
    class="-ml-2 -mt-2.5 flex size-5 rounded !fill-waterloo center hover:bg-porcelain xs:size-8"
    onclick={() => dispatch('closeToast')}
  />
</div>
