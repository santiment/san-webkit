<script lang="ts">
  import type { Snippet } from 'svelte'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    title: string
    children: Snippet
  }

  const { class: className, title, children }: TProps = $props()
</script>

<section class={cn('overflow-clip rounded border', className)}>
  <h4 class="bg-athens px-4 py-2 text-xs font-medium text-waterloo">{title}</h4>

  {@render children()}
</section>
