<script lang="ts">
  import type { Action } from 'svelte/action'
  import type { JSONContent } from '@tiptap/core'

  import { BlockNoteEditor } from '@blocknote/core'

  import { useEditorCtx } from '../ctx/index.svelte.js'
  import { createEditorSchema } from '../extensions/index.js'

  type TProps = { content: JSONContent[]; renderedHTML?: string }
  let { content, renderedHTML }: TProps = $props()

  const { editor } = useEditorCtx()

  const mount: Action = (element) => {
    const currentEditor = BlockNoteEditor.create({
      schema: createEditorSchema(),
      initialContent: content,
    })

    currentEditor.mount(element)

    editor.$ = currentEditor
  }
</script>

<div use:mount class="relative">
  {@html renderedHTML}
</div>
