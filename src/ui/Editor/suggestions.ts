import { default as Editor } from 'medium-editor'
import { queryProjects } from '@/api/projects'
import AssetSuggestions from './Suggestions/Assets.svelte'
import UserSuggestions from './Suggestions/Users.svelte'
import TrendSuggestions from './Suggestions/Trends.svelte'

const SuggestionsTrigger = {
  $: AssetSuggestions,
  '@': UserSuggestions,
  '#': TrendSuggestions,
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
  htmlNode: null,

  init() {
    queryProjects()
    this.subscribe('editableClick', (e) => {
      e.preventDefault()
      this.hide()
    })
    this.subscribe('editableKeyup', (e) => {
      this.handleInput(e)
    })
    this.subscribe('blur', (e) => {
      if (this.htmlNode?.contains(e.target)) return
      this.hide()
    })
  },

  hide() {
    this.startOffset = null
    if (this.node) {
      this.node.$destroy()
      this.node = null
      this.htmlNode = null
      this.ctx = null
    }

    this.base.unsubscribe('editableKeydown', this.handleSuggestionNavigation)
  },

  openSuggestions(Suggestions, position, onItemSelect) {
    this.ctx = { onSelect: onItemSelect }
    this.node = new Suggestions({
      target: document.body,
      props: {
        position,
        ctx: this.ctx,
        setNode: (node) => (this.htmlNode = node),
      },
    })

    this.handleSuggestionNavigation = (e) => {
      const key = Editor.util.getKeyCode(e)

      switch (key) {
        case Editor.util.keyCode.ENTER:
          e.preventDefault()
          return this.ctx?.selectCursored()
        case ArrowKeyCode.Up:
        case ArrowKeyCode.Down:
          e.preventDefault()
          break
        default:
          return
      }

      this.ctx?.moveCursor(key === ArrowKeyCode.Up ? -1 : 1)
    }
    this.base.subscribe('editableKeydown', this.handleSuggestionNavigation)
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
      case ArrowKeyCode.Right:
        return this.hide()
    }

    if ((startContainer.parentNode as HTMLElement).tagName === 'A') {
      return
    }

    const offset = startOffset - 1
    const textContent = startContainer.textContent as string
    const trigger = textContent[offset]
    const Suggestions = SuggestionsTrigger[trigger]

    if (Suggestions && !this.node) {
      const onItemSelect = (item) => {
        if (!this.node) return

        const href = this.node.href(item)
        const label = this.node.label(item)

        this.hide()
        this.base.stopSelectionUpdates()

        const range = Editor.selection.getSelectionRange(this.document)
        const { endOffset } = range
        range.setStart(startContainer, offset)
        range.setEnd(startContainer, endOffset)

        const a = document.createElement('a')
        a.href = href

        range.surroundContents(a)
        a.textContent = label

        Editor.selection.clearSelection(this.document)

        this.base.startSelectionUpdates()
      }

      this.startOffset = offset
      this.openSuggestions(Suggestions, range.getBoundingClientRect(), onItemSelect)
    } else if (this.node) {
      this.node.$set({
        searchTerm: textContent.slice(this.startOffset + 1, startOffset).toLowerCase(),
      })
    }
  },
})
