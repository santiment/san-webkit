<script lang="ts">
  import { FILTER_ITEMS } from './utils'

  export let filter
</script>

<div class="wrapper row v-center justify body-2">
  {#each Object.keys(FILTER_ITEMS) as item}
    <button class:active={filter === item} on:click={() => (filter = item)}>
      {FILTER_ITEMS[item]}
    </button>
  {/each}
</div>
<div class="divider" />

<style lang="scss">
  .wrapper {
    padding: 20px 20px 0;
  }

  .divider {
    height: 1px;
    background-color: var(--porcelain);
    margin: -1px 20px 0;
  }

  button {
    --color: var(--waterloo);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding-bottom: 10px;

    &:focus,
    &:visited,
    &:active {
      outline: none;
    }
  }

  .active {
    --color: var(--green);
    padding-bottom: 8px;
    border-bottom: 2px solid var(--green);
  }
</style>
