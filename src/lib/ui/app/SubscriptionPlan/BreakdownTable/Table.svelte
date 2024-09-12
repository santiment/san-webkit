<script lang="ts">
  import type { Snippet } from 'svelte'
  import { CONSUMER_PLANS_BREAKDOWN, BUSINESS_PLANS_BREAKDOWN } from './breakdown.js'
  import Feature from './Feature.svelte'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  let {
    plans = [],
    breakdown = CONSUMER_PLANS_BREAKDOWN,
    children,
  }: {
    plans: Record<string, any>[]
    breakdown: typeof CONSUMER_PLANS_BREAKDOWN | typeof BUSINESS_PLANS_BREAKDOWN
    children: Snippet
  } = $props()
</script>

<div class="table w-full text-base">
  <header class="sticky top-0 z-10 flex w-full border-b">
    {@render children()}
  </header>

  <section class="">
    {#each breakdown as { category, features, link }}
      <section
        class={cn(
          'category-section pt-10 sm:border-none sm:pt-0 [&:not(:last-child)]:border-b',
          features.length === 0 && 'border-none',
        )}
      >
        <div class={cn('tr')}>
          <h4 class="td-h items-center pt-10 text-lg font-semibold sm:!bg-athens sm:pt-0">
            {category}

            {#if link && link.url}
              <Button
                iconOnRight
                icon="pointer"
                href={link.url}
                target="_blank"
                class="ml-3 flex border-l fill-green pl-3 text-base font-normal text-green sm:hidden"
              >
                {link.title}
              </Button>
            {/if}
          </h4>

          {#each plans as _}
            <div class="td !hidden bg-athens sm:!flex"></div>
          {/each}
        </div>

        {#if link && link.url}
          <div class="tr !hidden sm:!flex">
            <Button
              iconOnRight
              icon="pointer"
              href={link.url}
              target="_blank"
              class="td-h justify-end fill-green text-base font-normal text-green"
            >
              {link.title}
            </Button>

            {#each plans as _}
              <div class="td"></div>
            {/each}
          </div>
        {/if}

        {#each features as feature}
          <div class="tr">
            <Feature {plans} {feature} />
          </div>
        {/each}
      </section>
    {/each}
  </section>
</div>

<style lang="postcss">
  .table :global {
    .tr {
      @apply flex w-full divide-x text-center sm:divide-x-0;
    }

    .tr:last-child {
      @apply border-none;
    }

    .category-section > .tr:last-child {
      .td,
      .td-h {
        @apply pb-4 sm:pb-10;
      }
    }

    .td,
    .td-h {
      fill: var(--accent);

      @apply flex items-center px-6 py-4 sm:px-5;
    }

    .td {
      @apply min-w-48 flex-1;
    }

    .tr:not(:first-child) {
      & > .td,
      & > .td-h {
        @apply border-t sm:border-t-0;
      }
    }

    .td-h {
      @apply max-w-80 flex-1 bg-white text-start sm:w-60 sm:border-r;
    }
  }
</style>
