import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

type TEditor = monaco.editor.IStandaloneCodeEditor

const LINE_HEIGHT = 24

export function createEditor(domElement: HTMLElement): TEditor {
  const editor = monaco.editor.create(domElement, {
    value: [
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
    ].join('\n'),
    language: 'python',

    fontSize: 16,
    lineHeight: LINE_HEIGHT,
    padding: { top: 4, bottom: 4 },

    lineNumbers: 'off',
    minimap: { enabled: false },

    wordWrap: 'on',
    wrappingStrategy: 'advanced',
    renderLineHighlight: 'none',
    overviewRulerLanes: 0,
    scrollBeyondLastLine: false,

    scrollbar: {
      verticalScrollbarSize: 2,
      horizontalScrollbarSize: 2,
      alwaysConsumeMouseWheel: false,
    },
  })

  //let ignoreEvent = false
  const updateHeight = () => {
    const contentWidth = domElement.offsetWidth - 1
    const contentHeight = Math.min(LINE_HEIGHT * 8, editor.getContentHeight())

    domElement.style.height = `${contentHeight}px`
    try {
      //ignoreEvent = true
      editor.layout({ width: contentWidth, height: contentHeight })
    } finally {
      //ignoreEvent = false
    }
  }
  editor.onDidContentSizeChange(updateHeight)
  updateHeight()

  return editor
}

/*
 {
				label: "testing",
				kind: monaco.languages.CompletionItemKind.Keyword,
				insertText: "testing(${1:condition})",
				insertTextRules:
					monaco.languages.CompletionItemInsertTextRule
						.InsertAsSnippet,
				range: range,
			},

*/
