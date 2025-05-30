<script lang="ts">
  import Button from '$ui/core/Button/index.js'

  import { useEditorCtx } from '../ctx/index.js'

  const { editor } = useEditorCtx.get()
  const currentEditor = editor.$!

  type TSideMenuState = Parameters<Parameters<(typeof currentEditor)['sideMenu']['onUpdate']>[0]>[0]
  type TBlock = TSideMenuState['block']

  let element: HTMLElement

  let block: null | TBlock

  currentEditor.sideMenu.onUpdate((sideMenuState) => {
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
    if (!block) return

    let targetBlock = block

    const blockContent = block.content
    const isBlockEmpty = blockContent && Array.isArray(blockContent) && blockContent.length === 0

    if (!isBlockEmpty) {
      targetBlock = currentEditor.insertBlocks([{ type: 'paragraph' }], block, 'after')[0]
    }

    currentEditor.setTextCursorPosition(targetBlock)
    currentEditor.openSuggestionMenu('/')
  }
</script>

<div bind:this={element} class="absolute flex hidden center">
  <Button icon="plus" size="sm" onclick={onAddClick}></Button>
</div>
