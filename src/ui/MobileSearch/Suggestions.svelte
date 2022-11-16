<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { getItemLink } from './utils'

  export let searchTerm
  export let type
  export let Component
  export let filter = (searchTerm, items) => Promise.resolve([])
  export let query = () => Promise.resolve([])
  let items = []
  let filteredItems = []
  let loading = true

  $: filterItems(searchTerm)
  $: getItems(query)

  async function filterItems(searchTerm) {
    loading = true
    filteredItems = await filter(searchTerm, items)
    loading = false
  }

  async function getItems(query) {
    loading = true
    const data = await query()
    items = data
    filteredItems = data
    loading = false
  }
</script>

<div class="wrapper column mrg-xxl mrg--t mrg--b">
  {#if loading}
    <div class="logo-wrapper column hv-center">
      <Svg illus id="san-logo" w="72" class="$style.logo" />
    </div>
  {:else}
    {#each filteredItems.slice(0, 100) as item}
      {@const href = getItemLink(item, type)}
      <a
        class="btn body-2 fluid row v-center"
        {href}
        on:click|preventDefault={window.__onLinkClick}
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

<style lang="scss">
  .wrapper {
    overflow: auto;
    height: calc(100vh - 190px);
    gap: 8px;
  }

  a {
    min-height: 40px;
    padding: 0 20px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:focus,
    &:visited,
    &:active {
      outline: none;
    }
  }

  .logo-wrapper {
    height: 100%;
  }

  .logo {
    animation: load 1s infinite alternate;
  }

  @keyframes load {
    from {
      transform: scale(0.9);
    }

    to {
      transform: scale(1);
    }
  }
</style>
