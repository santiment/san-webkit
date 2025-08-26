<script lang="ts" generics="T extends {icon?: string} | string">
  import type { ComponentProps, Snippet } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    items: T[]
    valueKey?: keyof T
    selected?: T
    label?: Snippet<[T]>
    trigger?: Snippet
    triggerClass?: string
    onSelect: (item: T) => void
    closeDelay?: number
  } & Omit<ComponentProps<typeof Popover>, 'content' | 'children'>

  let {
    class: className,
    items,
    valueKey,
    selected = $bindable(),
    trigger,
    triggerClass,
    label = defaultLabel,
    onSelect,
    closeDelay = 0,
    ...rest
  }: TProps = $props()

  let isOpened = $state(false)
  let closeTimer = $state<NodeJS.Timeout>()

  function onItemSelect(item: T, close: () => void) {
    clearTimeout(closeTimer)
    selected = item
    onSelect(item)

    closeTimer = setTimeout(() => {
      close()
    }, closeDelay)
  }

  const getItemIcon = (item: T | undefined) => (typeof item === 'string' ? undefined : item?.icon)

  function checkIsItemSelected(item: T) {
    if (!selected) return false

    if (valueKey) {
      return selected[valueKey] === item[valueKey]
    }

    return selected === item
  }
</script>

<Popover bind:isOpened align="start" class={cn('min-w-40', className)} {...rest}>
  {#snippet children({ props })}
    <Button
      {...props}
      class={triggerClass}
      active={isOpened}
      variant="border"
      icon={selected && getItemIcon(selected)}
      dropdown
    >
      {#if selected}
        {@render label(selected)}
      {:else if trigger}
        {@render trigger()}
      {:else}
        Select
      {/if}
    </Button>
  {/snippet}

  {#snippet content({ close })}
    <section class="flex w-full flex-col gap-0.5">
      {#each items as item}
        {@const isSelected = checkIsItemSelected(item)}
        {@const icon = getItemIcon(item)}

        <Button
          icon={isSelected && icon ? 'checkmark-circle-filled' : icon}
          class={cn(isSelected && 'bg-porcelain hover:bg-porcelain')}
          onclick={() => onItemSelect(item, close)}
        >
          {@render label(item)}
        </Button>
      {/each}
    </section>
  {/snippet}
</Popover>

{#snippet defaultLabel(item: T)}
  {item}
{/snippet}
