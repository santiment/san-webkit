<script lang="ts">
  import { applyStyles } from 'drawer-svelte'

  import Popover from '$ui/core/Popover/index.js'

  let { editor } = $props()

  let isOpened = $state(false)
  let sideOffset = $state(8)

  let anchorNode = $state.raw<null | HTMLElement>(null)

  editor.suggestionMenus.onUpdate('/', (state) => {
    if (!anchorNode) return

    const { show, referencePos } = state

    if (show) {
      const root = anchorNode.parentElement!
      const { top, left } = root.getBoundingClientRect()

      sideOffset = referencePos.height

      applyStyles(anchorNode, {
        left: `${referencePos.x - left}px`,
        top: `${referencePos.y + sideOffset / 2 - top}px`,
      })
    }

    isOpened = show
  })
</script>

<div bind:this={anchorNode} class="invisible absolute"></div>

<Popover
  {isOpened}
  contentProps={{ customAnchor: anchorNode, sideOffset }}
  side="bottom"
  align="start"
  class="min-w-[170px] p-0.5 text-rhino column"
>
  {#snippet content()}
    {@render group()}

    {@render item()}
    {@render item()}
    {@render item()}
    {@render item()}
  {/snippet}
</Popover>

{#snippet group()}
  <h3 class="px-3 py-1 text-xs font-medium">Headings</h3>
{/snippet}

{#snippet item()}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
    class="5 flex cursor-pointer gap-2.5 rounded px-3 py-1 hover:bg-athens"
    onclick={console.log}
  >
    <div class="column">
      <h4 class="text-sm font-medium">Heading 1</h4>
      <p class="text-2xs">Top-level heading</p>
    </div>
  </div>
{/snippet}
