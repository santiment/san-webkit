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
  <header class="sticky top-0 z-10 flex h-[200px] w-full border-b">
    {@render children()}
  </header>

  <section class="">
    {#each breakdown as { category, features, link }}
      <section
        class={cn(
          'category-section md:pt-10 md:[&:not(:last-child)]:border-b',
          features.length === 0 && 'border-none',
        )}
      >
        <div class={cn('tr')}>
          <h4 class="td-h items-center !bg-athens text-lg font-semibold md:!bg-white md:pt-10">
            {category}

            {#if link && link.url}
              <Button
                iconOnRight
                icon="pointer"
                href={link.url}
                target="_blank"
                class="ml-3 hidden border-l fill-green pl-3 text-base font-normal text-green md:flex"
              >
                {link.title}
              </Button>
            {/if}
          </h4>

          {#each plans as _}
            <div class="flex-1 bg-athens md:hidden"></div>
          {/each}
        </div>

        {#if link && link.url}
          <div class="tr md:!hidden">
            <Button
              iconOnRight
              icon="pointer"
              href={link.url}
              target="_blank"
              class="td-h justify-end fill-green text-base font-normal text-green "
            >
              {link.title}
            </Button>

            {#each plans as _}
              <div class="flex-1"></div>
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
      @apply flex w-full divide-x divide-x-reverse text-center md:!divide-x;
    }

    .tr:last-child {
      @apply border-none;
    }

    .category-section > .tr:last-child {
      .td,
      .td-h {
        @apply pb-10 md:pb-4;
      }
    }

    .td,
    .td-h {
      fill: var(--accent);

      @apply flex items-center px-5 py-4 md:px-6;
    }

    .td {
      @apply min-w-48 flex-1;
    }

    .tr:not(:first-child) {
      & > .td,
      & > .td-h {
        @apply md:border-t;
      }
    }

    .td-h {
      @apply sticky left-0 w-60 flex-grow-0 border-r bg-white text-start;
      @apply md:w-auto md:max-w-80 md:flex-1 md:border-r-0;
    }
  }
</style>
