<script>
  import Feature from './Feature.svelte'
  import { COMPARE_TABLE, PRO_COMPARED_FEATURES, PRO_PLUS_COMPARED_FEATURES } from './comapre'

  export let plans
</script>

<div class="comparison body-2">
  {#each COMPARE_TABLE as { category, features }}
    <h4 class="body-1 txt-b">{category}</h4>

    {#each features as feature}
      <div class="feature">
        <Feature {plans} {feature} />
      </div>
    {/each}
  {/each}
</div>

<style lang="scss">
  .comparison {
    --accent: var(--orange);
  }

  h4 {
    padding: 40px 24px 16px;
    &:first-child {
      border-top: 1px solid var(--porcelain);
    }
  }

  h4,
  .feature {
    border-bottom: 1px solid var(--porcelain);
  }

  .feature {
    display: flex;
    // align-items: center;
    text-align: center;
  }
</style>
