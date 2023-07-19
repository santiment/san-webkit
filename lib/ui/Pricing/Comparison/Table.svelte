<script>
  import Svg from './../../../ui/Svg/svelte'
  import Feature from './Feature.svelte'
  import { COMPARE_TABLE } from './comapre'

  export let plans = []
  export let isShowingMore = false

  $: items = isShowingMore ? COMPARE_TABLE : COMPARE_TABLE.slice(0, 7)
</script>

<div class="table body-2 relative">
  <slot />

  {#each items as { category, features, link }}
    <div class="head row v-center justify">
      <h4 class="body-1 txt-b">
        {category}
      </h4>

      {#if link && link.url}
        <a href={link.url} target="_blank" class="link btn-0 row v-center">
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

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.head {
  padding: 40px 24px 16px;
}

.link {
  height: 26px;
  --accent: var(--green);
  --accent-hover: var(--green-hover);
}

.table :global(.tr),
.table :global(.head) {
  border-bottom: 1px solid var(--porcelain);
}
.table :global(.tr) {
  display: flex;
  text-align: center;
}
.table :global(.td),
.table :global(.td-h) {
  padding: 14px 24px;
  border-left: 1px solid var(--porcelain);
  flex: 1;
  fill: var(--accent);
  display: flex;
  align-items: center;
}
.table :global(.td-h) {
  max-width: 240px;
  min-width: 201px;
  border: 0;
}
:global(.desktop) .table :global(.td-h) {
  max-width: 350px;
}</style>
