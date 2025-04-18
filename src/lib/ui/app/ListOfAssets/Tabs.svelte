<script lang="ts">
  import type { TAssetCategory } from '$lib/ctx/assets/index.svelte.js'

  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  const TabNames: Record<TAssetCategory, string> = {
    all: 'All',
    erc20: 'ERC20',
    stablecoins: 'Stablecoins',
    defi: 'DeFi',
  }

  type TProps = {
    tabs: TAssetCategory[]
    selected: TAssetCategory
    onSelect: (tab: TAssetCategory) => void
  }

  const { tabs, selected, onSelect }: TProps = $props()
</script>

<nav class="flex gap-4 border-b bg-white text-waterloo">
  {#each tabs as tab}
    <Button
      variant="plain"
      size="auto"
      class={cn(
        '-mb-[1px] border-b-2 border-b-transparent px-0.5 pb-2.5 pt-3 hover:text-green',
        selected === tab && 'border-b-green text-green',
      )}
      onclick={() => onSelect(tab)}
    >
      {TabNames[tab]}
    </Button>
  {/each}
</nav>
