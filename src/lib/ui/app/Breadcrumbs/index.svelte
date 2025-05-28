<script lang="ts" module>
  export type TLink = {
    title: string
    href: string
  }
</script>

<script lang="ts">
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    links: TLink[]
  }

  const { class: className, links }: TProps = $props()

  const lastIndex = $derived(links.length - 1)
</script>

<article class={cn('relative z-10 flex items-center whitespace-nowrap fill-waterloo', className)}>
  {#each links as { href, title }, i}
    {@const isLast = i === lastIndex}

    <a {href} class={cn('py-1.5', isLast ? 'single-line' : 'text-waterloo')}>{title}</a>

    {#if !isLast}
      <Svg id="arrow-right" w="6" h="8" class="mx-3" />
    {/if}
  {/each}
</article>
