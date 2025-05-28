<script lang="ts">
  import Button from '$ui/core/Button/index.js'

  let { editor } = $props()
  console.log(editor)

  let element: HTMLElement

  let block: any

  editor.sideMenu.onUpdate((sideMenuState) => {
    element.classList.toggle('hidden', !sideMenuState.show)

    if (sideMenuState.show) {
      block = sideMenuState.block

      const root = element.parentElement!
      const { top, left } = root.getBoundingClientRect()

      element.style.top = sideMenuState.referencePos.top - top + 'px'
      element.style.left = sideMenuState.referencePos.x - element.offsetWidth - left + 'px'
    } else {
      block = null
    }
  })

  function onAddClick() {
    const blockContent = block.content
    const isBlockEmpty =
      blockContent !== undefined && Array.isArray(blockContent) && blockContent.length === 0

    if (isBlockEmpty) {
      editor.setTextCursorPosition(block)
      editor.openSuggestionMenu('/')
    } else {
      const insertedBlock = editor.insertBlocks([{ type: 'paragraph' }], block, 'after')[0]
      editor.setTextCursorPosition(insertedBlock)
      editor.openSuggestionMenu('/')
    }
  }
</script>

<div bind:this={element} class="absolute flex hidden center">
  <Button icon="plus" size="sm" onclick={onAddClick}></Button>
</div>
