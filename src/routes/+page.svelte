<script lang="ts">
  import { BROWSER } from 'esm-env'

  console.log('browser ->', BROWSER)

  //import './styles.css'

  import { BlockNoteEditor, BlockNoteSchema, getTipTapExtensions } from '@blocknote/core'
  import { renderToHTMLString } from '@tiptap/static-renderer/pm/html-string'
  import { hydrate, onMount, setContext } from 'svelte'
  import Editor from './Editor.svelte'
  import BlockContentWrapper from '$ui/app/DynamicDocument/core/BlockContentWrapper.svelte'
  import AlertComponent from './nodes/blocks/alert/Alert.svelte'

  let props = $props()

  let editorNode: HTMLElement

  setContext('test', 123)

  onMount(() => {
    if (props.data.isEdit) return

    console.log(props.data.initialContent)

    //const element = editorNode.querySelector('[data-content-type="alert"]')
    //console.log(element)

    const h = hydrate(BlockContentWrapper, {
      target: editorNode,
      props: {
        Component: AlertComponent,
        blockType: 'alert',
      },
    })
    console.log(h)
  })
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<main class="p-8">
  {#if props.data.isEdit}
    <Editor initialContent={props.data.initialContent} renderedHTML={props.data.renderedHTML}
    ></Editor>
  {:else}
    <div bind:this={editorNode}>
      {@html props.data.renderedHTML}
    </div>
  {/if}
</main>
