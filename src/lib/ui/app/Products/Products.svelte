<script lang="ts">
  import { cn } from '$ui/utils/index.js'

  import ProductCard, { type TProductCard } from './ProductCard.svelte'
  import { business } from './business.js'
  import { chain } from './chain.js'
  import { initiatives } from './initiatives.js'

  type TProps = {
    class?: string
    isCompact?: boolean
    isColumn?: boolean
    active?: string | undefined
    variant?: 'green' | 'blue'
  }

  const THEME_MAP = {
    green: `
      --accent: var(--green);
      --accent-hover: var(--green-hover);
      --accent-light-1: var(--green-light-1);
      --accent-light-3: var(--green-light-3);
    `,

    blue: `
      --accent: var(--blue);
      --accent-hover: var(--blue-hover);
      --accent-light-1: var(--blue-light-1);
      --accent-light-3: var(--blue-light-3);
    `,
  }

  const {
    class: className = '',
    isCompact = false,
    isColumn = false,
    active = undefined,
    variant = 'green',
  }: TProps = $props()
</script>

<div
  class={cn(
    'flex gap-6 px-8 py-8 pb-6 text-sm',
    isCompact && 'px-8 py-6',
    isColumn && 'column [&>h3]:m-0 [&>h3]:mb-4',
    className,
  )}
  style={THEME_MAP[variant]}
>
  <div class="gap-6 column">
    {@render section('SAN business', business)}
    {@render section('Initiatives', initiatives)}
  </div>

  {@render section('SAN Chain', chain)}

  {#if isColumn}
    <section class="max-w-[260px] border-t border-porcelain pt-6 text-base text-waterloo">
      To learn more about Santiment's products, team, or available jobs, visit
      <a class="hover:text-[var(--accent-hover)]" target="_blank" href="https://santiment.net/"
        >santiment.net</a
      >
    </section>
  {/if}
</div>

{#snippet section(title: string, items: TProductCard[])}
  <section class={cn('column', isColumn && 'border-b border-porcelain pb-6')}>
    <h3 class={cn('mb-5 text-waterloo', isCompact ? 'ml-0' : 'ml-4')}>{title}</h3>

    {#each items as product}
      <ProductCard {...product} active={active === product.id} {isCompact} />
    {/each}
  </section>
{/snippet}
