<script lang="ts">
  import type { Snippet } from 'svelte'
  import Svg from '$ui/core/Svg/index.js'
  import { CONSUMER_PLANS_BREAKDOWN, BUSINESS_PLANS_BREAKDOWN } from './breakdown.js'
  import Feature from './Feature.svelte'

  let {
    plans = [],
    breakdown = CONSUMER_PLANS_BREAKDOWN,
    children,
  }: {
    plans: {}[]
    breakdown: typeof CONSUMER_PLANS_BREAKDOWN | typeof BUSINESS_PLANS_BREAKDOWN
    children: Snippet
  } = $props()
</script>

<div class="relative table w-full text-base">
  {@render children()}

  {#each CONSUMER_PLANS_BREAKDOWN as { category, features, link }}
    <div class="flex items-center justify-between divide-y px-6 pb-4 pt-10">
      <h4 class="text-lg font-semibold">
        {category}
      </h4>

      {#if link && link.url}
        <a href={link.url} target="_blank" class="link btn-0 v-center row">
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

<style>
  .table :global {
    .tr,
    .head {
      @apply border-b;
    }

    .tr {
      @apply flex text-center;
    }

    .td,
    .td-h {
      fill: var(--accent);

      @apply flex flex-1 items-center border-l px-6 py-4;
    }

    .td-h {
      @apply min-w-[331px] max-w-[330px] border-none;

      :global(.desktop) & {
        max-width: 350px;
      }
    }
  }
</style>
