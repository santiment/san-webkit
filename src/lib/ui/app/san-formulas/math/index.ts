import { math } from './core.js'
import { MathOperators } from './_operators.js'
import { MathIndicators } from './_indicators.js'
import { MathChartMetrics } from './_chart-metrics.js'

export const DEFINITIONS = {
  ...MathOperators,
  ...MathIndicators,
  ...MathChartMetrics,
}

math.import(DEFINITIONS, { override: true })

export { math as SanFormulas, Timeseries } from './core.js'
