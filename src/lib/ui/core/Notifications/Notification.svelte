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
  const ICONS_MAP: Record<Props['icon'], { fill: string; h?: number; w?: number }> = {
    info: { fill: 'fill-waterloo' },
    'checkmark-circle': { fill: 'fill-green' },
    warning: { fill: 'fill-orange', h: 14 },
    error: { fill: 'fill-red' },
  }

  const currentIcon = ICONS_MAP[icon]
</script>

<section
  role="alert"
  class={cn(
    'w-[460px] gap-4 rounded-md border bg-white pl-6 pr-2.5 pt-5 shadow row xs:w-full',
    description && !action ? 'pb-6' : 'pb-5',
  )}
>
  <figure class="flex h-6 w-4 center">
    <Svg id={icon} class={currentIcon.fill} w={currentIcon.w || 16} h={currentIcon.h || 16} />
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
      <footer class="mt-1">
        <Button variant="fill" onclick={action.onClick}>
          {action.label}
        </Button>
      </footer>
    {/if}
  </div>

  <Button
    aria-label="Close notification"
    icon="close"
    iconSize={10}
    class="-ml-2 -mt-2.5 flex size-5 rounded !fill-waterloo center hover:bg-porcelain xs:size-8"
    onclick={() => dispatch('closeToast')}
  />
</section>
