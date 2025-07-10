//import 'monaco-editor/esm/vs/editor/browser/coreCommands.js'

// eslint-disable-next-line import/order
import { editor as monacoEditor } from 'monaco-editor/esm/vs/editor/editor.api.js'

import 'monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js'
import 'monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js'

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

import { setModelMetadata, type TMetadata } from './metadata.js'
import { LANGUAGE_ID } from './language.js'
import './tokens-provider.js'
import './completion-provider.js'
import './signature-help-provider.js'

self.MonacoEnvironment = {
  // @ts-ignore
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

const LINE_HEIGHT = 24

export type TEditor = monacoEditor.IStandaloneCodeEditor

export function createEditor(
  domElement: HTMLElement,
  value: string,
  metadata: Partial<TMetadata>,
): TEditor {
  const model = monacoEditor.createModel(value, LANGUAGE_ID)
  setModelMetadata(model, { ...metadata })

  const editor = monacoEditor.create(domElement, {
    model,

    fontFamily: 'Menlo',
    fontSize: 16,
    lineHeight: LINE_HEIGHT,
    padding: { top: 3, bottom: 3 },

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

    // @ts-expect-error
    'bracketPairColorization.enabled': false,
  })

  //let ignoreEvent = false
  const updateHeight = () => {
    const contentWidth = domElement.offsetWidth - 2
    const contentHeight = Math.min(LINE_HEIGHT * 8, editor.getContentHeight())

    domElement.style.height = `${contentHeight + 2}px`
    try {
      //ignoreEvent = true
      editor.layout({ width: contentWidth, height: contentHeight })
    } finally {
      //ignoreEvent = false
    }
  }
  editor.onDidContentSizeChange(updateHeight)
  updateHeight()

  editor.onDidChangeCursorPosition((event) => {
    console.log(event)
    if (event.source === 'snippet' || event.source === 'mouse') {
      requestAnimationFrame(() => {
        editor.trigger('keyboard', 'editor.action.triggerParameterHints', {})
      })
    }
  })

  // TODO: dispose model and editor  on unmount?
  return editor
}
