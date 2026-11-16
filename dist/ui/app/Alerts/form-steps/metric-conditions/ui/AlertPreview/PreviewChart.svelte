<script lang="ts">
  import type { TAssetApiAlert } from '../../../../categories/asset/schema.js'
  import type { TNotificationsApiAlert } from '../../../notifications-privacy/schema.js'
  import type { TMetricConditionsApiAlert } from '../../schema.js'
  import type { TApiTimeWindow } from '../../../../time.js'

  import { debounceTime, map, mergeMap, pipe, tap } from 'rxjs'

  import { useObserveFnCall } from '../../../../../../../utils/observable.svelte.js'
  import { parseRangeString } from '../../../../../../../utils/dates/index.js'
  import Chart from '../../../../../MiniChart/index.js'
  import Point from '../../../../../MiniChart/Point.svelte'

  import { queryHistoricalTriggerPoints } from './api.js'

  type TProps = {
    asset: TAssetApiAlert
    conditions: TMetricConditionsApiAlert
    notifications: TNotificationsApiAlert
  }

  const { asset, conditions, notifications }: TProps = $props()

  type TPoint = { value: number; date: Date; triggered: boolean; pointIndex: number }
  let dataPoints = $state<TPoint[]>([])
  let triggeredPoints = $state<TPoint[]>([])
  let containerWidth = $state(0)
  let chartHeight = $state(0)
  let loading = $state(false)

  $effect(() => {
    fetchData()
  })

  const fetchData = useObserveFnCall(() =>
    pipe(
      tap(() => (loading = true)),
      map(() => ({
        cooldown: getAvailableCooldown(notifications.cooldown),
        settings: {
          ...asset.settings,
          ...conditions.settings,
          target: { slug: asset.settings.target.slug[0] },
        },
      })),
      debounceTime(500),
      mergeMap((props) => queryHistoricalTriggerPoints()(props)),
      map((data) =>
        data.map(
          (point, i): TPoint => ({
            value: point.current,
            date: new Date(point.datetime),
            triggered: point['triggered?'],
            pointIndex: i,
          }),
        ),
      ),
      tap((data) => (dataPoints = data)),
      tap((data) => (triggeredPoints = data.filter(({ triggered }) => triggered))),
      tap(() => (loading = false)),
    ),
  )

  const getAvailableCooldown = (time: TApiTimeWindow): TApiTimeWindow => {
    const { modifier, amount } = parseRangeString(time)

    if (modifier === 'd' || modifier === 'w') {
      return '1d'
    }

    if (modifier === 'm') {
      return '1h'
    }

    return `${amount}${modifier}`
  }
</script>

<article
  bind:clientWidth={containerWidth}
  class="relative flex h-44 w-full flex-col rounded border pb-9 pt-3"
>
  {#if loading}
    <div class="skeleton absolute inset-0"></div>
  {:else}
    <section class="px-3">
      <span class="text-waterloo">Signal was fired: </span>
      <span>{triggeredPoints.length} times in 90 days</span>
    </section>

    <section bind:clientHeight={chartHeight} class="h-full">
      <Chart
        --color="var(--lima)"
        class="w-full"
        height={chartHeight}
        width={containerWidth}
        valueKey="value"
        data={dataPoints}
        margin={4}
      >
        {#snippet children({ points })}
          <g>
            {#each triggeredPoints as data}
              <Point index={data.pointIndex} {points} />
            {/each}
          </g>
        {/snippet}
      </Chart>
    </section>
  {/if}
</article>
