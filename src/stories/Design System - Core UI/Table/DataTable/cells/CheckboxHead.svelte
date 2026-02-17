<script lang="ts">
  import Checkbox from '$ui/core/Checkbox/index.js'
  import TableHead from '$ui/core/Table/TableHead.svelte'

  type TProps = {
    onSelect: () => void
  }

  const { onSelect }: TProps = $props()
</script>

<!-- <td class="pl-2 w-min"> -->
<TableHead class="w-px">
  <Checkbox isActive={false} onclick={() => onSelect()} />
</TableHead>
<!-- </td> -->
