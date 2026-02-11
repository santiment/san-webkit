<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLThAttributes } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
    noStyles?: boolean
  } & HTMLThAttributes

  const { class: className, children, noStyles = false, ...props }: TProps = $props()
</script>

<th
  class={cn(
    !noStyles &&
      'whitespace-nowrap bg-porcelain px-4 py-1.5 font-normal text-waterloo first:rounded-l-md last:rounded-r-md',
    className,
  )}
  {...props}
>
  {@render children()}
</th>
