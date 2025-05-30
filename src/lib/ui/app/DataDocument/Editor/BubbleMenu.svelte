<script lang="ts">
  import { type BubbleMenuPluginProps, BubbleMenuPlugin } from '@tiptap/extension-bubble-menu'
  import { type Action } from 'svelte/action'
  import { type Snippet } from 'svelte'

  import { useEditorCtx } from '../ctx/index.svelte.js'

  type TProps = Partial<BubbleMenuPluginProps> & { class?: string; children?: Snippet }

  const {
    class: className,
    pluginKey = 'SvelteTiptapBubbleMenu',
    shouldShow = null,
    children,
    ...rest
  }: TProps = $props()

  const { editor } = useEditorCtx.get()

  const mount: Action = (element) => {
    const currentEditor = editor.$

    if (!currentEditor || currentEditor.isDestroyed) {
      return
    }

    const plugin = BubbleMenuPlugin({
      pluginKey,
      shouldShow,
      ...rest,
      element,
      editor: currentEditor,
    })

    currentEditor.registerPlugin(plugin)

    return {
      destroy: () => currentEditor.unregisterPlugin(pluginKey),
    }
  }
</script>

<div use:mount class={className} style="visibility: hidden;position: absolute">
  {@render children?.()}
</div>
