import type { TJobScheduler } from '$lib/utils/job-scheduler.js'

import { untrack } from 'svelte'

import { type TExecutorOptions } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'
import { controlledPromisePolyfill, createCtx } from '$lib/utils/index.js'
import { ApiCache } from '$lib/api/cache.js'

import { useChartGlobalParametersCtx, type TGlobalParameters } from './global-parameters.svelte.js'
import { type TSeries } from './series.svelte.js'
import {
  queryGetMetric,
  type TInterval,
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

export function useApiMetricDataFlow(
  metric: TSeries,
  settings?: { priority?: number; minimalDelay?: number },
) {
  const { globalParameters } = useChartGlobalParametersCtx.get()
  const { fetcher, jobScheduler } = useApiMetricFetchSettingsCtx()

  function loadMetricData({
    localParameters,
    globalParameters,
    scheduledData,
    abortController,
  }: {
    localParameters: TLocalParameters
    globalParameters: TGlobalParameters & { interval: TInterval }
    scheduledData: TScheduledData
    abortController: AbortController
  }) {
    metric.loading.$ = true
    metric.data.$ = []

    const queryData = () =>
      queryGetMetric({ executor: Query, fetcher, signal: abortController.signal })({
        metric: localParameters.metric,
        selector: localParameters.selector || globalParameters.selector,
        from: globalParameters.from,
        to: globalParameters.to,
        interval: globalParameters.interval,
      })
        .then((data) => {
          if (abortController.signal.aborted) {
            return
          }

          const formattedData = metric.transformData?.(data) || data
          metric.data.$ = formattedData
          metric.error.$ = null
          metric.loading.$ = false
        })
        .catch((err) => {
          // NOTE: Returning early if abort signal was run
          if (err.name === 'AbortError') {
            const schema = err.__schema
            if (schema) ApiCache.delete(schema)
            return
          }

          metric.data.$ = []
          metric.loading.$ = false
          metric.error.$ = err
        })
        .finally(() => scheduledData?.jobResolve())

    return scheduledData ? scheduledData.fetchStartPromise.then(queryData) : queryData()
  }

  $effect(() => {
    const from = globalParameters.$$.from
    const to = globalParameters.$$.to
    const selector = $state.snapshot(globalParameters.$$.selector)
    const interval = globalParameters.$$.interval || globalParameters.autoInterval$
    const includeIncompleteData = globalParameters.$$.includeIncompleteData

    const { scheduledData } = createScheduledData(
      jobScheduler,
      untrack(() => $state.snapshot(settings)),
    )

    const abortController = new AbortController()

    loadMetricData({
      abortController,
      scheduledData,
      localParameters: {
        metric: metric.apiMetricName,
        selector: $state.snapshot(metric.selector.$),
        transform: $state.snapshot(metric.transform),
      },
      globalParameters: { selector, from, to, interval, includeIncompleteData },
    })

    return () => {
      abortController.abort()
      scheduledData?.cancel()
    }
  })
}

type TScheduledData = ReturnType<typeof createScheduledData>['scheduledData']
function createScheduledData(
  jobScheduler: undefined | null | TJobScheduler,
  settings?: { minimalDelay?: number; priority?: number },
) {
  if (!jobScheduler) return {}

  const { promise, resolve } = controlledPromisePolyfill()
  const { promise: fetchStartPromise, resolve: fetchStart } = controlledPromisePolyfill()

  const job = jobScheduler.schedule(
    () => {
      fetchStart()
      return promise
    },
    undefined,
    settings,
  )

  return {
    scheduledData: {
      fetchStartPromise,
      jobResolve: resolve,
      cancel() {
        if (job) jobScheduler.cancelJob(job)
      },
    },
  }
}
