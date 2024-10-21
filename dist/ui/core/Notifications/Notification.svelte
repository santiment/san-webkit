<script lang="ts">
  import { createEventDispatcher, type Snippet } from 'svelte'
  import Button from '../Button/index.js'
  import Svg from '../Svg/index.js'
  import { cn } from '../../utils/index.js'

  type Props = {
    icon: 'info' | 'checkmark-circle' | 'warning' | 'error'
    message: string
    content?: string | Snippet<[{ close: () => void }]>
    action?: { label: string; onClick: (event: MouseEvent) => void }
    class?: string
  }

  const { icon, message, content, action, class: className }: Props = $props()

  const dispatch = createEventDispatcher()

  const ICONS = {
    info: { class: 'fill-waterloo' },
    'checkmark-circle': { class: 'fill-green' },
    warning: { class: 'fill-orange', h: 14 },
    error: { class: 'fill-red' },
  }
</script>

<section
  role="alert"
  class={cn(
    'flex w-[460px] max-w-full gap-4 rounded-lg border bg-white pl-6 pr-2.5 pt-5 shadow',
    content && !action ? 'pb-6' : 'pb-5',
    className,
  )}
>
  <figure class="flex h-6 w-4 center">
    <Svg id={icon} {...ICONS[icon]} />
  </figure>

  <div class="flex-1 items-start gap-2 column">
    <h4 class="text-base font-medium text-rhino">{message}</h4>

    {#if content}
      <p class="text-base text-fiord">
        {#if typeof content === 'function'}
          {@render content({ close: () => dispatch('closeToast') })}
        {:else}
          {content}
        {/if}
      </p>
    {/if}

    {#if action}
      <Button variant="fill" class="mt-1" onclick={action.onClick}>
        {action.label}
      </Button>
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
