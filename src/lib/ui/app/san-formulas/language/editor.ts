//import 'monaco-editor/esm/vs/editor/browser/coreCommands.js'

import { editor as monacoEditor } from 'monaco-editor/esm/vs/editor/editor.api.js'

import 'monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js'
import 'monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js'

import { getModelMetadata, setModelMetadata, type TMetadata } from './metadata.js'
import { LANGUAGE_ID } from './language.js'
import './tokens-provider.js'
import './completion-provider.js'
import './signature-help-provider.js'

/*
 * Should be defined by the library user
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

self.MonacoEnvironment = self.MonacoEnvironment ?? {
  getWorkerUrl: function (_moduleId, _label) {
    // if (label === 'json') {
    // 	return './json.worker.bundle.js';
    // }
    // if (label === 'css' || label === 'scss' || label === 'less') {
    // 	return './css.worker.bundle.js';
    // }
    // if (label === 'html' || label === 'handlebars' || label === 'razor') {
    // 	return './html.worker.bundle.js';
    // }
    // if (label === 'typescript' || label === 'javascript') {
    // 	return './ts.worker.bundle.js';
    // }
    return new editorWorker()
  },
}
*/

const LINE_HEIGHT = 20

export type TEditor = monacoEditor.IStandaloneCodeEditor

export type TSanFormulasEditor = ReturnType<typeof createEditor>

export function createEditor(domElement: HTMLElement, value: string) {
  const model = monacoEditor.createModel(value, LANGUAGE_ID)

  const editor = monacoEditor.create(domElement, {
    model,

    fontFamily: 'Menlo',
    fontSize: 14,
    lineHeight: LINE_HEIGHT,
    padding: { top: 5, bottom: 5 },

    lineNumbers: 'off',
    minimap: { enabled: false },

    wordWrap: 'on',
    wrappingStrategy: 'advanced',
    renderLineHighlight: 'none',
    overviewRulerLanes: 0,
    scrollBeyondLastLine: false,

    scrollbar: {
      verticalScrollbarSize: 4,
      horizontalScrollbarSize: 4,
      alwaysConsumeMouseWheel: false,
    },

    folding: false,
    lineDecorationsWidth: 12,
    //lineNumbersMinChars: 0,

    // @ts-expect-error
    'bracketPairColorization.enabled': false,
  })

  //let ignoreEvent = false
  const updateHeight = () => {
    const contentWidth = domElement.offsetWidth - 2
    const contentHeight = Math.min(LINE_HEIGHT * 10, editor.getContentHeight())

    domElement.style.height = `${contentHeight + 2}px`
    try {
      //ignoreEvent = true
      editor.layout({ width: contentWidth, height: contentHeight })
    } finally {
      //ignoreEvent = false
    }
  }
  const onDidContentSizeChangeDisposable = editor.onDidContentSizeChange(updateHeight)
  updateHeight()

  const onDidChangeCursorPositionDisposable = editor.onDidChangeCursorPosition((event) => {
    if (event.source === 'snippet' || event.source === 'mouse') {
      requestAnimationFrame(() => {
        editor.trigger('keyboard', 'editor.action.triggerParameterHints', {})
      })
    }
  })

  // TODO: dispose model and editor  on unmount?
  return {
    api: { editor, model },

    updateMetadata: (metadata: Partial<TMetadata>) =>
      setModelMetadata(model, Object.assign(getModelMetadata(model) || {}, metadata)),

    dispose() {
      editor.dispose()
      model.dispose()
      onDidContentSizeChangeDisposable.dispose()
      onDidChangeCursorPositionDisposable.dispose()
    },
  }
}
