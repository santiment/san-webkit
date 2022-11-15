<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import InputWithIcon from '@/ui/InputWithIcon.svelte'

  export let show
  export let searchTerm

  function onInput({ currentTarget }) {
    searchTerm = currentTarget.value
  }
</script>

<div class="wrapper row v-center mrg-l mrg--b">
  <button class="arrow btn row hv-center mrg-s mrg--r" on:click={() => (show = false)}>
    <Svg id="arrow-left-big" w="11" h="18" />
  </button>
  <div class="relative fluid input-wrapper">
    <InputWithIcon
      value={searchTerm}
      on:input={onInput}
      placeholder="Search for assets, trends..."
      big
      class="$style.input body-2"
    >
      <div class="search row hv-center" slot="left">
        <Svg id="search" w="12" />
      </div>
      {#if searchTerm}
        <button class="btn close row hv-center" on:click={() => (searchTerm = '')}>
          <Svg id="close" w="12" />
        </button>
      {/if}
    </InputWithIcon>
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
    top: 11px;
    left: 11px;
    fill: var(--waterloo);
  }

  .close {
    --fill: var(--waterloo);
    --fill-hover: var(--waterloo);

    height: 32px;
    width: 32px;
    position: absolute;
    top: 3px;
    right: 4px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:focus,
    &:visited,
    &:active {
      outline: none;
    }
  }

  .input-wrapper {
    flex-basis: 100%;

    &::placeholder {
      color: var(--waterloo);
    }
  }

  .input {
    --left: 36px !important;

    > :global(input) {
      padding: 8px 44px 8px 36px;
    }
  }
</style>
