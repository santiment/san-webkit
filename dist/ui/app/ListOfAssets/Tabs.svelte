<script lang="ts" module>
  import {
    queryAllProjects,
    queryDeFiProjects,
    queryErc20Projects,
    queryStablecoinProjects,
  } from '../../../ctx/assets/api.js'
  import { exactObjectKeys } from '../../../utils/object.js'

  export type TabKey = keyof typeof TABS

  const Tab = <GQuery extends (...args: any[]) => any>(query: GQuery, label: string) => ({
    query,
    label,
  })

  export const TABS = {
    all: Tab(queryAllProjects, 'All'),
    erc20: Tab(queryErc20Projects, 'ERC20'),
    stablecoins: Tab(queryStablecoinProjects, 'Stablecoins'),
    defi: Tab(queryDeFiProjects, 'DeFi'),
  }

  export const tabKeys = exactObjectKeys(TABS)
</script>

<script lang="ts">
  import Button from '../../core/Button/Button.svelte'
  import { cn } from '../../utils/index.js'

  type TProps = {
    selected: TabKey
    onSelect: (tab: TabKey) => void
  }

  const { selected, onSelect }: TProps = $props()
</script>

<nav class="bg-inherit flex gap-4 border-b text-waterloo">
  {#each tabKeys as tab}
    <Button
      variant="plain"
      size="auto"
      class={cn(
        '-mb-[1px] border-b-2 border-b-transparent px-0.5 pb-2.5 pt-3 hover:text-green',
        selected === tab && 'border-b-green text-green',
      )}
      onclick={() => onSelect(tab)}
    >
      {TABS[tab].label}
    </Button>
  {/each}
</nav>
