<script lang="ts">
  import { setContext } from 'svelte'

  import Editor from '$ui/app/DataDocument/Editor/index.js'

  let props = $props()

  setContext('page_ctx', 'hello')
</script>

<main class="p-8">
  <Editor content={props.data.initialContent} renderedHTML={props.data.renderedHTML}></Editor>
</main>
