<script lang="ts">
  import type { Action } from 'svelte/action'
  import type { createEditor } from '$ui/app/san-formulas/language/editor.js'

  import Svg from '$ui/core/Svg/Svg.svelte'

  type TProps = { chartVariables: string[]; onSignatureHelp: (index: number) => void }

  let { chartVariables, onSignatureHelp }: TProps = $props()

  const mount: Action<HTMLDivElement, { createEditor: typeof createEditor }> = (
    node: HTMLElement,
    { createEditor },
  ) => {
    const editor = createEditor(
      node,
      [
        '# Example formula',
        'x1 = sma(m1, 5)',
        'x2 = ema(m2, 10) + 5',
        'x3 = rsi(m3, 14) * 2 - 1',
      ].join('\n'),

      { chartVariables, onSignatureHelp },
    )

    return {
      destroy() {
        editor.dispose()
      },
    }
  }
</script>

{#await import('../../../san-formulas/language/editor.js')}
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
