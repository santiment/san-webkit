<script lang="ts">
  import { BROWSER } from 'esm-env'

  import {
    BlockNoteEditor,
    BlockNoteSchema,
    defaultBlockSpecs,
    getTipTapExtensions,
  } from '@blocknote/core'
  import { renderToHTMLString } from '@tiptap/static-renderer/pm/html-string'
  import { onMount } from 'svelte'
  import SideMenu from './SideMenu.svelte'
  import SuggestionMenu from './SuggestionMenu.svelte'
  import { Alert } from './nodes/blocks/alert/index.js'
  import AlertComponent from './nodes/blocks/alert/Alert.svelte'
  import { render } from 'svelte/server'
  import BlockContentWrapper from '$ui/app/DynamicDocument/core/BlockContentWrapper.svelte'

  console.log('browser ->', BROWSER)

  type TProps = any
  let { initialContent, renderedHTML, children }: TProps = $props()

  const schema = BlockNoteSchema.create({
    blockSpecs: {
      // enable the default blocks if desired
      ...defaultBlockSpecs,

      // Add your own custom blocks:
      alert: Alert,
    },
  })

  let editorNode: HTMLElement

  let editor: null | BlockNoteEditor = $state.raw(null)
  onMount(() => {
    const _editor = BlockNoteEditor.create({ initialContent, schema })

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
