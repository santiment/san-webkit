<script>
  import { onMount, onDestroy } from 'svelte'
  import { default as MediumEditor } from 'medium-editor'
  import { TOOLBAR, COMMENTS_TOOLBAR, anchor } from './toolbar'
  import { hookShortcutApplier } from './typedShortcuts'
  import { htmlToMarkdown } from './markdown'
  import { SuggestionsExtension } from './suggestions'
  let className = ''
  export { className as class }
  export let editor
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

<style>
  :global(.medium-editor-toolbar),
  :global(.medium-editor-toolbar-form) {
    position: absolute;
    top: 0;
    background: #2f354d;
    /* rhino */
    color: #fff;
    fill: #fff;
    border-radius: 4px;
  }
  :global(.medium-editor-toolbar) {
    opacity: 0;
    z-index: -1;
    box-shadow: 0px 4px 24px rgba(24, 27, 43, 0.05), 0px 2px 6px rgba(24, 27, 43, 0.02);
    padding: 0 4px;
  }
  :global(.medium-editor-toolbar-active) {
    opacity: 1;
    z-index: 100;
  }
  :global(.medium-editor-toolbar-form) {
    min-width: 230px;
    display: none;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
  :global(.medium-editor-toolbar-form-active) {
    display: flex;
    align-items: center;
  }
  :global(.medium-editor-toolbar-input) {
    background: #2f354d;
    /* rhino */
    margin-left: 6px;
    height: 100%;
    flex: 1;
  }
  :global(.medium-editor-toolbar-input::placeholder) {
    color: #7a859e;
    /* fiord */
  }
  :global(.medium-editor-toolbar-save),
  :global(.medium-editor-toolbar-close) {
    width: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  :global(.medium-editor-toolbar-close) {
    font-size: 22px;
  }
  :global(.medium-editor-toolbar-actions) {
    display: flex !important;
  }
  :global(.medium-editor-toolbar-actions) > :global(li) {
    display: flex;
    align-items: center;
  }
  :global(.medium-editor-toolbar-actions) > :global(li:nth-child(3)::before),
  :global(.medium-editor-toolbar-actions) > :global(li:nth-child(5)::before) {
    content: '';
    display: block;
    margin: 0 8px;
    width: 1px;
    height: 20px;
    background: #676f88;
  }
  :global(.medium-editor-action) {
    width: 32px;
    height: 32px;
  }
  :global(.medium-editor-action:hover) {
    fill: var(--green-hover);
  }
  :global(.medium-editor-action) :global(svg) {
    max-width: 16px;
    max-height: 15px;
  }
  :global(.editor-subtitle) {
    width: 10px;
    height: 10px;
  }
  :global(.medium-editor-button-active) {
    fill: var(--green);
  }
  :global(.medium-editor-anchor-preview) {
    display: none;
    max-width: 240px;
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    margin-top: -4px;
  }
  :global(.medium-editor-anchor-preview-active) {
    display: block;
  }
  :global(.medium-editor-toolbar-anchor-preview) {
    display: flex;
    border-radius: 4px;
    color: #fff;
    background: #2f354d;
    /* rhino */
  }
  :global(.medium-editor-anchor-preview) :global(a) {
    padding: 3px 12px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  div {
    min-height: 100%;
    outline: none;
    flex: 1;
    word-break: break-word;
  }
  div:empty::before {
    content: attr(data-placeholder);
    color: var(--casper);
    opacity: 0.5;
    pointer-events: none;
  }

  div :global(strong),
  div :global(b) {
    font-weight: bold;
  }
  div :global(u) {
    text-decoration: underline;
  }
  div :global(h2) {
    font-size: 21px;
  }
  div :global(h3) {
    font-size: 18px;
  }
  div :global(a) {
    color: var(--green);
  }
  div :global(ul),
  div :global(ol) {
    padding-left: 30px;
    margin: 8px 0 24px;
  }
  div :global(ul) :global(li) {
    list-style: disc;
  }
  div :global(ol) :global(li) {
    list-style: decimal;
  }

  :global(.medium-editor-toolbar),
  :global(.medium-editor-toolbar-form) {
    position: absolute;
    top: 0;
    background: #2f354d;
    /* rhino */
    color: #fff;
    fill: #fff;
    border-radius: 4px;
  }
  :global(.medium-editor-toolbar) {
    opacity: 0;
    z-index: -1;
    box-shadow: 0px 4px 24px rgba(24, 27, 43, 0.05), 0px 2px 6px rgba(24, 27, 43, 0.02);
    padding: 0 4px;
  }
  :global(.medium-editor-toolbar-active) {
    opacity: 1;
    z-index: 100;
  }
  :global(.medium-editor-toolbar-form) {
    min-width: 230px;
    display: none;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
  :global(.medium-editor-toolbar-form-active) {
    display: flex;
    align-items: center;
  }
  :global(.medium-editor-toolbar-input) {
    background: #2f354d;
    /* rhino */
    margin-left: 6px;
    height: 100%;
    flex: 1;
  }
  :global(.medium-editor-toolbar-input::placeholder) {
    color: #7a859e;
    /* fiord */
  }
  :global(.medium-editor-toolbar-save),
  :global(.medium-editor-toolbar-close) {
    width: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  :global(.medium-editor-toolbar-close) {
    font-size: 22px;
  }
  :global(.medium-editor-toolbar-actions) {
    display: flex !important;
  }
  :global(.medium-editor-toolbar-actions) > :global(li) {
    display: flex;
    align-items: center;
  }
  :global(.medium-editor-toolbar-actions) > :global(li:nth-child(3)::before),
  :global(.medium-editor-toolbar-actions) > :global(li:nth-child(5)::before) {
    content: '';
    display: block;
    margin: 0 8px;
    width: 1px;
    height: 20px;
    background: #676f88;
  }
  :global(.medium-editor-action) {
    width: 32px;
    height: 32px;
  }
  :global(.medium-editor-action:hover) {
    fill: var(--green-hover);
  }
  :global(.medium-editor-action) :global(svg) {
    max-width: 16px;
    max-height: 15px;
  }
  :global(.editor-subtitle) {
    width: 10px;
    height: 10px;
  }
  :global(.medium-editor-button-active) {
    fill: var(--green);
  }
  :global(.medium-editor-anchor-preview) {
    display: none;
    max-width: 240px;
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    margin-top: -4px;
  }
  :global(.medium-editor-anchor-preview-active) {
    display: block;
  }
  :global(.medium-editor-toolbar-anchor-preview) {
    display: flex;
    border-radius: 4px;
    color: #fff;
    background: #2f354d;
    /* rhino */
  }
  :global(.medium-editor-anchor-preview) :global(a) {
    padding: 3px 12px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
