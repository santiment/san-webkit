import type { editor } from 'monaco-editor'

type TMetadata = {
  localVariables: string[]
  chartVariables: string[]
}

export function setModelMetadata(model: editor.ITextModel, metadata: Partial<TMetadata>) {
  Object.assign(model, { __metadata: metadata })
}

export function getModelMetadata(model: editor.ITextModel): Partial<TMetadata> {
  // @ts-ignore
  return model.__metadata
}
