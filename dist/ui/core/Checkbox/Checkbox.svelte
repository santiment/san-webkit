<script lang="ts">
  import { Checkbox, type CheckboxRootProps } from 'bits-ui'

  import { cn } from '../../utils/index.js'

  import Svg from '../Svg/Svg.svelte'
  import ValidationError from '../ValidationError/ValidationError.svelte'

  type TProps = CheckboxRootProps & { isActive?: boolean; class?: string; error?: string }
  let {
    isActive = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    disabled,
    error = $bindable(),
    onCheckedChange,
    ...rest
  }: TProps = $props()

  const selected = $derived(isActive || indeterminate)
</script>

<Checkbox.Root
  {...rest}
  {disabled}
  onCheckedChange={(v) => {
    error = undefined
    onCheckedChange?.(v)
  }}
  bind:checked={isActive}
  bind:indeterminate
  class={cn(
    'flex size-4 min-w-4 items-center justify-center rounded border border-mystic bg-white fill-athens-day transition-colors hover:border-casper hover:bg-athens',
    error && 'relative border-red hover:border-red-hover',
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

    {#if error}
      <ValidationError {error} />
    {/if}
  {/snippet}
</Checkbox.Root>
