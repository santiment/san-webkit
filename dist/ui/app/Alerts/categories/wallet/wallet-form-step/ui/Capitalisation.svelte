<script lang="ts">
  import type { TWalletState } from '../schema.js'
  import type { NonNullableProperties } from '../../../../../../../utils/types/index.js'

  import { filter, map, pipe, switchMap, tap } from 'rxjs'
  import { onMount } from 'svelte'

  import { useObserveFnCall } from '../../../../../../../utils/observable.svelte.js'
  import Conditions from '../../../../form-steps/metric-conditions/ui/Conditions.svelte'
  import { describeConditions } from '../../../../form-steps/metric-conditions/utils.js'
  import { usdFormatter } from '../../../../../Chart/ctx/formatters.js'

  import { queryAddressAssets } from '../api.js'
  import Info from './Info.svelte'



  type TProps = {
    stepState: { $$: TWalletState }
  }

  const { stepState }: TProps = $props()

  let balance = $state(0)

  const {
    target: { address, infrastructure },
    conditions,
  } = $derived(stepState.$$)

  const loadBalance = useObserveFnCall(() =>
    pipe(
      map(() => ({ address, infrastructure })),
      filter((p): p is NonNullableProperties<typeof p> => !!p.address && !!p.infrastructure),
      switchMap((props) => queryAddressAssets()(props)),
      map((assets) => assets.reduce((acc, { balanceUsd }) => acc + (balanceUsd ?? 0), 0)),
      tap((balanceSum) => (balance = balanceSum)),
    ),
  )

  onMount(() => {
    loadBalance()
  })
</script>

{#if conditions}
  <Conditions
    metric={null}
    {conditions}
    updateConditions={(conditions) => (stepState.$$.conditions = conditions)}
  >
    {#snippet info()}
      <Info>
        Balance {describeConditions(null, conditions)}

        {#snippet description()}
          Current balance = {usdFormatter(balance * 100)}
        {/snippet}
      </Info>
    {/snippet}
  </Conditions>
{/if}
