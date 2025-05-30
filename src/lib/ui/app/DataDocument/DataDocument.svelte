<script lang="ts">
  import type { JSONContent } from '@tiptap/core'

  import { hydrate, onMount, unmount } from 'svelte'

  type TProps = { initialContent: JSONContent[]; renderedHTML: string }
  let { initialContent, renderedHTML }: TProps = $props()

  let target: HTMLElement

  onMount(() => {
    const components = initialContent
      .map((item) => {
        return hydrate(BlockContentWrapper, {
          target,
          props: { Component: AlertComponent, blockType: 'alert' },
        })
      })
      .filter(Boolean)

    return () => {
      components.forEach((component) => unmount(component))
    }
  })
</script>

<div bind:this={target}>
  {@html renderedHTML}
</div>
