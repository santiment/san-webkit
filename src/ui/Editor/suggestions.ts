import { default as Editor } from 'medium-editor'
import Suggestions from './Suggestions.svelte'

const TRIGGER = '$'

function getComponentNode(component) {
  return component?.$$.ctx[component.$$.props.node]
}

enum ArrowKeyCode {
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
}

export const SuggestionsExtension = Editor.Extension.extend({
  name: 'suggestions',
  node: null,
  startOffset: null,

  init() {
    this.subscribe('editableClick', (e) => {
      e.preventDefault()
      this.hide()
    })
    this.subscribe('editableKeyup', (e) => {
      this.handleInput(e)
    })
    this.subscribe('blur', (e) => {
      if (this.getHTMLNode()?.contains(e.target)) return
      this.hide()
    })
  },

  hide() {
    this.startOffset = null
    if (this.node) {
      this.node.$destroy()
      this.node = null
    }
  },

  getHTMLNode(): HTMLElement {
    return getComponentNode(this.node)
  },

  handleInput(e) {
    const range = Editor.selection.getSelectionRange(this.document)
    if (!range) return

    const { startOffset, startContainer, endContainer } = range
    if (startContainer !== endContainer) return

    if (this.startOffset !== null && this.startOffset >= startOffset) {
      this.hide()
    }

    switch (Editor.util.getKeyCode(e)) {
      case Editor.util.keyCode.SPACE:
      case Editor.util.keyCode.ENTER:
      case Editor.util.keyCode.ESCAPE:
      case Editor.util.keyCode.TAB:
      case ArrowKeyCode.Left:
      case ArrowKeyCode.Up:
      case ArrowKeyCode.Right:
      case ArrowKeyCode.Down:
        return this.hide()
    }

    const offset = startOffset - 1
    const textContent = startContainer.textContent as string
    const isTrigger = textContent[offset] === TRIGGER

    if (isTrigger && !this.node) {
      const onProjectSelect = (project) => {
        if (!this.node) return

        this.hide()

        this.base.stopSelectionUpdates()

        const range = Editor.selection.getSelectionRange(this.document)
        const { endOffset } = range
        range.setStart(startContainer, offset)
        range.setEnd(startContainer, endOffset)

        const a = document.createElement('a')
        a.href = 'https://app.santiment.net/projects/' + project.slug

        range.surroundContents(a)
        a.textContent = '$' + project.ticker.toUpperCase()
        a.contentEditable = 'false'

        Editor.selection.clearSelection(this.document)

        this.base.startSelectionUpdates()
      }

      this.startOffset = offset
      const position = range.getBoundingClientRect()

      this.node = new Suggestions({
        target: document.body,
        props: {
          position,
          onSelect: onProjectSelect,
        },
      })
    } else if (this.node) {
      this.node.$set({
        searchTerm: textContent.slice(this.startOffset + 1, startOffset),
      })
    }
  },
})
