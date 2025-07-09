//import 'monaco-editor/esm/vs/editor/browser/coreCommands.js'

// eslint-disable-next-line import/order
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
//import * as monaco from 'monaco-editor'

import 'monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js'
import 'monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js'
//import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js'
//import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestInlineCompletions.js'

//import 'monaco-editor/esm/vs/basic-languages/python/python.contribution.js'

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

import './language.js'
import { setModelMetadata } from './metadata.js'

self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
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

type TEditor = monaco.editor.IStandaloneCodeEditor

const LINE_HEIGHT = 24

export function createEditor(domElement: HTMLElement): TEditor {
  const value = [
    '/* Example formula */',
    'x1 = sma(m1, 5)',
    'x2 = ema(m2, 10) + 5',
    'x3 = rsi(m3, 14) * 2 - 1',
  ].join('\n')

  const model = monaco.editor.createModel(value, 'formula-lang')
  setModelMetadata(model, { localVariables: ['x1', 'x2', 'x3'], chartVariables: ['m1', 'm2'] })

  const editor = monaco.editor.create(domElement, {
    //value,
    //language: 'formula-lang',
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
    const contentWidth = domElement.offsetWidth - 1
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

  return editor
}
