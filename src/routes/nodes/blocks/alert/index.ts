import type { NodeView } from '@tiptap/core'

import {
  BlockNoteEditor,
  applyNonSelectableBlockFix,
  createStronglyTypedTiptapNode,
  getBlockFromPos,
  getParseRules,
  propsToAttributes,
  wrapInBlockStructure,
  createInternalBlockSpec,
} from '@blocknote/core'

import SvelteNodeViewRenderer, {
  SvelteNodeView,
} from '$ui/app/DynamicDocument/core/SvelteNodeViewRenderer.svelte.js'
import BlockContentWrapper from '$ui/app/DynamicDocument/core/BlockContentWrapper.svelte'

import Component from './Alert.svelte'
import { render } from 'svelte/server'
import { TIPTAP_NODE_VIEW } from '$ui/app/DynamicDocument/core/context.js'
import NodeViewWrapper from '$ui/app/DynamicDocument/core/NodeViewWrapper.svelte'
import { BROWSER } from 'esm-env'

export const Alert = createSvelteBlockSpec(
  {
    type: 'alert',
    propSchema: {
      type: {
        default: 'warning',
        values: ['warning', 'error', 'info', 'success'],
      },
    },
    content: 'none',
    //content: 'inline',
  },
  {
    Component: Component as any,
  },
)

export function createSvelteBlockSpec(blockConfig: any, blockImplementation: any) {
  const node = createStronglyTypedTiptapNode({
    name: blockConfig.type as T['type'],

    content: (blockConfig.content === 'inline' ? 'inline*' : '') as T['content'] extends 'inline'
      ? 'inline*'
      : '',

    group: 'blockContent',
    selectable: blockConfig.isSelectable ?? true,
    isolating: true,

    addAttributes() {
      return propsToAttributes(blockConfig.propSchema)
    },

    parseHTML() {
      return getParseRules(blockConfig, blockImplementation.parse)
    },

    renderHTML({ HTMLAttributes }) {
      //new SvelteNodeView(, props, {
      //  block: block,
      //  Component: blockImplementation.Component,
      //})

      return ['div', ['p']]

      // renderHTML is used for copy/pasting content from the editor back into
      // the editor, so we need to make sure the `blockContent` element is
      // structured correctly as this is what's used for parsing blocks. We
      // just render a placeholder div inside as the `blockContent` element
      // already has all the information needed for proper parsing.
      const div = document.createElement('div')
      return wrapInBlockStructure(
        {
          dom: div,
          contentDOM: blockConfig.content === 'inline' ? div : undefined,
        },
        blockConfig.type,
        {},
        blockConfig.propSchema,
        blockConfig.isFileBlock,
        HTMLAttributes,
      )
    },

    addNodeView() {
      return (props): SvelteNodeView => {
        // Gets the BlockNote editor instance
        const editor = this.options.editor! as BlockNoteEditor<any>

        //const _block = this.editor.state.doc.resolve(props.getPos())
        //console.log(_block)
        //console.log(editor.getBlock(_block))
        //
        //console.log(props.getPos, editor, this.editor, blockConfig, props.getPos())
        // Gets the block
        const block = getBlockFromPos(props.getPos, editor, this.editor, blockConfig.type) as any

        return new SvelteNodeView(BlockContentWrapper, props, {
          block: block,
          Component: blockImplementation.Component,
        })
      }

      return SvelteNodeViewRenderer(blockImplementation.Component) as NodeView
      /*
      return (props) => {
        const nodeView = SvelteNodeViewRenderer(
          (props: NodeViewProps) => {
            // Gets the BlockNote editor instance
            const editor = this.options.editor! as BlockNoteEditor<any>
            // Gets the block
            const block = getBlockFromPos(
              props.getPos,
              editor,
              this.editor,
              blockConfig.type,
            ) as any
            // Gets the custom HTML attributes for `blockContent` nodes
            const blockContentDOMAttributes = this.options.domAttributes?.blockContent || {}

            const ref = useReactNodeView().nodeViewContentRef

            if (!ref) {
              throw new Error('nodeViewContentRef is not set')
            }

            const BlockContent = blockImplementation.render
            return ''
            //<BlockContentWrapper
            //  blockType={block.type}
            //  blockProps={block.props}
            //  propSchema={blockConfig.propSchema}
            //  isFileBlock={blockConfig.isFileBlock}
            //  domAttributes={blockContentDOMAttributes}
            //>
            //  <BlockContent
            //    block={block as any}
            //    editor={editor as any}
            //    contentRef={(element) => {
            //      ref(element);
            //      if (element) {
            //        element.className = mergeCSSClasses(
            //          "bn-inline-content",
            //          element.className,
            //        );
            //      }
            //    }}
            //  />
            //</BlockContentWrapper>
          },
          {
            className: 'bn-react-node-view-renderer',
          },
        )(props) as NodeView

        // NOTE: MIGHT NOT BE NEEDED
        //if (blockConfig.isSelectable === false) {
        //  applyNonSelectableBlockFix(nodeView, this.editor)
        //}

        return nodeView
      }

          */
    },
  })

  return createInternalBlockSpec(blockConfig, {
    node,
    //toInternalHTML() {
    //  return {} as any
    //},
    //toExternalHTML() {
    //  return {} as any
    //},
  })

  /*
  return createInternalBlockSpec(blockConfig, {
    node: node,
    toInternalHTML: (block, editor) => {
      const blockContentDOMAttributes = node.options.domAttributes?.blockContent || {}

      const BlockContent = blockImplementation.render
      const output = renderToDOMSpec(
        (refCB) => '',
        //<BlockContentWrapper
        //  blockType={block.type}
        //  blockProps={block.props}
        //  propSchema={blockConfig.propSchema}
        //  domAttributes={blockContentDOMAttributes}
        //>
        //  <BlockContent
        //    block={block as any}
        //    editor={editor as any}
        //    contentRef={(element) => {
        //      refCB(element);
        //      if (element) {
        //        element.className = mergeCSSClasses(
        //          "bn-inline-content",
        //          element.className,
        //        );
        //      }
        //    }}
        //  />
        //</BlockContentWrapper>
        editor,
      )

      return output
    },

    toExternalHTML: (block, editor) => {
      const blockContentDOMAttributes = node.options.domAttributes?.blockContent || {}

      const BlockContent = blockImplementation.toExternalHTML || blockImplementation.render
      const output = renderToDOMSpec((refCB) => {
        return ''
        //<BlockContentWrapper
        //  blockType={block.type}
        //  blockProps={block.props}
        //  propSchema={blockConfig.propSchema}
        //  domAttributes={blockContentDOMAttributes}
        //>
        //  <BlockContent
        //    block={block as any}
        //    editor={editor as any}
        //    contentRef={(element) => {
        //      refCB(element);
        //      if (element) {
        //        element.className = mergeCSSClasses(
        //          "bn-inline-content",
        //          element.className,
        //        );
        //      }
        //    }}
        //  />
        //</BlockContentWrapper>
      }, editor)

      return output
    },
  })
  */
}
