<script lang="ts">
  import type { Action } from 'svelte/action'
  import type { createEditor } from './editor.js'

  import Svg from '$ui/core/Svg/Svg.svelte'

  type TProps = { chartVariables: string[] }

  let { chartVariables }: TProps = $props()

  const mount: Action<HTMLDivElement, { createEditor: typeof createEditor }> = (
    node: HTMLElement,
    { createEditor },
  ) => {
    const editor = createEditor(node, { chartVariables })

    return {
      destroy() {
        editor.dispose()
      },
    }
  }
</script>

{#await import('./editor.js')}
  <div class="h-8"></div>
{:then { createEditor }}
  <div
    use:mount={{ createEditor }}
    class="rounded border bg-white fill-waterloo focus-within:border-green focus-within:fill-green hover:border-green"
  ></div>

  <div class="mt-2 flex items-center gap-2">
    <Svg id="checkmark-circle"></Svg>
    Formula is valid
  </div>
{/await}

<style>
  div :global {
    .monaco-editor {
      border-radius: var(--border-radius, inherit);
      background: var(--white);
      --vscode-editor-background: transparent;
      --vscode-focusBorder: transparent;
      --vscode-editorGutter-background: transparent;
      --vscode-list-hoverBackground: var(--mystic);
    }
  }
</style>
