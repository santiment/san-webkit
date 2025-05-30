import type { PropSchema } from '@blocknote/core'
import type { Component as TComponent } from 'svelte'

import {
  createBlockSpecFromStronglyTypedTiptapNode,
  createStronglyTypedTiptapNode,
  getParseRules,
} from '@blocknote/core'

import BlockContentWrapper from '../core/BlockContentWrapper.svelte'
import SvelteNodeViewRenderer from '../core/SvelteNodeViewRenderer.js'

export type TBlockConfig = {
  type: string
  content: 'inline' | 'none'
  readonly propSchema: PropSchema
  isSelectable?: boolean
  hardBreakShortcut?: 'shift+enter' | 'enter' | 'none'
}

export function createSvelteBlockSpec(
  schema: { type: string; Component: TComponent },
  config: {
    content?: 'inline*' | 'tableRow+' | 'blockContainer+' | 'column column+' | ''
    readonly propSchema?: PropSchema
    isSelectable?: boolean
    hardBreakShortcut?: 'shift+enter' | 'enter' | 'none'
  },
) {
  const node = createStronglyTypedTiptapNode({
    name: schema.type,
    Component: schema.Component,

    content: config.content || '',

    group: 'blockContent',
    priority: 90,
    selectable: config.isSelectable ?? true,
    isolating: true,

    parseHTML() {
      return null
      //return getParseRules(blockConfig, blockImplementation.parse)
    },

    renderHTML({ node, HTMLAttributes }) {
      return ['div']
      //return createDefaultBlockDOMOutputSpec(
      //  this.name,
      //  `h${node.attrs.level}`,
      //  {
      //    ...(this.options.domAttributes?.blockContent || {}),
      //    ...HTMLAttributes,
      //  },
      //  this.options.domAttributes?.inlineContent || {},
      //)
    },

    addNodeView() {
      return SvelteNodeViewRenderer(BlockContentWrapper)
    },
  })

  return createBlockSpecFromStronglyTypedTiptapNode(node, {})
}
