<script lang="ts">
  import type { JSONContent } from '@tiptap/core'

  import { hydrate, onMount, unmount } from 'svelte'

  import BlockContentWrapper from './core/BlockContentWrapper.svelte'
  import { CUSTOM_SCHEMAS_MAP } from './extensions/index.js'

  type THydrationTuple = [NonNullable<(typeof CUSTOM_SCHEMAS_MAP)[string]>, JSONContent]
  type TProps = { content: JSONContent[]; renderedHTML: string }
  let { content, renderedHTML }: TProps = $props()

  let target: HTMLElement

  onMount(() => {
    const components = content
      .map((node): undefined | THydrationTuple => {
        const schema = CUSTOM_SCHEMAS_MAP[node.type!]
        return schema && [schema, node]
      })
      .filter((item): item is THydrationTuple => !!item)
      .map(([schema, node]) => {
        console.log(node)

        return hydrate(BlockContentWrapper, {
          target,
          props: {
            extension: { type: schema.type, config: schema },
          },
        })
      })

    return () => {
      components.forEach((component) => unmount(component))
    }
  })
</script>

<div bind:this={target}>
  {@html renderedHTML}
</div>
