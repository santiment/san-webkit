<script lang="ts">
  import type { Snippet } from 'svelte'
  import Svg from '$ui/core/Svg/index.js'
  import { CONSUMER_PLANS_BREAKDOWN, BUSINESS_PLANS_BREAKDOWN } from './breakdown.js'
  import Feature from './Feature.svelte'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

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

<div class="relative table w-full divide-y text-base">
  {@render children()}

  {#each CONSUMER_PLANS_BREAKDOWN as { category, features, link }}
    <div
      class={cn(
        'flex items-center justify-between divide-y px-6 pb-4 pt-10',
        features.length === 0 && 'empty pt-[53px]',
      )}
    >
      <h4 class="flex items-center text-lg font-semibold">
        {category}

        {#if link && link.url}
          <Button
            iconOnRight
            icon="pointer"
            href={link.url}
            target="_blank"
            class="ml-3 border-l fill-green pl-3 text-base font-normal text-green"
          >
            {link.title}
          </Button>
        {/if}
      </h4>
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
    .empty + .divide-y {
      border: none;
    }

    .tr,
    .head {
      /* @apply border-b; */
    }

    .tr {
      @apply flex divide-x text-center;
    }

    .td,
    .td-h {
      fill: var(--accent);

      @apply flex flex-1 items-center px-6 py-4;
    }

    .td-h {
      @apply min-w-[331px] max-w-[330px];

      :global(.desktop) & {
        max-width: 350px;
      }
    }
  }
</style>
