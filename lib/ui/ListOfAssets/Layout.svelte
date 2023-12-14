<script>import { onDestroy } from 'svelte';
import { noop } from './../../utils';
import Search from './../../ui/Search.svelte';
import { Controller } from './../../ui/VirtualList/ctx';
import Tabs, { TABS } from './Tabs.svelte';
import { Searcher$$, getSearcher$Ctx } from './search';
const virtualController = Controller();
export let mapItems = ((assets) => assets);
export let accessAsset;
export let tabs = TABS;
export let onEscape = noop;
export let onTabSelect = noop;
export let hasSearch = true;
const { searchTerm$, filter, onKeyUp, onInput, clear } = getSearcher$Ctx() || Searcher$$({ onEscape, accessAsset });
let tab = tabs[0];
let assets = [];
let searchTerm = '';
let loading = true;
$: searchTerm = $searchTerm$;
$: getData(tab[1]);
$: items = mapItems(assets);
$: filtered = searchTerm ? filter(items) : items;
function getData(dataQuery) {
    var _a;
    (_a = virtualController.scrollTo) === null || _a === void 0 ? void 0 : _a.call(virtualController, 0);
    loading = true;
    dataQuery()
        .then((data) => (assets = data))
        .finally(() => (loading = false));
}
onDestroy(() => {
    clear === null || clear === void 0 ? void 0 : clear();
});
</script>

<assets-list class="column">
  {#if hasSearch}
    <Search placeholder="Search for asset" on:input={onInput} on:keyup={onKeyUp} />

    <Tabs {tabs} bind:selected={tab} onSelect={onTabSelect} />
  {/if}

  <section class="relative" class:data-loading={loading}>
    <slot assets={filtered} />

    {#if loading}
      <div class="loading-spin" />
    {/if}
  </section>
</assets-list>

<style>
  .column {
    flex: 1;
    height: 100%;
  }

  section {
    flex: 1;
  }

  section :global(virtual-list-items) {
    padding: 16px 10px 16px 0;
  }

  .data-loading {
    opacity: 0.6;
  }

  .loading-spin {
    --loading-size: 32px;
    border-width: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
</style>
