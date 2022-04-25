<script>
  import Feature from './Feature.svelte'
  import { COMPARE_TABLE } from './comapre'

  export let plans
</script>

<div class="table body-2">
  <slot />

  {#each COMPARE_TABLE as { category, features }}
    <h4 class="body-1 txt-b">{category}</h4>

    {#each features as feature}
      <div class="tr">
        <Feature {plans} {feature} />
      </div>
    {/each}
  {/each}
</div>

<style lang="scss">
  h4 {
    padding: 40px 24px 16px;
  }

  .table :global {
    h4,
    .tr {
      border-bottom: 1px solid var(--porcelain);
    }

    .tr {
      display: flex;
      text-align: center;
    }

    .td,
    .td-h {
      padding: 14px 24px;
      border-left: 1px solid var(--porcelain);
      flex: 1;
      fill: var(--accent);
      display: flex;
      align-items: center;
    }

    .td-h {
      max-width: 240px;
      min-width: 201px;
      border: 0;

      :global(.desktop) & {
        max-width: 350px;
      }
    }
  }
</style>
