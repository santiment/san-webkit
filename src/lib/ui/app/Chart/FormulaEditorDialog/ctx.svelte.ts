import type { TSanFormulasEditor } from '../../san-formulas/language/editor.js'
import type { TValidateFormulaMessage } from '../metrics-api-worker/types.js'

import { onMount } from 'svelte'

import { createCtx, ss } from '$lib/utils/index.js'

import { workerValidateFormula } from '../metrics-api-worker/index.js'

export const useFormulaEditorCtx = createCtx(
  'webkit_useFormulaEditorCtx',
  ({
    index,
    chartVariables,
    metrics,
  }: {
    index: number
    chartVariables: string[]
    metrics: TValidateFormulaMessage['request']['payload']['metrics']
  }) => {
    let formulaEditor = $state.raw<null | TSanFormulasEditor>(null)

    const hoveredDefinitionIndex = ss(0)
    const formulaValidationWorker = useWorkerMessagesFlow([])

    function onSignatureHelp(value: number) {
      hoveredDefinitionIndex.$ = value
    }

    $effect(() => {
      if (!formulaEditor) {
        return
      }

      const { model } = formulaEditor.api
      const defaultValue = model.getValue().trim()

      let timer = 0

      const updateLocalVariablesMetadata = () =>
        formulaEditor?.updateMetadata({
          localVariables: Array.from(model.getValue().matchAll(/(\b[_a-zA-Z]+[0-9]?)[\s]?=/g)).map(
            ([_, varName]) => varName,
          ),
        })

      const onDidChangeContent = model.onDidChangeContent(() => {
        window.clearTimeout(timer)

        const value = model.getValue().trim()

        if (value) {
          formulaValidationWorker.schedule({ isLoading: true })

          timer = window.setTimeout(() => {
            formulaValidationWorker.sendMessage({ formula: value, index, metrics })
            updateLocalVariablesMetadata()
          }, 500)
        } else {
          formulaValidationWorker.reset()
        }
      })

      formulaEditor.updateMetadata({ chartVariables, onSignatureHelp })

      if (defaultValue) {
        updateLocalVariablesMetadata()
        formulaValidationWorker.sendMessage({ formula: model.getValue(), index, metrics })
      }

      return () => {
        formulaEditor?.dispose()
        onDidChangeContent.dispose()

        window.clearTimeout(timer)
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

        get validation() {
          return formulaValidationWorker.data
        },
      },

      hoveredDefinitionIndex,

      importSanFormulasEditor: () => import('../../san-formulas/language/editor.js'),
    }
  },
)

function useWorkerMessagesFlow(defaultValue: string[]) {
  let currentWorkerRequest: null | ReturnType<typeof workerValidateFormula> = null

  let data = $state.raw(defaultValue)
  let isLoading = $state(false)

  function onWorkerData(msg: TValidateFormulaMessage['response']) {
    if (!currentWorkerRequest || msg.id !== currentWorkerRequest.id) {
      return
    }

    data = msg.payload.errors
    isLoading = false
  }

  onMount(() => () => {
    currentWorkerRequest?.cancel()
    currentWorkerRequest = null
  })

  return {
    data: {
      get $() {
        return data
      },

      get isLoading$() {
        return isLoading
      },
    },

    schedule(options: { isLoading?: boolean }) {
      if (options.isLoading) isLoading = options.isLoading
    },

    reset() {
      currentWorkerRequest?.cancel()
      currentWorkerRequest = null

      data = defaultValue
      isLoading = false
    },
    sendMessage(payload: TValidateFormulaMessage['request']['payload']) {
      currentWorkerRequest?.cancel()
      currentWorkerRequest = workerValidateFormula(payload, onWorkerData)

      isLoading = true
    },
  }
}
