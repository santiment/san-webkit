<script lang="ts">
  import type { TWalletState } from '../schema.js'
  import type { NonNullableProperties } from '$lib/utils/types/index.js'

  import { filter, map, pipe, switchMap, tap } from 'rxjs'
  import { onMount } from 'svelte'

  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'
  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import Conditions from '$ui/app/Alerts/form-steps/metric-conditions/ui/Conditions.svelte'
  import { describeConditions } from '$ui/app/Alerts/form-steps/metric-conditions/utils.js'
  import { usdFormatter } from '$ui/app/Chart/ctx/formatters.js'

  import { queryAddressAssets, type TWalletAsset } from '../api.js'
  import Info from './Info.svelte'
  import SelectAsset from './SelectAsset.svelte'

  type TProps = {
    stepState: { $$: TWalletState }
  }

  const { stepState }: TProps = $props()

  const { getAssetBySlug } = useAssetsCtx()

  let assets = $state<TWalletAsset[]>([])

  const {
    target: { address, infrastructure },
    conditions,
    assetSlug,
  } = $derived(stepState.$$)
  const asset = $derived(assetSlug ? getAssetBySlug(assetSlug) : undefined)

  const loadWalletAssets = useObserveFnCall(() =>
    pipe(
      map(() => ({ address, infrastructure })),
      filter((p): p is NonNullableProperties<typeof p> => !!p.address && !!p.infrastructure),
      switchMap((props) => queryAddressAssets()(props)),
      tap((_assets) => (assets = _assets)),
    ),
  )

  onMount(() => {
    loadWalletAssets()
  })
</script>

{#if conditions}
  <Conditions
    metric={null}
    {conditions}
    updateConditions={(conditions) => (stepState.$$.conditions = conditions)}
  >
    {#snippet info()}
      <section class="flex flex-col gap-3">
        <SelectAsset
          selected={assetSlug}
          slugs={assets.map(({ slug }) => slug)}
          onSelect={(slug) => (stepState.$$.assetSlug = slug)}
        />

        {#if asset && +(asset.priceUsd?.toFixed(0) ?? 0) !== 1}
          <Info>
            {asset.name}
            {describeConditions(null, conditions)}

            {#snippet description()}
              1 {asset.ticker} = {usdFormatter(asset.priceUsd ?? 0 * 100)}
            {/snippet}
          </Info>
        {/if}
      </section>
    {/snippet}
  </Conditions>
{/if}
