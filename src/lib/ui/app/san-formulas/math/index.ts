import { math } from './core.js'
import { MathOperators } from './_operators.js'
import { MathIndicators } from './_indicators.js'

math.import(
  {
    ...MathOperators,
    ...MathIndicators,
  },
  { override: true },
)

export { math as SanFormulas, Timeseries } from './core.js'
