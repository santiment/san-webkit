<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLTdAttributes } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
  } & HTMLTdAttributes

  const { class: className, children, ...props }: TProps = $props()
</script>

<td class={cn('overflow-hidden px-2 text-ellipsis whitespace-nowrap', className)} {...props}>
  {@render children()}
</td>
