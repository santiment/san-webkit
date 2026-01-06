import type { TFetchFormulaMetricMessage } from '../types.js'
import type { MathNode } from 'mathjs'

import { BROWSER } from 'esm-env'

import { Query } from '$lib/api/executor.js'
import { ApiCache } from '$lib/api/cache.js'
import { controlledPromisePolyfill } from '$lib/utils/promise.js'
import {
  evaluateTransformationScope,
  SanFormulas,
  Timeseries,
  TRANSFORMABLE_FNS,
} from '$ui/app/san-formulas/math/index.js'

import {
  queryGetMetric,
  type TMetricData,
  type TMetricTargetSelectorInputObject,
} from '../../api/index.js'
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
  const { selector, interval, from, to, aggregation } = parameters
  return queryGetMetric({ executor: Query })({ metric, selector, from, to, interval, aggregation })
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
    result: cachePromiseController.promise.catch(() => {}),
    executor: Query,
    options: { cache: BROWSER, cacheTime: 15 },
  })

  const fetchedMetrics = processRecursiveFormula(index, variables, ctx, (variable, metric) =>
    createFetchJob(variable, metric),
  )

  const transformationScope = evaluateTransformationScope(
    formula.expr,
    variables.map((variable) => [variable.name, ctx.metrics[variable.metricIndex].selector]),
  )

  const parsedExpression = SanFormulas.parse(formula.expr)
  const transformedExpression = parsedExpression.transform((node) => {
    throwImplicitOperationError(node)

    if (node instanceof SanFormulas.FunctionNode && node.fn.name === 'asset_metric') {
      const controller = TRANSFORMABLE_FNS.get(node.fn.name)!

      const variableName = controller.getTransformationVariableName(transformationScope)
      const [apiMetricName, selector] = transformationScope.get(variableName)!

      const variable = { name: variableName }
      const metric = { name: apiMetricName, selector }

      fetchedMetrics.push(createFetchJob(variable, metric))

      return new SanFormulas.SymbolNode(variable.name)
    }

    return node
  })

  function createFetchJob(variable: { name: string }, metric: (typeof ctx)['metrics'][number]) {
    return new Promise<[string, TMetricData, null | TMetricTargetSelectorInputObject]>(
      (resolve, reject) => {
        const rejectAndCancel = (reason?: any) => (
          reject(reason), ctx.cancelJobs(), deleteCache(), reason
        )

        const selector = metric.formula ? null : metric.selector || ctx.parameters.selector

        const dataRequest = () =>
          (metric.formula
            ? fetchFormulaMetric(metric.formula, index, ctx)
            : queryMetric(metric.name, {
                ...ctx.parameters,
                aggregation: metric.aggregation,
                selector: selector!,
              })
          )
            .then((data) => resolve([variable.name, data, selector]))
            .catch(rejectAndCancel)

        ctx.addJob(dataRequest)
      },
    )
  }

  return Promise.all(fetchedMetrics).then((metrics) => {
    const scope = new Map(
      metrics.map(([variable, data, selector]) => [variable, new Timeseries(data, selector)]),
    )

    const rawAnswer = transformedExpression.evaluate(scope)

    const result = SanFormulas.isResultSet(rawAnswer) ? rawAnswer.valueOf().at(-1) : rawAnswer
    //const result = math.evaluate(formula.expr, scope)

    let timeseries: TMetricData = []

    if (result instanceof Timeseries) {
      timeseries = result.toMetricData()
    } else if (typeof result === 'number') {
      // TODO: Populate timeseries with constant number based on from/to and interval
      // Or return a constant number and handle it differently on visualisation level
      timeseries = []
    }

    cachePromiseController.resolve(timeseries)

    //const usedVariables = Array.from(scope.keys()).filter((key) => !key.startsWith('__'))
    //console.log({ usedVariables })

    return timeseries
  })
}

export function validateFormula(expr: string, index: number, chartMetrics: TContext['metrics']) {
  const path: number[] = []
  const ctx = { path, metrics: chartMetrics }

  const parsedExpression = SanFormulas.parse(expr)
  parsedExpression.traverse((node) => {
    throwImplicitOperationError(node)
  })

  const scope = new Map(
    chartMetrics.map((item, index) => [`m${index + 1}`, new Timeseries([], item.selector)]),
  )

  const result = parsedExpression.evaluate(scope)

  // NOTE: First resolving syntax/type errors, then recursion errors
  validateRecursiveFormula(index, expr, ctx)

  return result
}

function processRecursiveFormula<GResult>(
  index: number,
  variables: ReturnType<typeof parseFormulaChartVariables>,
  ctx: Pick<TContext, 'path' | 'metrics'>,
  fn: (variable: (typeof variables)[number], metric: TContext['metrics'][number]) => GResult,
) {
  // Registring visited formula index
  ctx.path.push(index)

  return variables.map((variable) => {
    const index = variable.metricIndex
    const metric = ctx.metrics[index]

    if (metric.formula && ctx.path.length > 30 && ctx.path.includes(index)) {
      throw new Error(
        'Recursive formula expression: ' +
          ctx.path
            .concat(index)
            .map((v) => `m${v + 1}`)
            .join(' ➝ '),
      )
    }

    return fn(variable, metric)
  })
}

function validateRecursiveFormula(
  index: number,
  expr: string,
  ctx: Pick<TContext, 'path' | 'metrics'>,
) {
  const variables = parseFormulaChartVariables(expr)

  processRecursiveFormula(
    index,
    variables,
    ctx,
    (variable, metric) =>
      metric.formula && validateRecursiveFormula(variable.metricIndex, metric.formula.expr, ctx),
  )
}

function throwImplicitOperationError(node: MathNode) {
  if (node instanceof SanFormulas.OperatorNode && node.implicit) {
    throw new Error(`Invalid syntax: Implicit operation (trying "${node.fn}") is not allowed`)
  }
}
