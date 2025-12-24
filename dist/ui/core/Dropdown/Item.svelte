<script lang="ts" generics="T extends TBasicItem">
  import type { TBasicItem } from './types.js'
  import type { ComponentProps } from 'svelte'

  import Button from '../Button/index.js'
  import { cn } from '../../utils/index.js'

  import { useDropdownCtx } from './ctx.svelte.js'
  import { getItemTitle } from './utils.js'
  import Svg from '../Svg/Svg.svelte'

  type TProps = {
    class?: string
    item: T
    iconSize?: number
    valueKey?: keyof T
    onclick: () => void
    skipCloseDelay?: boolean
  } & Omit<ComponentProps<typeof Button>, 'class' | 'onclick' | 'iconSize'>

  const {
    class: className,
    iconSize,
    item,
    valueKey,
    onclick,
    skipCloseDelay = false,
    ...rest
  }: TProps = $props()

  const { selected, label, getItemIcon, closeDropdown } = useDropdownCtx.get()

  const icon = $derived(getItemIcon(item))
  const isSelected = $derived(checkIsItemSelected(item))

  const iconMargin = $derived(iconSize ? (16 - iconSize) / 2 : 0)

  const checkSelectedIsItem = (sel: TBasicItem): sel is T =>
    !!valueKey && valueKey in (sel as object)

  function checkIsItemSelected(item: T) {
    if (!selected.$) return false

    if (typeof item === 'string' || typeof selected.$ === 'string') {
      return selected.$ === item
    }

    if (valueKey && checkSelectedIsItem(selected.$)) {
      return selected.$[valueKey] === item[valueKey]
    }

    return selected.$.title === item.title
  }
</script>

<Button
  class={cn(isSelected && 'bg-porcelain hover:bg-porcelain', className)}
  onclick={() => {
    closeDropdown({ skipDelay: skipCloseDelay })
    onclick()
  }}
  {...rest}
>
  {#if icon}
    <Svg
      --margin={`${iconMargin}px`}
      class="mx-[var(--margin)]"
      id={isSelected ? 'checkmark-circle-filled' : icon}
      w={iconSize}
    />
  {/if}

  {#if label}
    {@render label(item)}
  {:else}
    {getItemTitle(item)}
  {/if}
</Button>
