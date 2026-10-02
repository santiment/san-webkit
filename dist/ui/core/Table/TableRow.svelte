<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '../../utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
  } & HTMLAttributes<HTMLTableRowElement>

  const { class: className, children, ...props }: TProps = $props()
</script>

<tr class={cn('group', className)} {...props}>
  {@render children()}
</tr>
