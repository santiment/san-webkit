<script lang="ts">
  import { createEventDispatcher, type Snippet } from 'svelte'
  import Svg from '$ui/core/Svg'
  import { cn } from '$ui/utils'

  type Props = {
    icon: 'info' | 'checkmark-circle' | 'warning' | 'error'
    message: string
    description?: string | Snippet
  }

  const { icon, message, description }: Props = $props()

  const dispatch = createEventDispatcher()

  const ICONS_MAP: { [key: string]: { fill: string; h?: number; w?: number } } = {
    info: { fill: 'fill-waterloo' },
    'checkmark-circle': { fill: 'fill-green' },
    warning: { fill: 'fill-orange', h: 14, w: 16 },
    error: { fill: 'fill-red' },
  }
</script>

<div
  class={cn(
    'w-[460px] gap-4 rounded-md border bg-white pl-6 pr-2.5 pt-5 row max-sm:w-full',
    description ? 'pb-6' : 'pb-5',
  )}
>
  <figure class={cn('flex h-5 w-4 center', ICONS_MAP[icon].fill)}>
    <Svg id={icon} w={ICONS_MAP[icon]?.w ?? 16} h={ICONS_MAP[icon]?.h ?? 16} />
  </figure>
  <div class="flex-1 gap-1 column">
    <h4 class="text-bleach self-stretch align-top text-base font-medium">{message}</h4>
    {#if description}
      <p class="text-base text-fiord">
        {#if typeof description === 'string'}
          {description}
        {:else}
          {@render description()}
        {/if}
      </p>
    {/if}
  </div>
  <button
    class="-ml-2 -mt-2.5 flex size-5 rounded fill-waterloo center hover:bg-porcelain max-sm:size-8"
    onclick={() => dispatch('closeToast')}
  >
    <Svg id="close" w={10} />
  </button>
</div>
