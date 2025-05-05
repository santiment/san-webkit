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
    accent,
    note = undefined,
    isCompact = false,
  }: TProps = $props()

  const [w, h] = dimensions
  const isLarge = !isCompact
</script>

<a
  {href}
  class={cn(
    'pointer relative flex',
    isCompact
      ? 'bg-orage-light-1 group mb-3 inline-block w-[260px] rounded text-orange last:m-0'
      : 'group w-[292px] rounded px-4 py-3 hover:bg-athens',
  )}
  style="--accent:{accent}"
>
  {#if isLarge}
    <div
      class={cn(
        'mr-3 flex h-10 w-10 min-w-10 rounded bg-athens center group-hover:bg-white',
        active && '!bg-green-light-1',
      )}
    >
      <Svg illus id="products/{id}" {w} {h} class="group-hover:fill-[var(--accent)]" />
    </div>
  {:else}
    <Svg
      id="pointer"
      w="14"
      h="9"
      class="absolute right-0 top-[9px] hidden group-hover:block group-hover:fill-[var(--accent)]"
    />
  {/if}

  <div>
    <h2
      class={cn(
        'text-base font-semibold text-black',
        isCompact && 'group-hover:text-[var(--accent)]',
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
