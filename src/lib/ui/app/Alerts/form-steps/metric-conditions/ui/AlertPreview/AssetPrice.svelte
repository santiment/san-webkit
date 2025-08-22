<script lang="ts">
  import { mergeMap, pipe, tap } from 'rxjs'
  import { onMount } from 'svelte'

  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import { cn } from '$ui/utils/index.js'
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import { usdFormatter } from '$lib/utils/formatters/index.js'

  import { queryAssetPriceUsd } from './api.js'

  type TProps = {
    class?: string
    slug: string
  }

  const { slug, class: className }: TProps = $props()

  const { getAssetBySlug } = useAssetsCtx()

  let price = $state<number>()

  const ticker = $derived(getAssetBySlug(slug)?.ticker ?? slug)

  onMount(() => {
    fetchPrice()
  })

  const fetchPrice = useObserveFnCall(() =>
    pipe(
      mergeMap(() => queryAssetPriceUsd()(slug)),
      tap((priceUsd) => (price = priceUsd)),
    ),
  )
</script>

<article class={cn('relative', className)}>
  {#if price}
    1 {ticker} = {usdFormatter(price)}
  {:else}
    <div class="skeleton h-full w-28"></div>
  {/if}
</article>
