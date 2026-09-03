<script lang="ts">
  import Checkbox from '$ui/core/Checkbox/index.js'
  import TableHead from '$ui/core/Table/TableHead.svelte'

  type TProps = {
    checkAllSelected: () => boolean
    onSelectAll: () => void
  }

  const { checkAllSelected, onSelectAll }: TProps = $props()
</script>

<TableHead class="w-px">
  <Checkbox isActive={checkAllSelected()} onCheckedChange={() => onSelectAll()} />
</TableHead>
