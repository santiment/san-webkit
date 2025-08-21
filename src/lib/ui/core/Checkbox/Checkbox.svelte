<script lang="ts">
  import { Checkbox, type CheckboxRootProps } from 'bits-ui'

  import { cn } from '$ui/utils/index.js'

  import Svg from '../Svg/Svg.svelte'

  type TProps = CheckboxRootProps & { isActive?: boolean; class?: string; error?: boolean }
  let {
    isActive = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    disabled,
    error,
    ...rest
  }: TProps = $props()

  const selected = $derived(isActive || indeterminate)
</script>

<Checkbox.Root
  {...rest}
  {disabled}
  bind:checked={isActive}
  bind:indeterminate
  class={cn(
    'flex size-4 min-w-4 items-center justify-center rounded border border-mystic bg-white fill-athens-day transition-colors hover:border-casper hover:bg-athens',
    error && 'border-red hover:border-red-hover',
    selected &&
      'border-green bg-green bg-center bg-no-repeat hover:border-green-hover hover:bg-green-hover',
    disabled && 'border-mystic bg-athens hover:border-mystic hover:bg-athens',
    disabled &&
      selected &&
      'border-porcelain bg-porcelain fill-casper hover:border-porcelain hover:bg-porcelain',
    className,
  )}
>
  {#snippet children({ checked, indeterminate })}
    {#if indeterminate}
      <Svg id="minus" />
    {:else if checked}
      <Svg id="checkmark" w="8" />
    {/if}
  {/snippet}
</Checkbox.Root>
