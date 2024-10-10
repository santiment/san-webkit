<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'
  import type { Snippet } from 'svelte'
  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  type Props = {
    class?: string
    title: string
    titleClass?: string
    bottomLabel?: string
    bottomAction?: string
    bottomHref?: string
    onclick?: MouseEventHandler<HTMLAnchorElement>
    children: Snippet
  }

  const {
    class: className,
    title,
    titleClass,
    bottomLabel,
    bottomAction,
    bottomHref,
    onclick,
    children,
  }: Props = $props()
</script>

<section
  class={cn(
    'flex min-w-[480px] flex-col justify-center rounded border px-24 py-10 text-center',
    'md:relative md:h-[85vh] md:min-w-0 md:flex-1 md:self-start md:border-none md:p-6',
    className,
  )}
>
  <h2 class={cn('mb-4 text-2xl', titleClass)}>{title}</h2>

  <Button icon="close" href="/" class="absolute right-5 top-5 z-10 hidden fill-waterloo md:flex" />

  {@render children()}

  {#if bottomLabel}
    <div class="mt-3 text-base text-waterloo">
      {bottomLabel}
      <a href={bottomHref} class="link-pointer" {onclick}>{bottomAction}</a>
    </div>
  {/if}
</section>
