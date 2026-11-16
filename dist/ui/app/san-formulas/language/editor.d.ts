import { editor as monacoEditor } from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js';
import 'monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js';
import { type TMetadata } from './metadata.js';
import './tokens-provider.js';
import './completion-provider.js';
import './signature-help-provider.js';
export type TEditor = monacoEditor.IStandaloneCodeEditor;
export type TSanFormulasEditor = ReturnType<typeof createEditor>;
export declare function createEditor(domElement: HTMLElement, value: string): {
    api: {
        editor: monacoEditor.IStandaloneCodeEditor;
        model: monacoEditor.ITextModel;
    };
    updateMetadata: (metadata: Partial<TMetadata>) => void;
    dispose(): void;
};
