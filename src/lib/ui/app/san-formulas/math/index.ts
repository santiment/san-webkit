import type { TMetricTargetSelectorInputObject } from '$ui/app/Chart/api/index.js'

import { math, Timeseries } from './core.js'
import { MathOperators } from './_operators.js'
import { MathIndicators } from './_indicators.js'
import { MathChartMetrics } from './_chart-metrics.js'
import { MathModifiers } from './_modifiers.js'
import { MathConditions } from './_conditions.js'
import { MathStrategies } from './_backtest/index.js'

export const DEFINITIONS = {
  ...MathConditions,
  ...MathOperators,
  ...MathIndicators,
  ...MathChartMetrics,
  ...MathModifiers,
  ...MathStrategies,
}

export const TRANSFORMABLE_FNS = new Map(
  Object.entries(DEFINITIONS)
    .map(([key, item]) => ('tempId' in item ? [key, item] : null))
    .filter(Boolean) as any as [
    string,
    { tempId: string; getTransformationVariableName: (scope: Map<any, any>) => string },
  ][],
)

math.import(DEFINITIONS, { override: true })

export { math as SanFormulas, Timeseries } from './core.js'

export function evaluateTransformationScope(
  formulaExpr: string,
  scopeSetup: [string, null | TMetricTargetSelectorInputObject][],
) {
  const scope = new Map<string, any>(
    scopeSetup.map(([varName, selector]) => [varName, new Timeseries([], selector)]),
  )
  math.evaluate(formulaExpr, scope)

  for (const [, controller] of TRANSFORMABLE_FNS) {
    scope.set(controller.tempId, 0)
  }

  return scope
}
