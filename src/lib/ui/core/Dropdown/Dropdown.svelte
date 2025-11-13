<script lang="ts" generics="T extends TBasicItem">
  import type { ComponentProps, Snippet } from 'svelte'
  import type { TBasicItem } from './types.js'

  import Button from '$ui/core/Button/index.js'
  import Popover from '$ui/core/Popover/index.js'
  import { cn } from '$ui/utils/index.js'

  import { useDropdownCtx } from './ctx.svelte.js'

  type TProps = {
    class?: string
    selected?: T
    trigger?: Snippet
    label?: Snippet<[T]>
    children: Snippet
    triggerClass?: string
    closeDelay?: number
  } & Omit<ComponentProps<typeof Popover>, 'content' | 'children'>

  let {
    class: className,
    selected: initialSelected,
    triggerClass,
    closeDelay = 0,
    trigger,
    children: dropdownContent,
    label: initialLabel,
    ...rest
  }: TProps = $props()

  const { selected, getItemIcon, isOpened, label } = useDropdownCtx({
    closeDelay,
    selected: initialSelected,
    label: initialLabel,
  })

  $effect(() => {
    selected.$ = initialSelected
  })
</script>

<Popover align="start" class={cn('min-w-40', className)} bind:isOpened={isOpened.$} {...rest}>
  {#snippet children({ props })}
    <Button
      {...props}
      class={triggerClass}
      variant="border"
      icon={selected.$ && getItemIcon(selected.$)}
      dropdown
    >
      {#if selected.$}
        {@render label(selected.$)}
      {:else if trigger}
        {@render trigger()}
      {:else}
        Select
      {/if}
    </Button>
  {/snippet}

  {#snippet content()}
    <section class="flex w-full flex-col gap-0.5">
      {@render dropdownContent()}
    </section>
  {/snippet}
</Popover>
