<script lang="ts">
  import type { TAsset } from '../../../ctx/assets/api.js'
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import Button from '../../core/Button/Button.svelte'
  import { cn } from '../../utils/index.js'
  import AssetLogo from '../AssetLogo/AssetLogo.svelte'

  type TProps = {
    class?: string
    item: TAsset
    isActive?: boolean
    children?: Snippet
    onclick?: HTMLAttributes<HTMLButtonElement>['onclick']
  }

  const { class: className, item, isActive = false, onclick, children }: TProps = $props()
  const { slug, name, ticker } = $derived(item)
</script>

<Button
  variant="plain"
  size="auto"
  class={cn('flex items-center gap-2 pb-4 hover:text-green', isActive && 'text-green', className)}
  {onclick}
>
  {@render children?.()}

  <AssetLogo {slug} />
  <span class="single-line">{name}</span>

  <span class="text-waterloo">({ticker})</span>
</Button>
