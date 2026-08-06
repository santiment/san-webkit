<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'

  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  import { showInfoDialog$ } from './InfoDialog.svelte'

  type TBtnProps = ComponentProps<typeof Button>

  type TProps = {
    dialogTitle?: string
    contentClass?: string
    dialogClass?: string
    popoverClass?: string

    children: Snippet
    trigger?: Snippet<[{ isOpened: boolean; props: TBtnProps }]>
  } & Omit<TBtnProps, 'children' | 'onclick'>

  const {
    class: className,
    contentClass,
    dialogClass,
    dialogTitle = 'Info',
    popoverClass,
    children: infoContent,
    trigger: propTrigger,
    ...triggerProps
  }: TProps = $props()

  const { device } = useDeviceCtx.get()
  const showInfoDialog = showInfoDialog$()

  let isPopoverOpened = $state(false)
</script>

{#if device.$.isPhone}
  {@render trigger({
    onclick: () =>
      showInfoDialog({
        title: dialogTitle,
        class: dialogClass,
        contentClass,
        children: infoContent,
      }),
    ...triggerProps,
  })}
{:else}
  <Popover bind:isOpened={isPopoverOpened} class={cn('p-0', popoverClass)} openOnHover>
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

{#snippet trigger(props: TBtnProps)}
  {#if propTrigger}
    {@render propTrigger({ isOpened: isPopoverOpened, props })}
  {:else}
    <Button
      size="sm"
      icon="info"
      iconSize="12"
      class={cn(isPopoverOpened && 'bg-[var(--ghost-active-bg)', className)}
      {...props}
    />
  {/if}
{/snippet}
