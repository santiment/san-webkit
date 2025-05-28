<script lang="ts">
  import { BROWSER } from 'esm-env'

  import { BlockNoteEditor, BlockNoteSchema, getTipTapExtensions } from '@blocknote/core'
  import { renderToHTMLString } from '@tiptap/static-renderer/pm/html-string'
  import { onMount } from 'svelte'
  import SideMenu from './SideMenu.svelte'
  import SuggestionMenu from './SuggestionMenu.svelte'

  console.log('browser ->', BROWSER)

  type TProps = any
  let { initialContent, children }: TProps = $props()

  const schema = BlockNoteSchema.create()
  const extensions = getTipTapExtensions({
    editor: { settings: { codeBlock: { default: '' } } },

    blockSpecs: schema.blockSpecs,
    styleSpecs: schema.styleSpecs,
    inlineContentSpecs: schema.inlineContentSpecs,
  })

  const renderedHTML = renderToHTMLString({
    extensions: extensions,
    content: { type: 'doc', content: initialContent },
  })

  let editorNode: HTMLElement

  let editor: null | BlockNoteEditor = $state.raw(null)
  onMount(() => {
    const _editor = BlockNoteEditor.create({ initialContent })

    _editor.mount(editorNode)

    editor = _editor
  })
</script>

<div class="relative">
  <div bind:this={editorNode}>
    {@html renderedHTML}
  </div>

  {#if editor}
    <SideMenu {editor}></SideMenu>
    <SuggestionMenu {editor}></SuggestionMenu>
    <!--
    {@render children(editor)}
    -->
  {/if}
</div>
