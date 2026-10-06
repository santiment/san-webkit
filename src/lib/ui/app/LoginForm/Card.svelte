<script lang="ts">
  import type { Snippet } from 'svelte'

  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
  }

  const { class: className, children }: TProps = $props()
</script>

<article
  class={cn(
    'flex max-w-[600px] flex-col rounded-xl border bg-white px-[120px] py-14 shadow-box',
    'sm:max-w-[unset] sm:items-start sm:rounded-none sm:border-0 sm:px-8 sm:shadow-none',
    className,
  )}
>
  {@render children()}
</article>
