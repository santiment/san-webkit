<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Editor from '@/ui/Editor'
  import { debounce } from '@/utils/fn'
  import { onDestroy } from 'svelte'

  let editor
  let markdown = ''

  const [onInput, clearTimeout] = debounce(300, () => {
    markdown = editor.serialize()
  })

  $: if (editor) {
    markdown = ''
    editor.subscribe('editableInput', onInput)
  }

  onDestroy(clearTimeout)
</script>

<Meta title="Example/Editor" component={Editor} />

<Story name="Editor">
  <div class="row">
    <Editor bind:editor />

    <div class="md caption">{markdown}</div>
  </div>
</Story>

<style>
  :global(#root) {
    height: 100%;
  }

  .row {
    height: 100%;
  }

  .md {
    padding: 0 16px;
    width: 50%;
    border-left: 1px solid var(--black);
    height: 100%;
    font-family: monospace;
    white-space: pre;
  }
</style>
