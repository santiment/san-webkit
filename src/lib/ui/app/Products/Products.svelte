<script lang="ts">
  import { cn } from '$ui/utils/index.js'

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
  class={cn('gap-6 rounded-md px-6 pb-6 pt-8 text-sm column', isCompact && 'w-[320px]', className)}
  style={THEME_MAP[variant]}
>
  <section class="gap-1 column">
    {#each products as product}
      <ProductCard {...product} active={active === product.id} {isCompact} />
    {/each}
  </section>

  <section class="border-t border-porcelain px-4 pt-6 text-fiord">
    <div class="max-w-[248px]">
      To learn more about Santiment's products, team, or available jobs, visit
      <a
        class="text-[var(--accent)] hover:text-[var(--accent-hover)] hover:underline"
        target="_blank"
        rel="noreferrer"
        href="https://santiment.net/">santiment.net</a
      >
    </div>
  </section>
</div>
