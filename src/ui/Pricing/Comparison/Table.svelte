<script>
  import Svg from '@/ui/Svg/svelte'
  import Feature from './Feature.svelte'
  import { COMPARE_TABLE } from './comapre'

  export let plans = []
  export let isShowingMore = false

  function filterTableCompareItems(items, shouldFilter) {
    if (shouldFilter) {
      return COMPARE_TABLE.slice(0, 7)
    }

    return COMPARE_TABLE
  }

  $: tableItems = filterTableCompareItems(plans, isShowingMore)
</script>

<div class="table body-2">
  <slot />

  {#each tableItems as { category, features, link }}
    <div class="head row v-center justify">
      <h4 class="body-1 txt-b">
        {category}
      </h4>

      {#if link && link.url}
        <a href={link.url} target="_blank" class="link btn row v-center">
          {link.title}
          <Svg id="arrow-right" w="5.5" h="10" class="mrg-m mrg--l" />
        </a>
      {/if}
    </div>

    {#each features as feature}
      <div class="tr">
        <Feature {plans} {feature} />
      </div>
    {/each}
  {/each}
</div>

<style lang="scss">
  .head {
    padding: 40px 24px 16px;
  }

  .link {
    --color: var(--green);
    --color-hover: var(--green-hover);
    height: 26px;
  }

  .table :global {
    .tr,
    .head {
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
