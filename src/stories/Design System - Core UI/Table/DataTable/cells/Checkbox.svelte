<script lang="ts">
  import type { Item } from '../../utils.js'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import { TableCell } from '$ui/core/Table/index.js'

  type TProps = {
    item: Item
    onSelect: (item: Item) => void
  }

  const { item, onSelect }: TProps = $props()
</script>

<!-- <td class="pl-2 w-min"> -->
<TableCell class="w-px p-0 pl-2" noStyles>
  <div class="w-full rounded-l-lg p-2 group-hover/row:bg-athens">
    <Checkbox isActive={false} onclick={() => onSelect(item)} />
  </div>
</TableCell>
<!-- </td> -->
