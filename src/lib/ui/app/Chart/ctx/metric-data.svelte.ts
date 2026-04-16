import type { TJobScheduler } from '$lib/utils/job-scheduler.js'

import { untrack } from 'svelte'

import { type TExecutorOptions } from '$lib/api/index.js'
import { createCtx } from '$lib/utils/index.js'
import { MetricType } from '$lib/ctx/metrics-registry/types/index.js'

import {
  FORMULA_WARNING,
  type TFetchFormulaMetricMessage,
  type TFetchMetricMessage,
} from '../metrics-api-worker/types.js'
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
  onData?: () => void,
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

    if ('warning' in msg.payload) {
      const warnings: string[] = []

      if (msg.payload.warning === FORMULA_WARNING.NonFiniteData) {
        warnings.push(`<span class="font-bold">Non-finite data detected in formula result.</span>

This might be caused by an incorrect math operation, e.g., division by zero. Potential solution:

<ul class="list-disc ml-4 column">
  <li>Handle the division programmatically: <code>if(m2 == 0, 0, m1 / m2)</code></li>
</ul>`)
      }

      metric.warnings.$ = warnings
    }

    const data = msg.payload.timeseries ?? [] // NOTE: Ensuring the data is not undefined
    const formattedData = metric.transformData?.(data) || data
    metric.data.$ = formattedData
    metric.error.$ = null
    metric.loading.$ = false

    onData?.()
  }

  $effect(() => {
    //if (meric.formula?.valid === false) {
    //  return
    //}

    if (metric.type === MetricType.DATA_STORE) {
      return
    }

    const from = globalParameters.$$.from
    const to = globalParameters.$$.to

    const interval =
      metric.interval.$ || globalParameters.$$.interval || globalParameters.autoInterval$
    const includeIncompleteData = globalParameters.$$.includeIncompleteData

    const { priority, minimalDelay } = untrack(() => $state.snapshot(settings)) || {}
    const parameters = {
      metric: (metric as { apiMetricName?: string }).apiMetricName ?? '',
      selector:
        ('selector' in metric && $state.snapshot(metric.selector.$)) ||
        $state.snapshot(globalParameters.$$.selector),
      from,
      to,
      interval,
      includeIncompleteData,
      aggregation: metric.aggregation.$,
      version: metric.version.$,
    }

    const payload = { priority, minimalDelay, parameters }
    const workerRequest =
      'formula' in metric && metric.formula
        ? workerFetchFormulaMetric(
            {
              ...payload,
              index,
              formula: $state.snapshot(metric.formula.$),
              metrics: metricSeries.asScope$,
            },
            onWorkerData,
          )
        : workerFetchMetric(payload, onWorkerData)

    untrack(() => {
      metric.loading.$ = true
      metric.warnings.$ = null
      metric.data.$ = []
    })

    return () => {
      workerRequest.cancel()
    }
  })
}
