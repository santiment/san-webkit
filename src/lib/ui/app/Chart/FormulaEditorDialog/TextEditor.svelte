<script lang="ts">
  import type { Action } from 'svelte/action'
  import type { IDisposable } from 'monaco-editor'

  import { useFormulaEditorCtx } from './ctx.svelte.js'

  const { formulaEditor, importSanFormulasEditor } = useFormulaEditorCtx.get()

  let value = ''
  const mount: Action<HTMLDivElement> = (node: HTMLElement) => {
    let isUnmounted = false
    let onDidBlurEditorTextDisposable: null | IDisposable = null

    importSanFormulasEditor().then(({ createEditor }) => {
      if (isUnmounted) return

      node.firstElementChild?.remove()
      formulaEditor.$ = createEditor(node, value)

      const { editor, model } = formulaEditor.$.api
      onDidBlurEditorTextDisposable = editor.onDidBlurEditorText(() => {
        value = model.getValue().trim()
      })
    })

    return {
      destroy() {
        isUnmounted = true
        onDidBlurEditorTextDisposable?.dispose()
      },
    }
  }
</script>

<div
  use:mount
  class="group relative max-h-[202px] min-h-8 rounded border bg-white fill-waterloo focus-within:border-green focus-within:fill-green hover:border-green"
>
  <pre class="py-[5px] pl-3">{value}</pre>

  {#if !value}
    <div
      class="pointer-events-none absolute left-[12px] top-[5px] z-[1] text-waterloo group-focus-within:hidden"
    >
      Write formula here...
    </div>
  {/if}
</div>

<style>
  div :global {
    .monaco-editor {
      border-radius: var(--border-radius, inherit);
      background: var(--white);
      --vscode-editor-background: transparent;
      --vscode-focusBorder: transparent;
      --vscode-editorGutter-background: transparent;
      --vscode-list-hoverBackground: var(--mystic);

      --vscode-editorSuggestWidget-foreground: var(--black);
      --vscode-editorSuggestWidget-background: var(--white);
    }

    .monaco-editor .cursors-layer .cursor {
      background-color: var(--black);
      border-color: var(--black);
    }
  }

  pre {
    font-family: Menlo, Menlo, Monaco, 'Courier New', monospace;
  }
</style>
