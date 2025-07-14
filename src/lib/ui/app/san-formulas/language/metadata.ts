import type { editor } from 'monaco-editor'

export type TMetadata = {
  localVariables: string[]
  chartVariables: string[]
  onSignatureHelp: (index: number) => void
}

export function setModelMetadata(model: editor.ITextModel, metadata: Partial<TMetadata>) {
  Object.assign(model, { __metadata: metadata })
}

export function getModelMetadata(model: editor.ITextModel): Partial<TMetadata> {
  // @ts-ignore
  return model.__metadata
}

export function getLocalVariables(formula: string): string[] {
  return Array.from(formula.matchAll(/(\w+)\s*=/g)).map((match) => match[1])
}
