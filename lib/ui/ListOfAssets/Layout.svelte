<script>import { noop } from './../../utils';
import { debounce$$ } from './../../utils/fn';
import Search from './../../ui/Search.svelte';
import { Controller } from './../../ui/VirtualList/ctx';
import Tabs, { TABS } from './Tabs.svelte';
const virtualController = Controller();
export let mapItems = assets => assets;
export let accessAsset;
export let tabs = TABS;
export let onEscape = noop;
export let onTabSelect = noop;
let tab = tabs[0];
let assets = [];
let searchTerm = '';
let loading = true;

$: getData(tab[1]);

$: items = mapItems(assets);

$: filtered = searchTerm ? filter(items) : items;

const onSearch$ = debounce$$(250, value => searchTerm = value);

const onInput = ({
  currentTarget
}) => $onSearch$(currentTarget.value);

const match = (value, target) => target.toLowerCase().includes(value);

const matchAsset = (value, {
  slug,
  ticker,
  name
}) => match(value, slug) || match(value, ticker) || match(value, name);

function filter(items) {
  const value = searchTerm.toLowerCase();
  return items.filter(item => matchAsset(value, accessAsset(item)));
}

function getData(dataQuery) {
  var _a;

  (_a = virtualController.scrollTo) === null || _a === void 0 ? void 0 : _a.call(virtualController, 0);
  loading = true;
  dataQuery().then(data => assets = data).finally(() => loading = false);
}

function onKeyUp({
  currentTarget,
  code
}) {
  if (!currentTarget) return;
  const inputNode = currentTarget;

  if (code === 'Escape') {
    if (searchTerm) inputNode.value = searchTerm = '';else onEscape();
  }
}</script>

<assets-list class="column">
  <Search placeholder="Search for asset" on:input={onInput} on:keyup={onKeyUp} />

  <Tabs {tabs} bind:selected={tab} onSelect={onTabSelect} />

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
    padding: 16px 0;
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
