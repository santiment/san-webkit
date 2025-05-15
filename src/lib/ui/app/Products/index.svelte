<script lang="ts">
  import type { SS } from 'svelte-runes'
  import type { Snippet } from 'svelte'

  import Tooltip from '$ui/core/Tooltip/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  import Products from './Products.svelte'

  type TProps = {
    class?: string
    dropdownClassName?: string
    tooltipClass?: string
    isCompact?: boolean
    isColumn?: boolean
    isOpened?: any
    activeClass?: string
    active?: any
    closeTimeout?: number
    children?: Snippet<[{ ref: SS<HTMLElement | null> }]>
  }

  const {
    class: className,
    dropdownClassName,
    isColumn = false,
    isCompact = false,
    isOpened = undefined,
    activeClass = '',
    active = undefined,
    closeTimeout,
    children: outerChildren,
  }: TProps = $props()
</script>

<Tooltip {isOpened} {activeClass} position="bottom-end" class={className} closeDelay={closeTimeout}>
  {#snippet children({ ref })}
    {#if outerChildren}
      {@render outerChildren({ ref })}
    {:else}
      <Button
        {ref}
        size="auto"
        icon="products-toggle"
        iconSize={16}
        class="mr-10 fill-waterloo hover:bg-transparent hover:fill-green"
      ></Button>
    {/if}
  {/snippet}

  {#snippet content()}
    <Products {active} {isColumn} {isCompact} class={dropdownClassName} />
  {/snippet}
</Tooltip>
