<script lang="ts">import { CONSUMER_PLANS_BREAKDOWN, BUSINESS_PLANS_BREAKDOWN } from "./breakdown.js";
import Feature from "./Feature.svelte";
import Button from "../../../core/Button/index.js";
import { cn } from "../../../utils/index.js";
let {
  source = "",
  plans = [],
  breakdown = CONSUMER_PLANS_BREAKDOWN,
  children
} = $props();
</script>

<div class="table w-full text-base">
  <header class="sticky top-[var(--plans-sticky-top,0)] z-10 flex w-full border-b">
    {@render children()}
  </header>

  {#each breakdown as { category, features, link }}
    <section
      class={cn(
        'category-section pt-10 sm:border-none sm:pt-0 [&:not(:last-child)]:border-b [&>.tr:last-child>*]:sm:!pb-10',
        features.length === 0 && 'border-none',
      )}
    >
      {#snippet pointerSnippet({ url, title }: NonNullable<typeof link>, className = '')}
        <Button
          iconOnRight
          icon="pointer"
          href={url}
          target="_blank"
          class={cn('flex !fill-green text-base font-normal text-green', className)}
          data-type={title}
          data-source="{source}_plans_breakdown"
        >
          {title}
        </Button>
      {/snippet}

      <h4
        class="td-h min-w-full items-center !pt-0 text-lg font-semibold sm:bg-athens sm:!py-[13px]"
      >
        {category}

        {#if link && link.url}
          {@render pointerSnippet(link, 'border-l ml-3 pl-3 sm:hidden')}
        {/if}
      </h4>

      {#if link && link.url}
        <div class="tr !hidden sm:!flex">
          {@render pointerSnippet(link, 'td-h')}

          {#each plans as _}
            <div class="td"></div>
          {/each}
        </div>
      {/if}

      {#each features as feature}
        <div class="tr border-t sm:border-none">
          <Feature {plans} {feature} />
        </div>
      {/each}
    </section>
  {/each}
</div>

<style>
  .table :global {
    .tr {
        display: flex;
    }
    .tr {
        width: 100%;
    }
    .tr > :not([hidden]) ~ :not([hidden]) {
        --tw-divide-x-reverse: 0;
        border-right-width: calc(1px * var(--tw-divide-x-reverse));
        border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }
    .tr {
        text-align: center;
    }
    @media (max-width: 768px) {
        .tr > :not([hidden]) ~ :not([hidden]) {
            --tw-divide-x-reverse: 0;
            border-right-width: calc(0px * var(--tw-divide-x-reverse));
            border-left-width: calc(0px * calc(1 - var(--tw-divide-x-reverse)));
        }
    }

    .td,
    .td-h {
      fill: var(--accent);
    }

    .td,
    .td-h {
        display: flex;
    }

    .td,
    .td-h {
        align-items: center;
    }

    .td,
    .td-h {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .td,
    .td-h {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    @media (max-width: 768px) {
        .td,
    .td-h {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
        }
    }

    .td {
        flex: 1 1 0%;
    }

    .td-h {
        max-width: 20rem;
    }

    .td-h {
        flex: 1 1 0%;
    }

    .td-h {
        text-align: start;
    }

    @media (max-width: 768px) {
        .td-h {
            width: 15rem;
        }
    }

    @media (max-width: 768px) {
        .td-h {
            border-right-width: 1px;
        }
    }
  }
</style>
