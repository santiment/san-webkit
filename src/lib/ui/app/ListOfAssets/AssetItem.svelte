<script lang="ts">
  import type { TAsset } from '$lib/ctx/assets/api.js'
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import AssetLogo from '$ui/app/AssetLogo/AssetLogo.svelte'

  type TProps = {
    class?: string
    item: TAsset
    isActive?: boolean
    children?: Snippet
    onclick?: HTMLAttributes<HTMLButtonElement>['onclick']
  }

  const { class: className, item, isActive = false, onclick, children }: TProps = $props()
  const { slug, name, ticker } = $derived(item)

  let textEl = $state<HTMLElement>()

  const isOverflow = $derived(!!textEl && textEl.scrollWidth > textEl.offsetWidth)
</script>

<div class="pb-1">
  <Button
    explanation={isOverflow ? `${name} (${ticker})` : undefined}
    size="auto"
    class={cn(
      'flex w-full items-center gap-3 rounded-md px-2 py-1.5 md:px-3 md:py-2 md:text-base',
      isActive && 'text-green',
      className,
    )}
    {onclick}
  >
    {@render children?.()}

    <div class="flex w-full items-center gap-1.5 overflow-hidden">
      <AssetLogo {slug} class="size-4 shrink-0 md:size-5" />
      <span bind:this={textEl} class="single-line">
        <span class="text-fiord">{name}</span>
        <span class="text-casper">{ticker}</span>
      </span>
    </div>
  </Button>
</div>
