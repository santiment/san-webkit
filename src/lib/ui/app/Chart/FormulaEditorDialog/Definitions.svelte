<script lang="ts" generics="GItem">
  import type { Snippet } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/Svg.svelte'

  import { useFormulaEditorCtx } from './ctx.svelte.js'

  type TProps = {
    title: string
    icon: string
    indexOffset?: number
    items: GItem[]
    children: Snippet<[GItem]>
  }

  let { title, icon, items, children, indexOffset = 0 }: TProps = $props()

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

<section class="relative p-4">
  <h3 class="mb-1.5 h-8 items-center gap-2 fill-waterloo px-2 font-medium text-fiord row">
    <Svg id={icon} w="12"></Svg>
    {title}
  </h3>

  <section class="definitions relative pl-6 column">
    {#each items as item, i}
      {@const index = indexOffset + i}

      <Button
        icon={item.icon}
        iconSize="14"
        class={cn(
          'scroll-m-4 px-2 hover:bg-white',
          hoveredDefinitionIndex.$ === index && 'active-definition !bg-athens',
        )}
        onmouseenter={() => (hoveredDefinitionIndex.$ = index)}
        onclick={() => onItemClick(item)}
      >
        {@render children(item)}
      </Button>
    {/each}
  </section>
</section>

<style>
  .definitions::after {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 15px;
    border-left: 1px solid var(--porcelain);
  }
</style>
