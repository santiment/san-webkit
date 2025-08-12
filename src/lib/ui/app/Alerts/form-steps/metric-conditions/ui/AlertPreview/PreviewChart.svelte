<script lang="ts">
  import type { TAssetApiAlert } from '$ui/app/Alerts/categories/asset/schema.js'
  import type { TNotificationsApiAlert } from '../../../notifications-privacy/schema.js'
  import type { TMetricConditionsApiAlert } from '../../schema.js'
  import type { TApiTimeWindow } from '$ui/app/Alerts/time.js'

  import { map, mergeMap, pipe, tap } from 'rxjs'

  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import { parseRangeString } from '$lib/utils/dates/index.js'
  import Chart from '$ui/app/MiniChart/index.js'
  import Point from '$ui/app/MiniChart/Point.svelte'

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

  $effect(() => {
    fetchData()
  })

  const fetchData = useObserveFnCall(() =>
    pipe(
      map(() => ({
        cooldown: getAvailableCooldown(notifications.cooldown),
        settings: {
          ...asset.settings,
          ...conditions.settings,
          target: { slug: asset.settings.target.slug[0] },
        },
      })),
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

<Chart
  --color="var(--lima)"
  class="w-full"
  height={91}
  width={496}
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
