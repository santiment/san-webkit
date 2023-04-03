<script context="module">import { queryProjects, queryErc20Projects, queryStablecoinProjects, queryDeFiProjects } from './../../api/projects';
import { noop } from './../../utils';
import { Controller } from './../../ui/VirtualList/ctx';
export const TABS = [['All', queryProjects], ['ERC20', queryErc20Projects], ['Stablecoins', queryStablecoinProjects], ['DeFi', queryDeFiProjects]];
const virtualController = Controller();</script>

<script>export let tabs;
export let selected;
export let onSelect = noop;

function onClick(tab) {
  var _a;

  (_a = virtualController.scrollTo) === null || _a === void 0 ? void 0 : _a.call(virtualController, 0);
  onSelect(selected = tab);
}</script>

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
