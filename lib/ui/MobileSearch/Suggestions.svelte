<script>import Svg from './../../ui/Svg/svelte';
import { getItemLink } from './utils';
export let searchTerm;
export let type;
export let Component;
export let filter;
export let query;
export let show;
let items = [];
let filteredItems = [];
let loading = true;

$: filterItems(searchTerm);

$: getItems(query);

async function filterItems(searchTerm) {
  loading = true;
  filteredItems = searchTerm ? await filter(searchTerm.toLowerCase(), items) : items;
  loading = false;
}

async function getItems(query) {
  loading = true;
  items = await query();
  await filterItems(searchTerm);
}

function onItemClick(event) {
  var _a;

  (_a = window.__onLinkClick) === null || _a === void 0 ? void 0 : _a.call(window, event);
  show = false;
}</script>

<div class="wrapper column mrg-xxl mrg--t mrg--b">
  {#if loading}
    <div class="logo-wrapper column hv-center">
      <Svg illus id="san-logo" w="72" class="logo-FNsm4o" />
    </div>
  {:else}
    {#each filteredItems.slice(0, 100) as item}
      <a
        class="btn body-2 fluid row v-center"
        href={getItemLink(item, type)}
        on:click={onItemClick}
      >
        <svelte:component this={Component} {item} />
      </a>
    {:else}
      <div class="column hv-center mrg-s mrg--t">
        <img src="{process.env.MEDIA_PATH}/illus/empty-search.svg" alt="Empty" />
        <p class="txt-center body-1 mrg-xl mrg--t">Sorry, we couldn’t find <br /> any matches</p>
      </div>
    {/each}
  {/if}
</div>

<style >.wrapper {
  overflow: auto;
  height: calc(100vh - 190px);
  gap: 8px;
}

a {
  min-height: 40px;
  padding: 0 20px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a:focus, a:visited, a:active {
  outline: none;
}

:global(.logo-wrapper) {
  height: 100%;
}

:global(.logo-FNsm4o) {
  animation: load 1s infinite alternate;
}

@keyframes load {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}</style>
