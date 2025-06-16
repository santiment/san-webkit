<script lang="ts">
  import { Checkbox, type CheckboxRootProps } from 'bits-ui'

  import { cn } from '../../utils/index.js'

  type TProps = CheckboxRootProps & { isActive?: boolean; class?: string }
  let { isActive = false, class: className, disabled, ...rest }: TProps = $props()
</script>

<Checkbox.Root
  {...rest}
  {disabled}
  bind:checked={isActive}
  class={cn(
    'size-4 min-w-4 rounded border border-porcelain bg-white hover:border-green',
    isActive &&
      'border-green bg-green bg-[url(/webkit/icons/checkmark.svg)] bg-center bg-no-repeat hover:bg-green-hover',
    disabled && 'border-porcelain bg-porcelain hover:border-porcelain',
    disabled && isActive && 'border-porcelain text-mystic hover:bg-porcelain',
    className,
  )}
></Checkbox.Root>
