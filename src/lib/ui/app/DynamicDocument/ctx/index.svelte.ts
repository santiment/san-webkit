import type { Editor } from '@tiptap/core'

import { createCtx, ss } from '$lib/utils/index.js'

export const useEditorCtx = createCtx('webkit_useEditorCtx', () => {
  const editor = ss<null | Editor>(null)

  return {
    editor,
  }
})
