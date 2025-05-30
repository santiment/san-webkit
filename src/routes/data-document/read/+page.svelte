<script lang="ts">
  import { setContext } from 'svelte'

  import DataDocument from '$ui/app/DataDocument/index.js'

  let props = $props()

  setContext('page_ctx', 'hello')
</script>

<main class="p-8">
  <DataDocument
    content={props.data.initialContent}
    renderedHTML={props.data.renderedHTML}
  ></DataDocument>
</main>
