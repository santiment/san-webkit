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
</script>

<a
  {href}
  class={cn(
    'group relative flex rounded-md px-3 py-2 hover:bg-athens',
    isCompact ? 'w-[272px]' : 'w-[292px]',
  )}
  target="_blank"
  rel="noreferrer"
  data-type={`open_${id}`}
  data-source="products_dialog"
>
  {#if !isCompact}
    <div
      class={cn(
        'mr-3 flex h-10 w-10 min-w-10 rounded center group-hover:bg-white',
        active
          ? [
              'bg-[var(--accent-light-1)]',
              '[--product-color-1:var(--accent)]',
              '[--product-color-2:var(--accent-light-3)]',
              '[--product-color-3:var(--accent)]',
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
  {/if}

  <div>
    <span class="text-base font-medium text-rhino">
      {title}
    </span>

    <p class="mt-1 text-fiord">{desc}</p>

    {#if note}
      <span class="mt-1 inline-block rounded bg-orange-light-1 px-2 py-1 text-xs text-orange">
        {note}
      </span>
    {/if}
  </div>
</a>
