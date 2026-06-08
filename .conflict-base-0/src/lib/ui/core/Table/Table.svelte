<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLTableAttributes } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
  } & HTMLTableAttributes

  const { class: className, children, ...props }: TProps = $props()
</script>

<table class={cn('relative w-full border-spacing-0 text-left', className)} {...props}>
  {@render children()}
</table>
