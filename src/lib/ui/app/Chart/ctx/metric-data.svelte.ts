import { switchMap, tap } from 'rxjs'
import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
import { useGlobalParametersCtx, type TGlobalParameters } from './global-parameters.svelte.js'
import { type TSeries } from './series.svelte.js'
import {
  queryGetMetric,
  type TMetricTargetSelectorInputObject,
  type TTimeseriesMetricTransformInputObject,
} from '../api/index.js'

type TLocalParameters = {
  metric: string
  selector?: null | TMetricTargetSelectorInputObject
  transform?: null | TTimeseriesMetricTransformInputObject
}

export function useApiMetricDataFlow(metric: TSeries) {
  const { globalParameters } = useGlobalParametersCtx.get()

  const loadMetricData = useObserveFnCall<{
    localParameters: TLocalParameters
    globalParameters: TGlobalParameters
  }>(() =>
    switchMap(({ localParameters, globalParameters }) => {
      metric.loading.$ = true
      metric.data.$ = []

      return queryGetMetric()({
        metric: localParameters.metric,
        selector: localParameters.selector || globalParameters.selector,
        from: globalParameters.from,
        to: globalParameters.to,
        interval: globalParameters.interval,
      }).pipe(
        tap((data) => {
          const formattedData = metric.transformData?.(data) || data
          metric.data.$ = formattedData
          metric.loading.$ = false
        }),
      )
    }),
  )

  $effect(() => {
    const from = globalParameters.$$.from
    const to = globalParameters.$$.to
    const selector = globalParameters.$$.selector
    const interval = globalParameters.$$.interval
    const includeIncompleteData = globalParameters.$$.includeIncompleteData

    loadMetricData({
      localParameters: {
        metric: metric.key,
        selector: metric.selector.$,
        transform: metric.transform,
      },
      globalParameters: { selector, from, to, interval, includeIncompleteData },
    })
  })
}
