<script lang="ts" generics="GItem">
  import type { Snippet } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  import { useFormulaEditorCtx } from './ctx.svelte.js'

  type TProps = {
    title: string
    indexOffset?: number
    itemIcon?: string
    items: GItem[]
    children: Snippet<[GItem]>
  }

  let { title, items, children, itemIcon, indexOffset = 0 }: TProps = $props()

  const { hoveredDefinitionIndex } = useFormulaEditorCtx.get()
</script>

<h3 class="font-medium">{title}</h3>

{#each items as item, i}
  {@const index = indexOffset + i}

  <Button
    class={cn('hover:bg-white', hoveredDefinitionIndex.$ === index && '!bg-athens')}
    onmouseenter={() => (hoveredDefinitionIndex.$ = index)}
    icon={itemIcon}
  >
    {@render children(item)}
  </Button>
{/each}
