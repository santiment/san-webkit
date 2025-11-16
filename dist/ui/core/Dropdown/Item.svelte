<script lang="ts" generics="T extends TBasicItem">
  import type { TBasicItem } from './types.js'

  import Button from '../Button/index.js'
  import { cn } from '../../utils/index.js'

  import { useDropdownCtx } from './ctx.svelte.js'

  type TProps = {
    class?: string
    item: T
    valueKey?: keyof T
    onclick: () => void
  }

  const { class: className, item, valueKey, onclick }: TProps = $props()

  const { selected, label, getItemIcon, onItemSelect } = useDropdownCtx.get()

  const icon = $derived(getItemIcon(item))
  const isSelected = $derived(checkIsItemSelected(item))

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
  icon={isSelected && icon ? 'checkmark-circle-filled' : icon}
  class={cn(isSelected && 'bg-porcelain hover:bg-porcelain', className)}
  onclick={() => {
    onItemSelect()
    onclick()
  }}
>
  {@render label(item)}
</Button>
