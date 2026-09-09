import { languages } from 'monaco-editor/esm/vs/editor/editor.api.js';
import { LANGUAGE_ID } from './language.js';
import { DEFINITIONS } from './definitions.js';
import { getModelMetadata } from './metadata.js';
const SignatureIndex = {};
const SIGNATURES = DEFINITIONS.map((item, i) => {
    SignatureIndex[item.label] = i;
    return item.signature;
});
languages.registerSignatureHelpProvider(LANGUAGE_ID, {
    signatureHelpTriggerCharacters: ['(', ','],
    provideSignatureHelp: (model, position) => {
        // TODO: Reuse last computation if no new mouse event or `,` or `)` was not pressed
        const signature = getSignatureData(model, position);
        if (!signature) {
            return null;
        }
        return {
            value: {
                activeSignature: 0,
                activeParameter: signature.activeParameter,
                signatures: SIGNATURES.slice(signature.index, signature.index + 1),
            },
            dispose: () => { },
        };
    },
});
// TODO: Provide signatures for chart metrics (e.g. `m1`)
function getSignatureOfWordAtPosition(model, position, activeParameter = -1) {
    const wordAtPosition = model.getWordAtPosition(position);
    if (wordAtPosition) {
        const index = SignatureIndex[wordAtPosition.word];
        if (index !== undefined) {
            getModelMetadata(model)?.onSignatureHelp?.(index);
            return { index, activeParameter };
        }
    }
    return null;
}
function getSignatureData(model, position) {
    const signature = getSignatureOfWordAtPosition(model, position);
    if (signature) {
        return signature;
    }
    // Get the text until the current position
    const textUntilPosition = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
    });
    const argPositions = [0];
    let cursor = textUntilPosition.length;
    let columnDelta = 0;
    while ((columnDelta--, cursor-- > 0)) {
        const char = textUntilPosition[cursor];
        if (char === '(') {
            if (argPositions.length === 1) {
                break;
            }
            else {
                argPositions.pop();
                continue;
            }
        }
        if (char === ')') {
            argPositions.push(0);
            continue;
        }
        if (char === ',') {
            argPositions[argPositions.length - 1]++;
            continue;
        }
    }
    return getSignatureOfWordAtPosition(model, position.delta(0, columnDelta), argPositions.at(-1));
}
