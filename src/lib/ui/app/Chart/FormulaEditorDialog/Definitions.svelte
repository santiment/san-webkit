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

  const { formulaEditor, hoveredDefinitionIndex } = useFormulaEditorCtx.get()

  function onItemClick(item: GItem) {
    if (!item.insertText) return
    if (!formulaEditor.$) return

    const { editor } = formulaEditor.$.api

    const contribution = editor.getContribution('snippetController2')
    contribution?.insert(item.insertText)

    editor.focus()
  }
</script>

<h3 class="font-medium">{title}</h3>

{#each items as item, i}
  {@const index = indexOffset + i}

  <Button
    icon={itemIcon}
    class={cn('hover:bg-white', hoveredDefinitionIndex.$ === index && '!bg-athens')}
    onmouseenter={() => (hoveredDefinitionIndex.$ = index)}
    onclick={() => onItemClick(item)}
  >
    {@render children(item)}
  </Button>
{/each}
