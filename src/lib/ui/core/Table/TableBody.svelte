<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
  } & HTMLAttributes<HTMLTableSectionElement>

  const { class: className, children, ...props }: TProps = $props()
</script>

<tbody class={cn('', className)} {...props}>
  {@render children()}
</tbody>
