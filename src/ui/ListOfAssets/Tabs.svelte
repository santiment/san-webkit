<script lang="ts" context="module">
  import type { Asset } from './api'

  import {
    queryProjects,
    queryErc20Projects,
    queryStablecoinProjects,
    queryDeFiProjects,
  } from '@/api/projects'

  export const TABS: [string, () => Promise<Asset[]>][] = [
    ['All', queryProjects],
    ['ERC20', queryErc20Projects],
    ['Stablecoins', queryStablecoinProjects],
    ['DeFi', queryDeFiProjects],
  ]
</script>

<script lang="ts">
  export let tabs: typeof TABS
  export let selected: typeof tabs[number]

  function onClick(tab: typeof TABS[number]) {
    selected = tab
  }
</script>

<nav class="row c-waterloo">
  {#each tabs as tab}
    <button class="btn" class:active={selected === tab} on:click={() => onClick(tab)}>
      {tab[0]}
    </button>
  {/each}
</nav>

<style>
  nav {
    gap: 16px;
    background: var(--white);
    border-bottom: 1px solid var(--porcelain);
  }

  .btn {
    border-radius: 0;
    padding: 12px 2px 10px;
    margin-bottom: -1px;
    border-bottom: 2px solid transparent;
    --color-hover: var(--green);
  }

  .active {
    --color: var(--green);
    border-bottom-color: var(--green);
  }
</style>
