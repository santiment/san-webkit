<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'

  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  type TProps = {
    class?: string
    title: string
    titleClass?: string
    bottomLabel?: string
    bottomAction?: string
    bottomHref?: string
    onBottomClick?: ComponentProps<typeof Button>['onclick']
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
    'flex min-w-[408px] flex-col justify-center rounded px-14 py-10 text-center ',
    'sm:min-w-0 sm:flex-1 sm:justify-start sm:self-start sm:px-8 sm:py-16',
    className,
  )}
>
  <h2 class={cn('mb-6 text-2xl sm:mb-8 sm:font-medium', titleClass)}>{title}</h2>

  {@render children()}

  {#if bottomLabel}
    <div class="mt-6 text-base text-fiord">
      {bottomLabel}
      <Button href={bottomHref} variant="link" onclick={onBottomClick}>{bottomAction}</Button>
    </div>
  {/if}
</section>
