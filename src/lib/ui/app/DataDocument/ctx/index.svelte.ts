import { createCtx, ss } from '$lib/utils/index.js'

import type { BlockNoteEditor } from '@blocknote/core'

export const useEditorCtx = createCtx('webkit_useEditorCtx', () => {
  const editor = ss<null | BlockNoteEditor>(null)

  return {
    editor,
  }
})
