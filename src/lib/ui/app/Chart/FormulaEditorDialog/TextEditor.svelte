<script lang="ts">
  import type { Action } from 'svelte/action'
  import type { createEditor } from '$ui/app/san-formulas/language/editor.js'

  import Svg from '$ui/core/Svg/Svg.svelte'

  import { useFormulaEditorCtx } from './ctx.svelte.js'

  const { formulaEditor, importSanFormulasEditor } = useFormulaEditorCtx.get()

  const mount: Action<HTMLDivElement, { createEditor: typeof createEditor }> = (
    node: HTMLElement,
    { createEditor },
  ) => {
    formulaEditor.$ = createEditor(
      node,
      [
        '# Example formula',
        'x1 = sma(m1, 5)',
        'x2 = ema(m2, 10) + 5',
        'x3 = rsi(m3, 14) * 2 - 1',
      ].join('\n'),
    )
  }
</script>

{#await importSanFormulasEditor()}
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
