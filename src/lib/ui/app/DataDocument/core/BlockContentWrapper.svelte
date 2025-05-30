<script lang="ts">
  import type { NodeViewProps } from '@tiptap/core'

  import { cn } from '$ui/utils/index.js'

  import NodeViewWrapper from './NodeViewWrapper.svelte'

  type TProps = { domAttributes?: { class?: string } } & NodeViewProps

  let { domAttributes, extension, ...props }: TProps = $props()

  // @ts-ignore
  const Component = extension.config.Component

  console.log('extension', extension)
  console.log('props', props)
</script>

<NodeViewWrapper
  {...domAttributes}
  class={cn('bn-block-content', domAttributes?.class)}
  ondragover={(event: DragEvent) => event.preventDefault()}
  data-content-type={extension.type}
>
  <Component></Component>
</NodeViewWrapper>
