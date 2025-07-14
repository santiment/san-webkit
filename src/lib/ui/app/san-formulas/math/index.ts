import { math } from './core.js'
import { MathOperators } from './_operators.js'
import { MathIndicators } from './_indicators.js'

export const DEFINITIONS = {
  ...MathOperators,
  ...MathIndicators,
}

math.import(DEFINITIONS, { override: true })

export { math as SanFormulas, Timeseries } from './core.js'
