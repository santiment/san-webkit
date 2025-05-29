<script lang="ts">
  import { cn } from '$ui/utils/index.js'
  import type { Component as SvelteComponent } from 'svelte'

  import NodeViewWrapper from './NodeViewWrapper.svelte'
  import { BROWSER } from 'esm-env'

  type TProps = {
    Component: SvelteComponent
    blockType: string
    class?: string
    isFileBlock?: boolean
    domAttributes?: { class?: string }
  }

  let props: TProps = $props()

  //{...Object.fromEntries(
  //   Object.entries(props.blockProps)
  //     .filter(([prop, value]) => {
  //       const spec = props.propSchema[prop]
  //       return !inheritedProps.includes(prop) && value !== spec.default
  //     })
  //     .map(([prop, value]) => {
  //       return [camelToDataKebab(prop), value]
  //     }),
  // )}
</script>

<NodeViewWrapper
  {...props.domAttributes}
  class={cn('bn-block-content', props.domAttributes?.class)}
  ondragover={(event: DragEvent) => event.preventDefault()}
  data-content-type={props.blockType}
  data-file-block={props.isFileBlock === true || undefined}
>
  <props.Component block={props.block} editor={props.editor}></props.Component>
</NodeViewWrapper>
