<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import MediumEditor from 'medium-editor'
  import { TOOLBAR, COMMENTS_TOOLBAR, anchor } from './toolbar'
  import { hookShortcutApplier } from './typedShortcuts'
  import { htmlToMarkdown } from './markdown'

  export let editor: MediumEditor.MediumEditor
  export let node
  export let html = ''
  export let isComments = false
  export let placeholder

  onMount(() => {
    node.innerHTML = html
    editor = new MediumEditor(node, {
      buttonLabels: false,
      toolbar: isComments ? COMMENTS_TOOLBAR : TOOLBAR,
      anchor,
      placeholder: placeholder && {
        text: placeholder,
      },
    })

    editor.subscribe('editableKeydown', (e) => {
      const { code, shiftKey } = e
      if (shiftKey && code === 'Enter') e.preventDefault()
    })
    node.oninput = () => {
      if (!node.textContent) node.innerHTML = ''
    }

    hookShortcutApplier(editor, isComments)

    editor.serialize = () => htmlToMarkdown(node)
  })

  onDestroy(() => {
    editor.destroy()
  })
</script>

<div bind:this={node} />

<style lang="scss">
  div {
    min-height: 100%;
    outline: none;
    flex: 1;

    &:empty::before {
      content: attr(data-placeholder);
      color: var(--casper);
      opacity: 0.5;
      pointer-events: none;
    }
  }

  :global {
    @import './toolbar.scss';
  }
</style>
