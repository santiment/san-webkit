<script lang="ts">
  import { cn } from '$ui/utils/index.js'

  import ProductCard from './ProductCard.svelte'
  import { business } from './business.js'
  import { chain } from './chain.js'

  type TProps = {
    class?: string
    isCompact?: boolean
    isColumn?: boolean
    active?: string | undefined
  }

  const {
    class: className = '',
    isCompact = false,
    isColumn = false,
    active = undefined,
  }: TProps = $props()
</script>

<div
  class={cn(
    'flex gap-6 px-8 py-8 pb-6 text-sm',
    isCompact && 'px-8 py-6',
    isColumn && 'column [&>h3]:m-0 [&>h3]:mb-4',
    className,
  )}
>
  <section class={cn('column', isColumn && 'border-b border-porcelain pb-6')}>
    <h3 class={cn('mb-5 text-waterloo', isCompact ? 'ml-0' : 'ml-4')}>SAN Business</h3>

    {#each business as product}
      <ProductCard {...product} active={active === product.id} {isCompact} />
    {/each}
  </section>

  <section class="column">
    <h3 class={cn('mb-5 text-waterloo', isCompact ? 'ml-0' : 'ml-4')}>SAN Chain</h3>

    {#each chain as product}
      <ProductCard {...product} active={active === product.id} {isCompact} />
    {/each}
  </section>

  {#if isColumn}
    <section class="max-w-[260px] border-t border-porcelain pt-6 text-base text-waterloo">
      To learn more about Santiment's products, team, or available jobs, visit
      <a class="hover:text-green" target="_blank" href="https://santiment.net/">santiment.net</a>
    </section>
  {/if}
</div>
