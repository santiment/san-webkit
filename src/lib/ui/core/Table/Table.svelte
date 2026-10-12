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

<table
  class={cn('relative w-full border-collapse border-spacing-0 text-left indent-0', className)}
  {...props}
>
  {@render children()}
</table>
