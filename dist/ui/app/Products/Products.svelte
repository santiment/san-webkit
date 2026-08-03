<script lang="ts">
  import { cn } from '../../utils/index.js'

  import ProductCard from './ProductCard.svelte'
  import { products } from './products.js'

  type TProps = {
    class?: string
    isCompact?: boolean
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
    active = undefined,
    variant = 'green',
  }: TProps = $props()
</script>

<div
  class={cn('gap-6 px-8 py-8 pb-6 text-sm column', isCompact && 'px-8 py-6', className)}
  style={THEME_MAP[variant]}
>
  <section class="column">
    {#each products as product}
      <ProductCard {...product} active={active === product.id} {isCompact} />
    {/each}
  </section>

  <section class="max-w-[260px] border-t border-porcelain pt-6 text-sm text-waterloo">
    Visit
    <a class="hover:text-[var(--accent-hover)]" target="_blank" href="https://santiment.net/"
      >santiment.net</a
    >
    for more
  </section>
</div>
