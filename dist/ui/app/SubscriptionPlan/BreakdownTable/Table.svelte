<script lang="ts">import { CONSUMER_PLANS_BREAKDOWN, BUSINESS_PLANS_BREAKDOWN } from "./breakdown.js";
import Feature from "./Feature.svelte";
import Button from "../../../core/Button/index.js";
import { cn } from "../../../utils/index.js";
let {
  plans = [],
  breakdown = CONSUMER_PLANS_BREAKDOWN,
  children
} = $props();
</script>

<div class="relative table w-full text-base [&>*]:border-b">
  {@render children()}

  {#each breakdown as { category, features, link }}
    <div
      class={cn(
        'flex items-center justify-between px-6 pb-4 pt-10',
        features.length === 0 && 'empty border-none pt-[53px]',
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
    .tr {
        display: flex;
    }
    .tr > :not([hidden]) ~ :not([hidden]) {
        --tw-divide-x-reverse: 0;
        border-right-width: calc(1px * var(--tw-divide-x-reverse));
        border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }
    .tr {
        text-align: center;
    }

    .tr:last-child {
        border-style: none;
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
        flex: 1 1 0%;
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

    .td-h {
        min-width: 331px;
    }

    .td-h {
        max-width: 330px;
    }

    .td-h {

      :global(.desktop) & {
        max-width: 350px;
      }
    }
  }
</style>
