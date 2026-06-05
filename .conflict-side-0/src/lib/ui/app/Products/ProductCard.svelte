<script module lang="ts">
  export type TProductCard = Omit<TProps, 'active'>
</script>

<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    id: string
    title: string
    href: string
    desc: string
    dimensions: [number, number]
    active?: boolean
    accent?: string
    note?: string | undefined
    isCompact?: boolean
  }

  const {
    id,
    title,
    href,
    desc,
    dimensions,
    active,
    note = undefined,
    isCompact = false,
  }: TProps = $props()

  const [w, h] = dimensions
  const isLarge = !isCompact
</script>

<a
  {href}
  class={cn(
    'pointer group relative flex',
    isCompact
      ? 'bg-orage-light-1 mb-3 inline-block w-[260px] rounded text-orange last:m-0'
      : 'w-[292px] rounded px-4 py-3 hover:bg-athens',
  )}
  target="_blank"
  data-type={`open_${id}`}
  data-source="products_dialog"
>
  {#if isLarge}
    <div
      class={cn(
        'mr-3 flex h-10 w-10 min-w-10 rounded center group-hover:bg-white',
        active
          ? [
              'bg-[var(--accent-light-1)]',
              '[--product-color-1:var(--accent)]',
              '[--product-color-2:var(--accent-light-3)]',
              '[--product-color-3:var(--accent)',
            ]
          : 'bg-athens',
      )}
    >
      <Svg
        illus
        id="products/{id}"
        {w}
        {h}
        class={cn(
          'group-hover:[--product-color-1:var(--accent)]',
          'group-hover:[--product-color-2:var(--accent-light-3)]',
          'group-hover:[--product-color-3:var(--accent)]',
        )}
      />
    </div>
  {:else}
    <Svg
      id="pointer"
      w="14"
      h="9"
      class="absolute right-0 top-[9px] hidden group-hover:block group-hover:fill-[var(--accent-hover)]"
    />
  {/if}

  <div>
    <h2
      class={cn(
        'text-base font-semibold text-black',
        isCompact && 'group-hover:text-[var(--accent-hover)]',
      )}
    >
      {title}
    </h2>

    <p class="text-waterloo">{desc}</p>

    {#if note}
      <span class="mt-1 inline-block rounded bg-orange-light-1 px-2 py-1 text-xs text-orange">
        {note}
      </span>
    {/if}
  </div>
</a>
