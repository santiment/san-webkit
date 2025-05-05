<script lang="ts">
  import Tooltip from '$ui/core/Tooltip/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  import Products from './Products.svelte'

  type TProps = {
    className?: string
    dropdownClassName?: string
    tooltipClass?: string
    isCompact?: boolean
    isColumn?: boolean
    isOpened?: any
    active?: any
    closeTimeout?: number
  }

  const {
    className,
    dropdownClassName,
    isColumn = false,
    isCompact = false,
    isOpened = undefined,
    active = undefined,
    closeTimeout,
  }: TProps = $props()
</script>

<Tooltip {isOpened} position="bottom-end" class={className} closeDelay={closeTimeout}>
  {#snippet children({ ref })}
    <Button
      {ref}
      size="auto"
      icon="products-toggle"
      iconSize={16}
      class="mr-10 fill-waterloo hover:bg-transparent hover:fill-green"
    ></Button>
  {/snippet}

  {#snippet content()}
    <Products {active} {isColumn} {isCompact} class={dropdownClassName} />
  {/snippet}
</Tooltip>
