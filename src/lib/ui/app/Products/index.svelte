<script lang="ts">
  import type { SS } from 'svelte-runes'
  import type { Snippet } from 'svelte'

  import Tooltip from '$ui/core/Tooltip/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  import Products from './Products.svelte'

  type TProps = {
    class?: string
    dropdownClassName?: string
    tooltipClass?: string
    isCompact?: boolean
    isColumn?: boolean
    isOpened?: any
    active?: any
    variant?: 'green' | 'blue'
    closeTimeout?: number
    children?: Snippet<[{ ref: SS<HTMLElement | null> }]>
  }

  const {
    class: className,
    dropdownClassName,
    isColumn = false,
    isCompact = false,
    isOpened = undefined,
    active = undefined,
    variant = 'green',
    closeTimeout,
    children: outerChildren,
  }: TProps = $props()
</script>

<Tooltip
  {isOpened}
  position="bottom-end"
  class={cn('dark:bg-white', className)}
  closeDelay={closeTimeout}
>
  {#snippet children({ ref })}
    {#if outerChildren}
      {@render outerChildren({ ref })}
    {:else}
      <Button
        {ref}
        size="auto"
        icon="products-toggle"
        iconSize={16}
        class={cn(
          'mr-10 fill-waterloo hover:bg-transparent',
          variant === 'green' ? 'hover:fill-green' : 'hover:fill-blue',
        )}
      ></Button>
    {/if}
  {/snippet}

  {#snippet content()}
    <Products {active} {variant} {isColumn} {isCompact} class={dropdownClassName} />
  {/snippet}
</Tooltip>
