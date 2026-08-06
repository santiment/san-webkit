<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'

  import { useDeviceCtx } from '../../../ctx/device/index.svelte.js'
  import Popover from '../../core/Popover/Popover.svelte'
  import Button from '../../core/Button/Button.svelte'
  import { cn } from '../../utils/index.js'

  import { showInfoDialog$ } from './InfoDialog.svelte'

  type TProps = {
    class?: string
    title?: string
    contentClass?: string
    triggerProps?: Omit<ComponentProps<typeof Button>, 'onclick' | 'class'>
    children: Snippet
  }

  const {
    class: className,
    contentClass,
    title = 'Info',
    triggerProps,
    children: infoContent,
  }: TProps = $props()

  const { device } = useDeviceCtx.get()
  const showInfoDialog = showInfoDialog$()

  let isPopoverOpened = $state(false)
</script>

{#if device.$.isPhone}
  {@render trigger({
    onclick: () => showInfoDialog({ title, class: contentClass, children: infoContent }),
    ...triggerProps,
  })}
{:else}
  <Popover bind:isOpened={isPopoverOpened} class="p-0" openOnHover>
    {#snippet children({ props })}
      {@render trigger({ ...props, ...triggerProps })}
    {/snippet}

    {#snippet content()}
      <section class={cn('max-w-60 px-5 py-4 text-sm', contentClass)}>
        {@render infoContent()}
      </section>
    {/snippet}
  </Popover>
{/if}

{#snippet trigger(props: ComponentProps<typeof Button>)}
  <Button
    size="sm"
    icon="info"
    iconSize="12"
    class={cn(isPopoverOpened && 'bg-[var(--ghost-active-bg)', className)}
    {...props}
  />
{/snippet}
