<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  // https://github.com/sibiraj-s/svelte-tiptap/blob/master/src/lib/NodeViewWrapper.svelte

  import type { SvelteHTMLElements } from 'svelte/elements'

  import { getContext, type Snippet } from 'svelte'

  import { TIPTAP_NODE_VIEW } from './context.js'

  type Props = SvelteHTMLElements[T] & {
    as?: T
    children?: Snippet
  }

  const { as = 'div' as T, children, ...rest }: Props = $props()

  const { onDragStart } = getContext<any>(TIPTAP_NODE_VIEW) || {}

  //onMount(() => {
  //  element.style.whiteSpace = 'normal'
  //})
</script>

<svelte:element
  this={as}
  data-node-view-wrapper=""
  role="none"
  style:white-space="normal"
  {...rest}
  ondragstart={onDragStart}
>
  {@render children?.()}
</svelte:element>
