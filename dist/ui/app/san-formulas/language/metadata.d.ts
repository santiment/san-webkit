import type { editor } from 'monaco-editor';
export type TMetadata = {
    localVariables: string[];
    chartVariables: string[];
    onSignatureHelp: (index: number) => void;
};
export declare function setModelMetadata(model: editor.ITextModel, metadata: Partial<TMetadata>): void;
export declare function getModelMetadata(model: editor.ITextModel): Partial<TMetadata>;
export declare function getLocalVariables(formula: string): string[];
