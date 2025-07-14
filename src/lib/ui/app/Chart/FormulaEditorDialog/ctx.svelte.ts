import type { TSanFormulasEditor } from '../../san-formulas/language/editor.js'

import { createCtx, ss } from '$lib/utils/index.js'

export const useFormulaEditorCtx = createCtx(
  'webkit_useFormulaEditorCtx',
  ({ chartVariables }: { chartVariables: string[] }) => {
    let formulaEditor = $state.raw<null | TSanFormulasEditor>(null)

    const hoveredDefinitionIndex = ss(0)

    function onSignatureHelp(value: number) {
      hoveredDefinitionIndex.$ = value
    }

    $effect(() => {
      if (!formulaEditor) {
        return
      }

      formulaEditor.updateMetadata({ chartVariables, onSignatureHelp })

      const { model } = formulaEditor.api

      const onDidChangeContent = model.onDidChangeContent(() => {
        const value = model.getValue()
        console.log({ value })
      })

      return () => {
        formulaEditor?.dispose()
        onDidChangeContent.dispose()
      }
    })

    return {
      formulaEditor: {
        get $(): null | TSanFormulasEditor {
          return formulaEditor
        },

        set $(value: TSanFormulasEditor) {
          formulaEditor = value
        },
      },

      hoveredDefinitionIndex,

      importSanFormulasEditor: () => import('../../san-formulas/language/editor.js'),
    }
  },
)
