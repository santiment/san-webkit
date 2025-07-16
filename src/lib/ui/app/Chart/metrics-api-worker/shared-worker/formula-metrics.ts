import type { TFetchFormulaMetricMessage } from '../types.js'

import { BROWSER } from 'esm-env'

import { Query } from '$lib/api/executor.js'
import { ApiCache } from '$lib/api/cache.js'
import { controlledPromisePolyfill } from '$lib/utils/promise.js'
import { SanFormulas, Timeseries } from '$ui/app/san-formulas/math/index.js'

import { queryGetMetric, type TMetricData } from '../../api/index.js'
import { parseFormulaChartVariables } from '../utils.js'

type TContext = {
  isCancelled: boolean

  parameters: TFetchFormulaMetricMessage['request']['payload']['parameters']
  metrics: TFetchFormulaMetricMessage['request']['payload']['metrics']
  path: number[]

  addJob: (dataRequest: () => Promise<any>) => void
  cancelJobs: () => void
}

function queryMetric(metric: string, parameters: TContext['parameters']) {
  const { selector, interval, from, to } = parameters
  return queryGetMetric({ executor: Query })({ metric, selector, from, to, interval })
}

function getFormulaCacheKey(
  formula: { expr: string },
  variables: { metricIndex: number }[],
  ctx: TContext,
) {
  const { metrics, parameters } = ctx
  const { from, to, interval, selector } = parameters

  return JSON.stringify({
    formula: formula.expr,
    parameters: { from, to, selector, interval },
    metrics: variables.map((variable) => metrics[variable.metricIndex]),
  })
}

export function fetchFormulaMetric(
  formula: TFetchFormulaMetricMessage['request']['payload']['formula'],
  index: TFetchFormulaMetricMessage['request']['payload']['index'],
  ctx: TContext,
): Promise<TMetricData> {
  if (ctx.isCancelled) {
    return Promise.reject(new Error('Request cancelled'))
  }

  const variables = parseFormulaChartVariables(formula.expr)

  const cacheKey = JSON.stringify(getFormulaCacheKey(formula, variables, ctx))
  const cached = ApiCache.get(cacheKey, Query)

  if (cached) {
    return cached as Promise<TMetricData>
  }

  const cachePromiseController = controlledPromisePolyfill()
  const deleteCache = () => (cachePromiseController.reject(), ApiCache.delete(cacheKey))

  ApiCache.add(cacheKey, {
    result: cachePromiseController.promise,
    executor: Query,
    options: { cache: BROWSER, cacheTime: 15 },
  })

  // Registring visited formula index
  ctx.path.push(index)

  const fetchedMetrics = variables.map((variable) => {
    const index = variable.metricIndex
    const metric = ctx.metrics[index]

    if (metric.formula && ctx.path.includes(index)) {
      throw new Error('Recursive formula expression')
    }

    return createFetchJob(variable, metric)
  })

  const parsedExpression = SanFormulas.parse(formula.expr)
  const transformedExpression = parsedExpression.transform((node) => {
    if (node instanceof SanFormulas.FunctionNode && node.fn.name === 'asset_metric') {
      const [metricNameNode, slugNode] = node.args

      const variable = { name: '__asset_metric_1' }
      const metric = { name: metricNameNode.value, selector: { slug: slugNode.value } }

      fetchedMetrics.push(createFetchJob(variable, metric))

      return new SanFormulas.SymbolNode(variable.name)
    }

    return node
  })

  function createFetchJob(variable: { name: string }, metric: (typeof ctx)['metrics'][number]) {
    return new Promise<[string, TMetricData]>((resolve, reject) => {
      const rejectAndCancel = (reason?: any) => (
        reject(reason), ctx.cancelJobs(), deleteCache(), reason
      )

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
  }

  return Promise.all(fetchedMetrics).then((metrics) => {
    const scope = new Map(metrics.map(([variable, data]) => [variable, new Timeseries(data)]))

    const compiledFormula = transformedExpression.compile()
    const rawAnswer = compiledFormula.evaluate(scope)

    const result = SanFormulas.isResultSet(rawAnswer) ? rawAnswer.valueOf().at(-1) : rawAnswer
    //const result = math.evaluate(formula.expr, scope)

    let timeseries: TMetricData = []

    if (result instanceof Timeseries) {
      timeseries = result.toMetricData()
    } else if (typeof result === 'number') {
      // TODO: Populate timeseries with constant number based on from/to and interval
      timeseries = []
    }

    cachePromiseController.resolve(timeseries)

    const usedVariables = Array.from(scope.keys()).filter((key) => !key.startsWith('__'))
    console.log({ usedVariables })

    return timeseries
  })
}

export function validateFormula(expr: string, scopeVariables: string[]) {
  const scope = new Map(scopeVariables.map((item) => [item, new Timeseries([])]))

  return SanFormulas.evaluate(expr, scope)
}
