import type { TMetricFormula, TMetricParameters } from '../types.js'

import { Query } from '$lib/api/executor.js'

import { queryGetMetric, type TMetricData } from '../../api/index.js'
import { parseFormulaVariables } from '../utils.js'
import { math, Timeseries } from './math.js'

type TContext = {
  isCancelled: boolean

  parameters: TMetricParameters
  metrics: any[]
  path: number[]

  addJob: (dataRequest: () => Promise<any>) => void
  cancelJobs: () => void
}
export function fetchFormulaMetric(
  formula: TMetricFormula,
  index: number,
  ctx: TContext,
): Promise<TMetricData> {
  if (ctx.isCancelled) {
    return Promise.reject(new Error('Request cancelled'))
  }

  // Registring visited formula index
  ctx.path.push(index)

  const variables = parseFormulaVariables(formula.expr)

  const fetchedMetrics = variables.map((variable) => {
    const index = variable.metricIndex
    const metric = ctx.metrics[index]

    if (metric.formula && ctx.path.includes(index)) {
      throw new Error('Recursive formula expression')
    }

    return new Promise<[string, TMetricData]>((resolve, reject) => {
      const rejectAndCancel = (reason?: any) => (reject(reason), ctx.cancelJobs(), reason)

      const dataRequest = () =>
        (metric.formula
          ? fetchFormulaMetric(metric.formula, index, ctx)
          : queryMetric(metric.name, {
              ...ctx.parameters,
              selector: metric.selector || ctx.parameters.selector,
            })
        )
          .then((data) => resolve([variable.name, data]))
          .catch(rejectAndCancel)

      ctx.addJob(dataRequest)
    })
  })

  return Promise.all(fetchedMetrics).then((metrics) => {
    const scope = new Map(metrics.map(([variable, data]) => [variable, new Timeseries(data)]))

    const result = math.evaluate(formula.expr, scope)

    let timeseries: TMetricData = []

    if (result instanceof Timeseries) {
      timeseries = result.toMetricData()
    } else if (typeof result === 'number') {
      // TODO: Populate timeseries with constant number based on from/to and interval
      timeseries = []
    }

    return timeseries
  })
}

function queryMetric(metric: string, parameters: TMetricParameters) {
  const { selector, interval, from, to } = parameters
  return queryGetMetric({ executor: Query })({ metric, selector, from, to, interval })
}
