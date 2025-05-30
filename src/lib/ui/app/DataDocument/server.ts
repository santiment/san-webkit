import type { JSONContent } from '@tiptap/core'

import { getTipTapExtensions } from '@blocknote/core'
import { renderToHTMLString } from '@tiptap/static-renderer/pm/html-string'
import { render } from 'svelte/server'

import { CUSTOM_SCHEMAS, createEditorSchema } from './extensions/index.js'
import BlockContentWrapper from './core/BlockContentWrapper.svelte'

const schema = createEditorSchema()

const extensions = getTipTapExtensions({
  editor: { settings: { codeBlock: { default: '' } } },

  blockSpecs: schema.blockSpecs,
  styleSpecs: schema.styleSpecs,
  inlineContentSpecs: schema.inlineContentSpecs,
})

export function renderContentToHTMLString(content: JSONContent[], context: Map<string, unknown>) {
  return renderToHTMLString({
    extensions: extensions,
    content: { type: 'doc', content },
    options: {
      nodeMapping: CUSTOM_SCHEMAS.reduce(
        (acc, schema) => ({
          ...acc,
          [schema.type]: () => {
            const rendered = render(BlockContentWrapper, {
              context,
              props: { extension: { type: schema.type, config: schema } },
            })

            return rendered.body
          },
        }),
        {},
      ),
    },
  })
}
