<script>import ViewportObserver from './../ui/ViewportObserver.svelte';
export let items;
export let query;
export let pageSize;
export let rootMargin = '650px';
let page = 1;
let loading = false;
let hasMore = process.browser && items.length >= pageSize;

function onIntersect() {
  if (hasMore && !loading) loadItems();
}

function loadItems() {
  loading = true;
  query(++page, items).then(data => {
    items = items.concat(data);
    hasMore = data.length === pageSize;
    loading = false;
  });
}

export function reset() {
  page = 1;
  loading = false;
  hasMore = true;
}</script>

<slot {items} />

{#if hasMore}
  <ViewportObserver options={{ rootMargin }} on:intersect={onIntersect}>
    {#if loading}
      <slot name="loader" />
    {/if}
  </ViewportObserver>
{/if}
