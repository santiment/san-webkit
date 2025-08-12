<script lang="ts">
  import type { TApiTimeWindow } from '$ui/app/Alerts/time.js'
  import type { TAlertStep } from '../../../index.svelte.js'

  import { filter, map, mergeMap, pipe, tap } from 'rxjs'

  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import { useAlertFormCtx } from '$ui/app/Alerts/ctx/index.svelte.js'
  import { parseRangeString } from '$lib/utils/dates/index.js'
  import Chart from '$ui/app/MiniChart/index.js'
  import Point from '$ui/app/MiniChart/Point.svelte'

  import { queryHistoricalTriggerPoints } from './api.js'

  const { steps } = useAlertFormCtx.get()

  type TPoint = { value: number; date: Date; triggered: boolean; pointIndex: number }
  let dataPoints = $state<TPoint[]>([])
  let triggeredPoints = $state<TPoint[]>([])

  const getStepAlert = <T extends TAlertStep, GName extends T['name']>(
    step: T,
    name: GName,
  ): ReturnType<Extract<T, { name: GName }>['reduceToApi']> | null =>
    step.name === name ? step.reduceToApi(step.state.$$) : null

  const alertData = $derived.by(() => {
    const asset = getStepAlert(steps[0], 'assets')
    const conditions = getStepAlert(steps[1], 'metric-conditions')
    const notifications = getStepAlert(steps[2], 'notifications-privacy')

    if (!asset || !conditions || !notifications) return null

    return { asset, conditions, notifications }
  })

  const fetchData = useObserveFnCall(() =>
    pipe(
      map(() => alertData),
      filter((data) => !!data),
      map(({ asset, conditions, notifications }) => ({
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

  $effect(() => {
    fetchData()
  })
</script>

<div>
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
</div>
