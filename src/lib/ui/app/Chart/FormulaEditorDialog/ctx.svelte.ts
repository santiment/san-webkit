import type { TSanFormulasEditor } from '../../san-formulas/language/editor.js'

import { createCtx, ss } from '$lib/utils/index.js'

export const useFormulaEditorCtx = createCtx(
  'webkit_useFormulaEditorCtx',
  ({ chartVariables }: { chartVariables: string[] }) => {
    let formulaEditor = $state.raw<null | TSanFormulasEditor>(null)
    let errors = $state.raw([])

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

      let localVariablesTimer = 0

      const updateLocalVariablesMetadata = () =>
        formulaEditor?.updateMetadata({
          localVariables: Array.from(model.getValue().matchAll(/(\b[_a-zA-Z]+[0-9]?)[\s]?=/g)).map(
            ([_, varName]) => varName,
          ),
        })

      const onDidChangeContent = model.onDidChangeContent(() => {
        const value = model.getValue()

        if (!value) {
          errors = []
          return
        }

        window.clearTimeout(localVariablesTimer)
        localVariablesTimer = window.setTimeout(updateLocalVariablesMetadata, 300)
      })

      return () => {
        formulaEditor?.dispose()
        onDidChangeContent.dispose()

        window.clearTimeout(localVariablesTimer)
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

        get errors$() {
          return errors
        },
      },

      hoveredDefinitionIndex,

      importSanFormulasEditor: () => import('../../san-formulas/language/editor.js'),
    }
  },
)
