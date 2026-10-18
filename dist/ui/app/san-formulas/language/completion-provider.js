import { languages } from 'monaco-editor/esm/vs/editor/editor.api.js';
import { LANGUAGE_ID } from './language.js';
import { getModelMetadata } from './metadata.js';
import { createVariableDefinition, DEFINITIONS } from './definitions.js';
languages.registerCompletionItemProvider(LANGUAGE_ID, {
    provideCompletionItems: function (model, position) {
        const { localVariables = [], chartVariables = [] } = getModelMetadata(model);
        const word = model.getWordUntilPosition(position);
        const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
        };
        const suggestions = [
            ...localVariables.map((varName) => createVariableDefinition(varName, { detail: 'Local variable' })),
            ...chartVariables.map((varName) => createVariableDefinition(varName, { detail: 'Chart metric' })),
            // Functions
            ...DEFINITIONS,
        ].map((item) => ({ range, ...item }));
        return { suggestions };
    },
});
