<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'
  import type { Snippet } from 'svelte'

  import { cn } from '../../utils/index.js'
  import Button from '../../core/Button/Button.svelte'

  type TProps = {
    class?: string
    title: string
    titleClass?: string
    bottomLabel?: string
    bottomAction?: string
    bottomHref?: string
    onBottomClick?: MouseEventHandler<HTMLAnchorElement>
    children: Snippet
  }

  const {
    class: className,
    title,
    titleClass,
    bottomLabel,
    bottomAction,
    bottomHref,
    onBottomClick,
    children,
  }: TProps = $props()
</script>

<section
  class={cn(
    'flex min-w-[480px] flex-col justify-center rounded px-[92px] py-10 text-center',
    'md:relative md:h-[85vh] md:min-w-0 md:flex-1 md:self-start md:p-6',
    className,
  )}
>
  <h2 class={cn('mb-6 text-2xl', titleClass)}>{title}</h2>

  <Button icon="close" href="/" class="absolute right-5 top-5 z-10 hidden fill-waterloo md:flex" />

  {@render children()}

  {#if bottomLabel}
    <div class="mt-6 text-base text-waterloo">
      {bottomLabel}
      <a href={bottomHref} class="link-pointer" onclick={onBottomClick}>{bottomAction}</a>
    </div>
  {/if}
</section>
