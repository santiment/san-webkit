<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Grid from '@/ui/SnapGrid/Grid.svelte'
  import Resizer from '@/ui/SnapGrid/Resizer.svelte'

  const layout = [
    [0, 0, 2, 1],
    [2, 0, 2, 2],
    [4, 0, 2, 4],
    [6, 0, 2, 7],
    [8, 0, 2, 3],
    [10, 0, 2, 5],
    [0, 1, 2, 5],
    [2, 2, 2, 5],
    [4, 9, 2, 5],
    [6, 7, 2, 6],
    [8, 3, 2, 3],
    [10, 5, 2, 4],
    [0, 6, 2, 5],
    [2, 7, 2, 3],
    [4, 4, 2, 5],
    [6, 13, 2, 2],
    [8, 6, 2, 2],
    [10, 9, 2, 3],
    [0, 11, 2, 5],
    [2, 10, 2, 3],
  ]

  const FOUR_GRID_LAYOUT = [
    [0, 0, 4, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],

    [1, 2, 2, 1],

    [0, 3, 3, 1],
    [0, 4, 2, 1],
    [1, 5, 2, 1],
    [2, 6, 2, 1],
    [0, 7, 3, 1],
  ]
</script>

<Meta title="Example/Snap Grid" />

<Story name="Basic">
  <div class="story">
    <Grid tag="main" {layout} let:class={className} let:i let:onMouseDown let:style>
      <div class="h4 row hv-center {className}" {style} on:mousedown={onMouseDown}>
        {i}

        <Resizer />
      </div>
    </Grid>
  </div>
</Story>

<Story name="Four column">
  <div class="story">
    <Grid
      tag="main"
      layout={FOUR_GRID_LAYOUT}
      cols={4}
      let:class={className}
      let:i
      let:onMouseDown
      let:style
    >
      <div class="h4 row hv-center {className}" {style} on:mousedown={onMouseDown}>
        {i}

        <Resizer />
      </div>
    </Grid>
  </div>
</Story>

<style>
  .story {
    width: 100%;
    height: 100%;
  }

  .story :global(.snap-grid) {
    background: var(--porcelain);
  }

  .story :global(.snap-item) {
    background: var(--mystic);
    border: 1px solid var(--black);
  }
</style>
