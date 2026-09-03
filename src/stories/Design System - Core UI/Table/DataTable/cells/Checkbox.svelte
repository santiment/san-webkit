<script lang="ts">
  import type { Item } from '../../utils.js'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import { TableCell } from '$ui/core/Table/index.js'

  type TProps = {
    item: Item
    checkSelected: (item: Item) => boolean
    onSelect: (item: Item) => void
  }

  const { item, checkSelected, onSelect }: TProps = $props()
  let isSelected = $derived(checkSelected(item))
</script>

<TableCell class="w-px p-0 pl-2" noStyles>
  <div class="w-full rounded-l-lg p-2 group-hover/row:bg-athens">
    <Checkbox isActive={isSelected} onCheckedChange={() => onSelect(item)} />
  </div>
</TableCell>
