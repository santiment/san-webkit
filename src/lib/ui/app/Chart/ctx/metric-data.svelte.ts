import type { TJobScheduler } from '$lib/utils/job-scheduler.js'

import { catchError, from, of, switchMap, tap } from 'rxjs'

import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
import { type TExecutorOptions } from '$lib/api/index.js'
import { RxQuery } from '$lib/api/executor.js'
import { controlledPromisePolyfill, createCtx } from '$lib/utils/index.js'

import { useChartGlobalParametersCtx, type TGlobalParameters } from './global-parameters.svelte.js'
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

export const useApiMetricFetchSettingsCtx = createCtx(
  'charts_useApiMetricFetchSettings',
  (
    ctx: {
      fetcher?: TExecutorOptions['fetcher']
      jobScheduler?: TJobScheduler
    } = {},
  ) => {
    return ctx
  },
)

export function useApiMetricDataFlow(metric: TSeries) {
  const { globalParameters } = useChartGlobalParametersCtx.get()
  const { fetcher, jobScheduler } = useApiMetricFetchSettingsCtx()

  const loadMetricData = useObserveFnCall<{
    localParameters: TLocalParameters
    globalParameters: TGlobalParameters
    scheduledData: TScheduledData
  }>(() =>
    switchMap(({ localParameters, globalParameters, scheduledData }) => {
      metric.loading.$ = true
      metric.data.$ = []

      const queryData$ = () =>
        queryGetMetric({ executor: RxQuery, fetcher })({
          metric: localParameters.metric,
          selector: localParameters.selector || globalParameters.selector,
          from: globalParameters.from,
          to: globalParameters.to,
          interval: globalParameters.interval,
        }).pipe(
          tap((data) => {
            const formattedData = metric.transformData?.(data) || data
            metric.data.$ = formattedData
            metric.error.$ = null
            metric.loading.$ = false

            scheduledData?.jobResolve()
          }),
          catchError((err) => {
            metric.data.$ = []
            metric.loading.$ = false
            metric.error.$ = err

            scheduledData?.jobReject(err)
            return of(null)
          }),
        )

      return scheduledData
        ? from(scheduledData.fetchStartPromise).pipe(switchMap(queryData$))
        : queryData$()
    }),
  )

  $effect(() => {
    const from = globalParameters.$$.from
    const to = globalParameters.$$.to
    const selector = $state.snapshot(globalParameters.$$.selector)
    const interval = globalParameters.interval$.manual || globalParameters.interval$.auto
    const includeIncompleteData = globalParameters.$$.includeIncompleteData

    const { scheduledData } = createScheduledData(jobScheduler)

    loadMetricData({
      scheduledData,
      localParameters: {
        metric: metric.apiMetricName,
        selector: $state.snapshot(metric.selector.$),
        transform: $state.snapshot(metric.transform),
      },
      globalParameters: { selector, from, to, interval, includeIncompleteData },
    })

    return scheduledData?.cancel
  })
}

type TScheduledData = ReturnType<typeof createScheduledData>['scheduledData']
function createScheduledData(jobScheduler: undefined | null | TJobScheduler) {
  if (!jobScheduler) return {}

  const { promise, resolve, reject } = controlledPromisePolyfill()
  const { promise: fetchStartPromise, resolve: fetchStart } = controlledPromisePolyfill()

  const job = jobScheduler.schedule(() => {
    fetchStart()
    return promise
  })

  return {
    scheduledData: {
      fetchStartPromise,
      jobResolve: resolve,
      jobReject: reject,
      cancel() {
        if (job) jobScheduler.cancelJob(job)
      },
    },
  }
}
