<script lang="ts">
  import type { SnapItem } from '@/ui/SnapGrid/types'

  import Grid from '@/ui/SnapGrid/Grid.svelte'
  import Resizer from '@/ui/SnapGrid/Resizer.svelte'
  import { setItemOptions } from '@/ui/SnapGrid/layout'

  export let cols = undefined as undefined | number
  export let layout: SnapItem[]

  setItemOptions(layout[0], { minCols: 3 })
</script>

<Grid {layout} {cols} let:i let:gridItem rowSize={26}>
  <grid-item use:gridItem class="h4 row hv-center">
    {i}

    <Resizer onEnd={console.log} />
  </grid-item>
</Grid>

<style>
  Grid {
    background: var(--porcelain);
  }

  grid-item {
    background: var(--mystic);
    border: 1px solid var(--black);
  }
</style>
