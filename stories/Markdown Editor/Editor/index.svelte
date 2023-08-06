<script>
  import { onDestroy } from 'svelte'
  import Editor from '@/ui/Editor/Editor.svelte'
  import { debounce } from '@/utils/fn'

  let editor
  let markdown = ''

  const [onInput, clearTimeout] = debounce(300, () => {
    markdown = editor.serialize()
    console.log({ markdown })
  })

  $: if (editor) {
    markdown = ''
    editor.subscribe('editableInput', onInput)
  }

  onDestroy(clearTimeout)
</script>

<main class="row border">
  <Editor bind:editor />

  <div class="md caption">{markdown}</div>
</main>

<style>
  main {
    height: 100%;
    margin: 32px;
  }

  Editor {
    padding: 16px;
  }

  .md {
    padding: 16px;
    width: 50%;
    border-left: 1px solid var(--black);
    height: 100%;
    font-family: monospace;
    white-space: pre-line;
    background: var(--athens);
  }
</style>
