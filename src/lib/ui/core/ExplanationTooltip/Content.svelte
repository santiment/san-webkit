<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { SvelteHTMLElements } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    style?: string
    children: Snippet
  } & SvelteHTMLElements['article']

  const { class: className, style, children, ...rest }: TProps = $props()
</script>

<article {...rest} class={cn('rounded bg-fiord px-3 py-1.5 text-xs text-white', className)} {style}>
  {@render children()}
</article>
