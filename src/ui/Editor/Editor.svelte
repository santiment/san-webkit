<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { default as MediumEditor } from 'medium-editor'
  import { TOOLBAR, COMMENTS_TOOLBAR, anchor } from './toolbar'
  import { hookShortcutApplier } from './typedShortcuts'
  import { htmlToMarkdown } from './markdown'
  import { SuggestionsExtension } from './suggestions'

  let className = ''
  export { className as class }
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
      extensions: {
        suggestions: new SuggestionsExtension(),
      },
      anchorPreview: {
        hideDelay: 150,
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

<div bind:this={node} class={className} />

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

  div :global {
    strong,
    b {
      font-weight: bold;
    }
    u {
      text-decoration: underline;
    }

    h2 {
      font-size: 21px;
    }

    h3 {
      font-size: 18px;
    }

    a {
      color: var(--green);
    }

    ul,
    ol {
      padding-left: 30px;
      margin: 8px 0 24px;
    }

    ul li {
      list-style: disc;
    }

    ol li {
      list-style: decimal;
    }
  }

  :global {
    @import './toolbar.scss';
  }
</style>
