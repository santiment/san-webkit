<script lang="ts">
  import { onMount } from 'svelte'

  import Button from '$ui/core/Button/index.js'
  import { useEditorCtx } from '../ctx/index.svelte.js'

  //import { GripVertical } from 'lucide-svelte'

  const { editor } = useEditorCtx.get()
  const currentEditor = editor.$!

  let dragNode: HTMLElement

  onMount(() => {
    setTimeout(() => {
      if (!dragNode) return

      const blockActionsNode = document.querySelector('.global-drag-handle') as null | HTMLElement
      if (!blockActionsNode) return

      blockActionsNode.appendChild(dragNode)
      dragNode.classList.remove('hidden')
    }, 1000)
  })

  function onAddClick() {
    console.log(currentEditor)

    return

    const blockContent = props.block.content
    const isBlockEmpty =
      blockContent !== undefined && Array.isArray(blockContent) && blockContent.length === 0

    if (isBlockEmpty) {
      currentEditor.setTextCursorPosition(props.block)
      currentEditor.openSuggestionMenu('/')
    } else {
      const insertedBlock = currentEditor.insertBlocks(
        [{ type: 'paragraph' }],
        props.block,
        'after',
      )[0]
      currentEditor.setTextCursorPosition(insertedBlock)
      currentEditor.openSuggestionMenu('/')
    }
  }
</script>

<div bind:this={dragNode} class="flex hidden center">
  <!--
<div bind:this={dragNode} class="flex hidden h-6 w-5 cursor-grab rounded center hover:bg-athens">
  <GripVertical></GripVertical>
  -->

  <Button icon="plus" size="sm" onclick={onAddClick}></Button>
</div>

<style>
  :root {
    --droparea-color: #5399e4;
  }

  :global {
    .global-drag-actions {
      @apply absolute;
    }
  }
</style>
