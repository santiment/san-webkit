<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    height?: number
    class?: string
    children: Snippet
  } & HTMLAttributes<HTMLTableRowElement>

  let { class: className, height = $bindable(), children, ...props }: TProps = $props()
</script>

<tr bind:clientHeight={height} class={cn('group/row', className)} {...props}>
  {@render children()}
</tr>
