//import 'monaco-editor/esm/vs/editor/browser/coreCommands.js'

// eslint-disable-next-line import/order
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
//import * as monaco from 'monaco-editor'

import 'monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js'

import 'monaco-editor/esm/vs/basic-languages/python/python.contribution.js'

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

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
    'sma(m1, 5)',
    'from banana import *',
    '',
    'class Monkey:',
    '	# Bananas the monkey can eat.',
    '	capacity = 10',
    '	def eat(self, N):',
    "		'''Make the monkey eat N bananas!'''",
    '		capacity = capacity - N*banana.size',
    '',
    '	def feeding_frenzy(self):',
    '		eat(9.25)',
    '		return "Yum yum"',
  ].join('\n')

  //const model = monaco.editor.createModel(value, 'python')

  const editor = monaco.editor.create(domElement, {
    //model,
    value,
    language: 'python',

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

  monaco.languages.registerSignatureHelpProvider('python', {
    signatureHelpTriggerCharacters: ['(', ','],
    provideSignatureHelp: (model, position) => {
      return {
        value: {
          activeSignature: 0,
          activeParameter: 0, // you need to change which parameter is typing
          signatures: [
            {
              label: 'sma(metric: Timeseries, period: number)', // siagnature label must be entire function signature
              parameters: [
                {
                  label: 'metric', // parameter label must be partial of signature label
                },
                {
                  label: 'period', // parameter label must be partial of signature label
                },
              ],
            },
          ],
        },
        dispose: () => {},
      }
    },
  })

  // Wait for editor to be ready
  setTimeout(() => {
    // Position cursor after "print("
    editor.setPosition({ lineNumber: 1, column: 5 })

    // Focus the editor
    editor.focus()

    // Trigger signature help
    editor.trigger('keyboard', 'editor.action.triggerParameterHints', {})
  }, 500)

  return editor
}

/*
 {
				label: "sma",
				kind: monaco.languages.CompletionItemKind.Function,
				insertText: "testing(${1:condition})",
				insertTextRules:
					monaco.languages.CompletionItemInsertTextRule
						.InsertAsSnippet,
				range: range,
			},

*/
