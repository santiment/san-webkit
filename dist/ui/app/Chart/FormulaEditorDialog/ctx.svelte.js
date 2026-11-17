import { onMount } from 'svelte';
import { createCtx, ss } from '../../../../utils/index.js';
import { workerValidateFormula } from '../metrics-api-worker/index.js';
export const useFormulaEditorCtx = createCtx('webkit_useFormulaEditorCtx', ({ index, chartVariables, metrics, onEditorSignatureShown, }) => {
    let formulaEditor = $state.raw(null);
    const hoveredDefinitionIndex = ss(0);
    const formulaValidationWorker = useWorkerMessagesFlow([]);
    function onSignatureHelp(value) {
        hoveredDefinitionIndex.$ = value;
        onEditorSignatureShown();
    }
    $effect(() => {
        if (!formulaEditor) {
            return;
        }
        const { model } = formulaEditor.api;
        const defaultValue = model.getValue().trim();
        let timer = 0;
        const updateLocalVariablesMetadata = () => formulaEditor?.updateMetadata({
            localVariables: Array.from(model.getValue().matchAll(/(\b[_a-zA-Z0-9]+)[\s]?=/g)).map(([_, varName]) => varName),
        });
        const onDidChangeContent = model.onDidChangeContent(() => {
            window.clearTimeout(timer);
            const value = model.getValue().trim();
            if (value) {
                formulaValidationWorker.schedule({ isLoading: true });
                timer = window.setTimeout(() => {
                    formulaValidationWorker.sendMessage({ formula: value, index, metrics });
                    updateLocalVariablesMetadata();
                }, 500);
            }
            else {
                formulaValidationWorker.reset();
            }
        });
        formulaEditor.updateMetadata({ chartVariables, onSignatureHelp });
        if (defaultValue) {
            updateLocalVariablesMetadata();
            formulaValidationWorker.sendMessage({ formula: model.getValue(), index, metrics });
        }
        return () => {
            formulaEditor?.dispose();
            onDidChangeContent.dispose();
            window.clearTimeout(timer);
        };
    });
    return {
        formulaEditor: {
            get $() {
                return formulaEditor;
            },
            set $(value) {
                formulaEditor = value;
            },
            get validation() {
                return formulaValidationWorker.data;
            },
        },
        hoveredDefinitionIndex,
        importSanFormulasEditor: () => import('../../san-formulas/language/editor.js'),
    };
});
function useWorkerMessagesFlow(defaultValue) {
    let currentWorkerRequest = null;
    let data = $state.raw(defaultValue);
    let isLoading = $state(false);
    function onWorkerData(msg) {
        if (!currentWorkerRequest || msg.id !== currentWorkerRequest.id) {
            return;
        }
        data = msg.payload.errors;
        isLoading = false;
    }
    onMount(() => () => {
        currentWorkerRequest?.cancel();
        currentWorkerRequest = null;
    });
    return {
        data: {
            get $() {
                return data;
            },
            get isLoading$() {
                return isLoading;
            },
        },
        schedule(options) {
            if (options.isLoading)
                isLoading = options.isLoading;
        },
        reset() {
            currentWorkerRequest?.cancel();
            currentWorkerRequest = null;
            data = defaultValue;
            isLoading = false;
        },
        sendMessage(payload) {
            currentWorkerRequest?.cancel();
            currentWorkerRequest = workerValidateFormula(payload, onWorkerData);
            isLoading = true;
        },
    };
}
