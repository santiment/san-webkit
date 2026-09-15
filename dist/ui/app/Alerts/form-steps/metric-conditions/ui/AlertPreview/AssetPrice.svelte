<script lang="ts">
  import { mergeMap, pipe, tap } from 'rxjs'
  import { onMount } from 'svelte'

  import { useObserveFnCall } from '../../../../../../../utils/observable.svelte.js'
  import { cn } from '../../../../../../utils/index.js'
  import { useAssetsCtx } from '../../../../../../../ctx/assets/index.svelte.js'
  import { usdFormatter } from '../../../../../../../utils/formatters/index.js'

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
