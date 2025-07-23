import type { TJobScheduler } from '$lib/utils/job-scheduler.js'
import type {
  TFetchFormulaMetricMessage,
  TFetchMetricMessage,
} from '../metrics-api-worker/types.js'

import { untrack } from 'svelte'

import { type TExecutorOptions } from '$lib/api/index.js'
import { createCtx } from '$lib/utils/index.js'

import { useChartGlobalParametersCtx } from './global-parameters.svelte.js'
import { useMetricSeriesCtx, type TSeries } from './series.svelte.js'
import {
  type TMetricTargetSelectorInputObject,
  type TTimeseriesMetricTransformInputObject,
} from '../api/index.js'
import { workerFetchFormulaMetric, workerFetchMetric } from '../metrics-api-worker/index.js'

export type TLocalParameters = {
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
  index: number,
  settings?: { priority?: number; minimalDelay?: number },
) {
  const { globalParameters } = useChartGlobalParametersCtx.get()
  const { metricSeries } = useMetricSeriesCtx.get()

  function onWorkerData(
    msg: TFetchMetricMessage['response'] | TFetchFormulaMetricMessage['response'],
  ) {
    if ('error' in msg.payload) {
      metric.data.$ = []
      metric.loading.$ = false
      metric.error.$ = msg.payload.error

      return
    }

    const data = msg.payload.timeseries
    const formattedData = metric.transformData?.(data) || data
    metric.data.$ = formattedData
    metric.error.$ = null
    metric.loading.$ = false
  }

  $effect(() => {
    //if (meric.formula?.valid === false) {
    //  return
    //}

    const from = globalParameters.$$.from
    const to = globalParameters.$$.to
    const selector = $state.snapshot(globalParameters.$$.selector)
    const interval = globalParameters.$$.interval || globalParameters.autoInterval$
    const includeIncompleteData = globalParameters.$$.includeIncompleteData

    const { priority, minimalDelay } = untrack(() => settings) || {}
    const parameters = {
      metric: metric.apiMetricName,
      selector: $state.snapshot(metric.selector.$) || selector,
      from,
      to,
      interval,
      includeIncompleteData,
    }

    const payload = { priority, minimalDelay, parameters }
    const workerRequest = metric.formula.$
      ? workerFetchFormulaMetric(
          {
            ...payload,
            index,
            formula: metric.formula.$,
            metrics: metricSeries.asScope$,
          },
          onWorkerData,
        )
      : workerFetchMetric(payload, onWorkerData)

    untrack(() => {
      metric.loading.$ = true
      metric.data.$ = []
    })

    return () => {
      workerRequest.cancel()
    }
  })
}
