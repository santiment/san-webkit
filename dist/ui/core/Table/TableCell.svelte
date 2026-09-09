<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLTdAttributes } from 'svelte/elements'

  import { cn } from '../../utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
  } & HTMLTdAttributes

  const { class: className, children, ...props }: TProps = $props()
</script>

<td
  class={cn(
    'overflow-hidden text-ellipsis whitespace-nowrap px-2 group-hover:bg-athens',
    className,
  )}
  {...props}
>
  {@render children()}
</td>
