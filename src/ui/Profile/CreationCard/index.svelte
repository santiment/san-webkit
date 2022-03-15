<script lang="ts">
  import Watchlist from './Watchlist.svelte'
  import AddressWatchlist from './AddressWatchlist.svelte'
  import { CreationType } from '../types'
  import { getSEOLinkFromIdAndTitle } from '@/utils/url'

  export let type: CreationType
  export let creation

  const href = getHref(creation)

  function getHref({ id, title, isScreener }) {
    const seoLink = getSEOLinkFromIdAndTitle(id, title)
    switch (type) {
      case CreationType.Layout:
        return '/charts/' + seoLink
      case CreationType.Watchlist:
        return (isScreener ? '/screener/' : '/watchlist/projects/') + seoLink
      case CreationType.AddressWatchlist:
        return '/watchlist/addresses/' + seoLink
    }
  }
</script>

<a {href} class="column border btn" on:click={window.__onLinkClick}>
  <h3 class="mrg-m mrg--b txt-m line-clamp">{creation.title}</h3>

  {#if type === CreationType.Layout}
    <div class="nowrap mrg-a mrg--t c-waterloo txt-m">
      1 assets · {creation.metrics.length} metrics
    </div>
  {:else if type === CreationType.Watchlist}
    <Watchlist {creation} />
  {:else if type === CreationType.AddressWatchlist}
    <AddressWatchlist {creation} />
  {/if}
</a>

<style lang="scss">
  a {
    padding: 12px 16px;
    max-width: 182px;
    flex: 1;
    --bg-hover: var(--athens);
    --color-hover: var(--accent);

    &:hover h3 {
      color: var(--accent);
    }

    &:first-child {
      margin-right: 8px;
    }
  }

  .nowrap {
    white-space: nowrap;
  }
</style>
