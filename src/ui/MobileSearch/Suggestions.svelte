<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import { getItemLink } from './utils'

  export let items = [] as any[]
  export let loading = false
  export let filter
  export let onItemClick = (event, item) => {}
</script>

<div class="wrapper column mrg-xxl mrg--t mrg--b">
  {#each items.slice(0, 100) as item}
    {@const href = getItemLink(item, filter)}
    <a
      class="btn body-2 fluid row v-center"
      {href}
      on:click|preventDefault={(event) => onItemClick(event, item)}
    >
      <slot {item} />
    </a>
  {:else}
    {#if loading}
      <div class="logo-wrapper column hv-center">
        <Svg illus id="san-logo" w="72" h="72" class="$style.logo" />
      </div>
    {:else}
      <div class="column hv-center mrg-s mrg--t">
        <img src="{process.env.MEDIA_PATH}/illus/empty-search.svg" alt="Empty" />
        <p class="txt-center body-1 mrg-xl mrg--t">Sorry, we couldn’t find <br /> any matches</p>
      </div>
    {/if}
  {/each}
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
