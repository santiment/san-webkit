<script lang="ts">
  import type { Snippet } from 'svelte'

  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  import { CONSUMER_PLANS_BREAKDOWN, BUSINESS_PLANS_BREAKDOWN } from './breakdown.js'
  import Feature from './Feature.svelte'

  let {
    source = '',
    plans = [],
    breakdown = CONSUMER_PLANS_BREAKDOWN,
    children,
  }: {
    source?: string
    plans: Record<string, any>[]
    breakdown: typeof CONSUMER_PLANS_BREAKDOWN | typeof BUSINESS_PLANS_BREAKDOWN
    children: Snippet
  } = $props()
</script>

<div class="table w-full text-base">
  <header class="sticky top-(--plans-sticky-top,0) z-10 flex w-full border-b">
    {@render children()}
  </header>

  {#each breakdown as { category, features, link } (category)}
    <section
      class={cn(
        'category-section pt-10 not-last:border-b sm:border-none sm:pt-0 sm:[&>.tr:last-child>*]:pb-10!',
        features.length === 0 && 'border-none',
      )}
    >
      {#snippet pointerSnippet({ url, title }: NonNullable<typeof link>, className = '')}
        <Button
          variant="link"
          iconOnRight
          icon="pointer"
          href={url}
          target="_blank"
          class={cn('flex fill-green! text-base font-normal text-green', className)}
          data-type={title}
          data-source="{source}_plans_breakdown"
        >
          {title}
        </Button>
      {/snippet}

      <h4
        class="td-h min-w-full items-center pt-0! text-lg font-semibold sm:bg-athens sm:py-[13px]!"
      >
        {category}

        {#if link && link.url}
          {@render pointerSnippet(link, 'border-l ml-3 pl-3 sm:hidden')}
        {/if}
      </h4>

      {#if link && link.url}
        <div class="tr hidden! sm:flex!">
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

<style lang="postcss">
  @reference '#app.css';

  .table :global(.tr) {
    @apply flex w-full text-center;
  }

  .table :global(.tr > :not(:last-child)) {
    @apply border-r sm:border-r-0;
  }

  .table :global(.td),
  .table :global(.td-h) {
    fill: var(--accent);

    @apply flex items-center px-6 py-4 sm:px-5;
  }

  .table :global(.td) {
    @apply flex-1;
  }

  .table :global(.td-h) {
    @apply max-w-80 flex-1 text-start sm:w-60 sm:border-r;
  }
</style>
