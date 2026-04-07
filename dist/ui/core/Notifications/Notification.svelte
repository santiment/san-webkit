<script lang="ts">
  import { createEventDispatcher, onMount, type Snippet } from 'svelte'

  import Button from '../Button/index.js'
  import Svg from '../Svg/index.js'
  import { cn } from '../../utils/index.js'
  import { useUiCtx } from '../../../ctx/ui/index.svelte.js'

  type Props = {
    icon: 'info' | 'checkmark-circle' | 'warning' | 'error'
    message: string
    content?: string | Snippet<[{ close: () => void }]>
    action?: { label: string; onClick?: (close: () => void) => void; href?: string }
    class?: string
  }

  const { icon, message, content, action, class: className }: Props = $props()

  const { ui } = useUiCtx()

  const dispatch = createEventDispatcher()

  const close = () => dispatch('closeToast')

  const ICONS = {
    info: { class: 'fill-waterloo' },
    'checkmark-circle': { class: 'fill-green' },
    warning: { class: 'fill-orange', h: 14 },
    error: { class: 'fill-red' },
  }

  onMount(() => {
    const listNode = document.querySelector('[data-sonner-toaster]') as null | HTMLElement
    if (!listNode) return

    const container = listNode.parentElement!
    if (container.parentElement === document.body) return

    listNode.style.zIndex = '999999999'
    document.body.appendChild(container)
  })
</script>

<section
  role="alert"
  style:--active-ghost-button-bg={ui.$$.isNightMode ? 'var(--porcelain)' : undefined}
  class={cn(
    'flex w-[460px] max-w-full gap-4 rounded-lg border bg-white pl-6 pr-2.5 pt-5 shadow-modal dark:bg-athens dark:shadow-none',
    content && !action ? 'pb-6' : 'pb-5',
    className,
  )}
>
  <figure class="flex h-6 w-4 center">
    <Svg id={icon} {...ICONS[icon]} />
  </figure>

  <div class="flex-1 items-start gap-2 column">
    <h4 class="line-clamp-2 text-base font-medium text-rhino">{message}</h4>

    {#if content}
      <p class="text-base text-fiord">
        {#if typeof content === 'function'}
          {@render content({ close: close })}
        {:else}
          {content}
        {/if}
      </p>
    {/if}

    {#if action}
      <Button
        variant="fill"
        class="mt-1"
        href={action.href}
        onclick={() => (action.onClick ? action.onClick(close) : close())}
      >
        {action.label}
      </Button>
    {/if}
  </div>

  <Button
    aria-label="Close notification"
    icon="close"
    iconSize={10}
    class="-ml-2 -mt-2.5 flex size-5 rounded !fill-waterloo center hover:bg-porcelain xs:size-8"
    onclick={close}
  />
</section>
