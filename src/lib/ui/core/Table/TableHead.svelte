<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLThAttributes } from 'svelte/elements'
  import type { SortDirection } from './DataTable/types.js'

  import { cn } from '$ui/utils/index.js'

  import Svg from '../Svg/Svg.svelte'

  type TProps = {
    class?: string
    children: Snippet
    noStyles?: boolean
    isSortable?: boolean
    sortDirection?: SortDirection
  } & HTMLThAttributes

  const {
    class: className,
    children,
    noStyles = false,
    sortDirection,
    isSortable = false,
    ...props
  }: TProps = $props()
</script>

<th
  class={cn(
    !noStyles &&
      'whitespace-nowrap bg-porcelain px-4 py-1.5 font-normal text-waterloo first:rounded-l-md last:rounded-r-md',
    isSortable && 'cursor-pointer',
    className,
  )}
  {...props}
>
  {@render children()}

  {#if isSortable}
    <Svg
      illus
      id="sorted"
      class={cn('invisible inline-block', sortDirection && 'visible')}
      w="6"
      h="8"
      --sorter-up={sortDirection === 'ASC' ? 'var(--waterloo)' : 'var(--mystic)'}
      --sorter-down={sortDirection === 'ASC' ? 'var(--mystic)' : 'var(--waterloo)'}
    />
  {/if}
</th>
