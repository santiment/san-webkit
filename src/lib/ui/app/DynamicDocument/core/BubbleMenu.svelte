<script lang="ts">
  import { type BubbleMenuPluginProps, BubbleMenuPlugin } from '@tiptap/extension-bubble-menu'
  import { onMount, type Snippet } from 'svelte'

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

  let element: HTMLElement

  onMount(() => {
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
    return () => currentEditor.unregisterPlugin(pluginKey)
  })
</script>

<div bind:this={element} class={className} style="visibility: hidden;position: absolute">
  {@render children?.()}
</div>
