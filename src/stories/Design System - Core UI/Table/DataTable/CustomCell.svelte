<script lang="ts">
  import { TableCell } from '$ui/core/Table/index.js'
  import type { Item } from '../utils.js'

  type TProps = {
    item: Item
  }

  const { item }: TProps = $props()
</script>

<TableCell>
  <div class="font-bold text-red">
    {item.volume}
  </div>
</TableCell>
