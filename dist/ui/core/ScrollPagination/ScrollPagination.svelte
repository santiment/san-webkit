<script lang="ts" generics="T">
  import type { Snippet } from 'svelte'

  import { useIntersection } from './intersection.svelte.js'

  type TProps = {
    items: T[]
    initialPage?: number
    hasMore: boolean
    rootMargin?: string
    loadMore: (page: number) => Promise<T[]>
    children: Snippet<[T[]]>
    loader?: Snippet
  }

  let {
    items = $bindable(),
    initialPage,
    hasMore,
    rootMargin = '650px',
    loadMore,
    children,
    loader,
  }: TProps = $props()

  const { target } = useIntersection(onIntersect, { rootMargin })

  let page = initialPage ?? 1

  let loading = $state(false)

  function onIntersect() {
    if (!hasMore || loading) return

    loading = true
    loadMore(++page)
      .then((newItems) => (items = items.concat(newItems)))
      .finally(() => (loading = false))
  }
</script>

{@render children(items)}

{#if loading}
  {@render loader?.()}
{/if}

{#if hasMore && !loading}
  <div {@attach target} class="h-px" aria-hidden="true"></div>
{/if}
