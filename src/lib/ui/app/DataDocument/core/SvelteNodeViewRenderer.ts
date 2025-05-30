import type { NodeViewRenderer, NodeViewProps, NodeViewRendererOptions } from '@tiptap/core'
import type { Decoration, DecorationSource } from '@tiptap/pm/view'
import type { Node as ProseMirrorNode } from '@tiptap/pm/model'

import { NodeView, Editor, type DecorationWithType } from '@tiptap/core'

import SvelteRenderer, { type SvelteViewComponent } from './SvelteRenderer.js'
import { TIPTAP_NODE_VIEW } from './context.js'

interface RendererUpdateProps {
  oldNode: ProseMirrorNode
  oldDecorations: readonly Decoration[]
  oldInnerDecorations: DecorationSource
  newNode: ProseMirrorNode
  newDecorations: readonly Decoration[]
  newInnerDecorations: DecorationSource
  updateProps: () => void
}

type AttrProps =
  | Record<string, string>
  | ((props: {
      node: ProseMirrorNode
      HTMLAttributes: Record<string, any>
    }) => Record<string, string>)

export interface SvelteNodeViewRendererOptions extends NodeViewRendererOptions {
  update: ((props: RendererUpdateProps) => boolean) | null
  as?: string
  class?: string
  attrs?: AttrProps
}

class SvelteNodeView extends NodeView<SvelteViewComponent, Editor, SvelteNodeViewRendererOptions> {
  declare renderer: SvelteRenderer
  declare contentDOMElement: HTMLElement | null

  mount() {
    const props: NodeViewProps = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations as DecorationWithType[],
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: false,
      extension: this.extension,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (attributes = {}) => this.updateAttributes(attributes),
      deleteNode: () => this.deleteNode(),
    }

    const onDragStart = this.onDragStart.bind(this)

    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this)
    this.editor.on('selectionUpdate', this.handleSelectionUpdate)

    this.contentDOMElement = this.node.isLeaf
      ? null
      : document.createElement(this.node.isInline ? 'span' : 'div')

    if (this.contentDOMElement) {
      // For some reason the whiteSpace prop is not inherited properly in Chrome and Safari
      // With this fix it seems to work fine
      // See: https://github.com/ueberdosis/tiptap/issues/1197
      this.contentDOMElement.style.whiteSpace = 'inherit'
    }

    const as = this.options.as ?? (this.node.isInline ? 'span' : 'div')

    const target = document.createElement(as)
    target.dataset.type = this.node.type.name

    target.setAttribute('class', this.node.attrs.class || '')

    this.renderer = new SvelteRenderer(this.component, {
      target,
      props,
      context: new Map([
        //...this.editor.options.editorProps.svelteContext,
        [TIPTAP_NODE_VIEW, { ondragstart: onDragStart }],
      ]),
    })

    if (!this.contentDOMElement) return

    const contentDom = this.dom.querySelector('[data-node-view-content]')

    if (contentDom?.contains(this.contentDOMElement) === false) {
      contentDom.appendChild(this.contentDOMElement)
    }
  }

  get dom() {
    if (!this.renderer.dom.firstElementChild?.hasAttribute('data-node-view-wrapper')) {
      throw Error('Please use the NodeViewWrapper component for your node view.')
    }

    return this.renderer.dom
  }

  get contentDOM() {
    if (this.node.isLeaf) {
      return null
    }

    return this.contentDOMElement
  }

  update(
    node: ProseMirrorNode,
    decorations: readonly Decoration[],
    innerDecorations: DecorationSource,
  ) {
    const updateProps = (props: Partial<NodeViewProps>) => {
      this.renderer.updateProps(props)
    }

    if (typeof this.options.update === 'function') {
      const oldNode = this.node
      const oldDecorations = this.decorations
      const oldInnerDecorations = this.innerDecorations

      this.node = node
      this.decorations = decorations
      this.innerDecorations = innerDecorations

      return this.options.update({
        oldNode,
        oldDecorations,
        oldInnerDecorations,
        newNode: node,
        newDecorations: decorations,
        newInnerDecorations: innerDecorations,
        updateProps: () =>
          updateProps({
            node,
            decorations: decorations as DecorationWithType[],
            innerDecorations,
          }),
      })
    }

    if (node.type !== this.node.type) {
      return false
    }

    if (node === this.node && this.decorations === decorations) {
      return true
    }

    this.node = node
    this.decorations = decorations
    this.innerDecorations = innerDecorations

    updateProps({
      node,
      decorations: decorations as DecorationWithType[],
      innerDecorations,
    })

    return true
  }

  handleSelectionUpdate() {
    const { from, to } = this.editor.state.selection
    const pos = this.getPos()

    if (typeof pos !== 'number') {
      return
    }

    if (from <= pos && to >= pos + this.node.nodeSize) {
      if (this.renderer.props.selected) {
        return
      }

      this.selectNode()
    } else {
      if (!this.renderer.props.selected) {
        return
      }

      this.deselectNode()
    }
  }

  selectNode() {
    this.renderer.updateProps({ selected: true })
    this.renderer.dom.classList.add('ProseMirror-selectednode')
  }

  deselectNode() {
    this.renderer.updateProps({ selected: false })
    this.renderer.dom.classList.remove('ProseMirror-selectednode')
  }

  destroy(): void {
    this.renderer.destroy()
    this.editor.off('selectionUpdate', this.handleSelectionUpdate)
    this.contentDOMElement = null
  }
}

const SvelteNodeViewRenderer = (
  component: SvelteViewComponent,
  options?: Partial<SvelteNodeViewRendererOptions>,
): NodeViewRenderer => {
  return (props): SvelteNodeView => new SvelteNodeView(component, props, options)
}

export default SvelteNodeViewRenderer
