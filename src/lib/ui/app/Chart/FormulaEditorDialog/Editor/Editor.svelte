<script lang="ts">
  import type { Action } from 'svelte/action'
  import type TMonaco from 'monaco-editor'

  const mount: Action<HTMLDivElement, { createEditor: any }> = (
    node: HTMLElement,
    { createEditor },
  ) => {
    const editor = createEditor(node)

    return {
      destroy() {},
    }
  }
</script>

{#await import('./editor.js')}
  <div class="h-8"></div>
{:then { createEditor }}
  <div use:mount={{ createEditor }} style="border:1px solid #f00"></div>
{/await}
