<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLTdAttributes } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
    noStyles?: boolean
  } & HTMLTdAttributes

  const { class: className, children, noStyles = false, ...props }: TProps = $props()
</script>

<td
  class={cn(
    !noStyles && 'overflow-hidden text-ellipsis whitespace-nowrap px-4 group-hover/row:bg-athens',
    className,
  )}
  {...props}
>
  {@render children()}
</td>
