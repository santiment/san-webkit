<script lang="ts">
  import type { TApiTimeWindow } from '$ui/app/Alerts/time.js'
  import type { TAlertStep } from '../../../index.svelte.js'

  import { filter, map, mergeMap, pipe, tap } from 'rxjs'

  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import { useAlertFormCtx } from '$ui/app/Alerts/ctx/index.svelte.js'
  import { parseRangeString } from '$lib/utils/dates/index.js'

  import { queryHistoricalTriggerPoints } from './api.js'

  // type TProps = {}

  // const {}: TProps = $props()

  const { steps } = useAlertFormCtx.get()

  const fetchData = useObserveFnCall(() =>
    pipe(
      map(() => steps),
      map((steps) => {
        const asset = getStepAlert(steps[0], 'assets')
        const conditions = getStepAlert(steps[1], 'metric-conditions')
        const notifications = getStepAlert(steps[2], 'notifications-privacy')

        if (!asset || !conditions || !notifications) return null

        return { asset, conditions, notifications }
      }),
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
      tap((data) => console.log({ data })),
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

  const getStepAlert = <T extends TAlertStep, GName extends T['name']>(
    step: T,
    name: GName,
  ): ReturnType<Extract<T, { name: GName }>['reduceToApi']> | null =>
    step.name === name ? step.reduceToApi(step.state.$$) : null

  $effect(() => {
    fetchData()
  })
</script>

TEST
