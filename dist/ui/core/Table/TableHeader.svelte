<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '../../utils/index.js'

  type TProps = {
    class?: string
    sticky?: boolean
    children: Snippet
  } & HTMLAttributes<HTMLTableSectionElement>

  const { class: className, children, sticky = false, ...props }: TProps = $props()
</script>

<thead class={cn('', sticky && 'sticky top-0', className)} {...props}>
  {@render children()}
</thead>
