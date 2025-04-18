<script lang="ts">
  import type { TAsset } from '$lib/ctx/assets/api.js'
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import ProjectIcon from '$ui/app/ProjectIcon/ProjectIcon.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    item: TAsset
    isActive?: boolean
    children?: Snippet
    onclick?: HTMLAttributes<HTMLButtonElement>['onclick']
  }

  const { class: className, item, isActive = false, onclick, children }: TProps = $props()
  const { slug, logoUrl, name, ticker } = $derived(item)
</script>

<Button
  variant="plain"
  size="auto"
  class={cn('flex items-center gap-2 pb-4 hover:text-green', isActive && 'text-green', className)}
  {onclick}
>
  {@render children?.()}

  <ProjectIcon {slug} {logoUrl} />
  <span class="single-line">{name}</span>

  <span class="text-waterloo">({ticker})</span>
</Button>
