<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLThAttributes } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
  } & HTMLThAttributes

  const { class: className, children, ...props }: TProps = $props()
</script>

<th
  class={cn(
    'whitespace-nowrap border-b bg-athens px-[15px] py-[5px] font-medium text-casper',
    className,
  )}
  {...props}
>
  {@render children()}
</th>
