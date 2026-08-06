<script lang="ts">
  import type { Snippet } from 'svelte'

  import Button from '../../core/Button/Button.svelte'
  import { cn } from '../../utils/index.js'
  import Popover from '../../core/Popover/Popover.svelte'

  import Products from './Products.svelte'

  type TProps = {
    class?: string
    dropdownClassName?: string
    tooltipClass?: string
    isCompact?: boolean
    isOpened?: any
    active?: any
    variant?: 'green' | 'blue'
    closeTimeout?: number
    children?: Snippet<[{ props: Record<string, unknown> }]>
  }

  const {
    class: className,
    dropdownClassName,
    isCompact = false,
    isOpened = undefined,
    active = undefined,
    variant = 'green',
    closeTimeout,
    children: outerChildren,
  }: TProps = $props()
</script>

<Popover
  {isOpened}
  side="bottom"
  align="end"
  class={cn('dark:bg-white', className)}
  closeDelay={closeTimeout}
  openOnHover
>
  {#snippet children({ props })}
    {#if outerChildren}
      {@render outerChildren({ props })}
    {:else}
      <Button
        variant="plain"
        icon="products-toggle"
        iconSize={16}
        class={cn(
          'mr-10 fill-waterloo',
          variant === 'green' ? 'hover:fill-green' : 'hover:fill-blue',
        )}
        {...props}
      />
    {/if}
  {/snippet}

  {#snippet content()}
    <Products {active} {variant} {isCompact} class={dropdownClassName} />
  {/snippet}
</Popover>
