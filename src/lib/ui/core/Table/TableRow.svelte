<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
  } & HTMLAttributes<HTMLTableRowElement>

  const { class: className, children, ...props }: TProps = $props()
</script>

<tr class={cn('group/row', className)} {...props}>
  {@render children()}
</tr>
