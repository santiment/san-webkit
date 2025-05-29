import type { Extensions } from '@tiptap/core'
import type { JSONContent } from '@tiptap/core'

import { renderToElement } from '@tiptap/static-renderer/pm/html-string'

/**
 * This function will statically render a Prosemirror Node to a React component using the given extensions
 * @param content The content to render to a React component
 * @param extensions The extensions to use for rendering
 * @param options The options to use for rendering
 * @returns The React element that represents the rendered content
 */
export function renderToSvelteElement({
  content,
  extensions,
  options,
}: {
  content: Node | JSONContent
  extensions: Extensions
  options?: Partial<TiptapStaticRendererOptions<any, Mark, Node>>
}): any {
  return renderToElement<React.ReactNode>({
    renderer: renderJSONContentToReactElement,
    domOutputSpecToElement: domOutputSpecToReactElement,
    mapDefinedTypes: {
      // Map a doc node to concatenated children
      doc: ({ children }) => React.createElement(React.Fragment, {}, children),
      // Map a text node to its text content
      text: ({ node }) => node.text ?? '',
    },
    content,
    extensions,
    options,
  })
}
