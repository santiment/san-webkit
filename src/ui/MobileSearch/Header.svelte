<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  export let show
  export let searchTerm
</script>

<div class="wrapper row v-center mrg-l mrg--b">
  <button class="arrow btn row hv-center mrg-s mrg--r" on:click={() => (show = false)}>
    <Svg id="arrow-left-big" w="11" h="18" />
  </button>
  <div class="relative fluid">
    <input
      bind:value={searchTerm}
      type="text"
      class="input body-2 fluid"
      placeholder="Search for assets, trends..."
    />
    <div class="search row hv-center">
      <Svg id="search" w="12" h="12" />
    </div>
    {#if searchTerm}
      <button class="btn close row hv-center" on:click={() => (searchTerm = '')}>
        <Svg id="close" w="12" h="12" />
      </button>
    {/if}
  </div>
</div>

<style lang="scss">
  .wrapper {
    padding-left: 8px;
    padding-right: 20px;
  }

  .arrow {
    height: 40px;
    min-width: 40px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:focus,
    &:visited,
    &:active {
      outline: none;
    }
  }

  .search {
    height: 16px;
    width: 16px;
    position: absolute;
    top: 12px;
    left: 12px;
    fill: var(--waterloo);
  }

  .close {
    --fill: var(--waterloo);
    --fill-hover: var(--waterloo);

    height: 32px;
    width: 32px;
    position: absolute;
    top: 4px;
    right: 4px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:focus,
    &:visited,
    &:active {
      outline: none;
    }
  }

  input {
    padding: 7px 44px 7px 36px;
    flex-basis: 100%;

    &::placeholder {
      color: var(--waterloo);
    }
  }
</style>
