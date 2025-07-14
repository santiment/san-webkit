import { sma as calculateSMA } from 'indicatorts'

import { math, Timeseries } from './core.js'

const sma = math.typed('sma', {
  'Timeseries, number': (timeseries: Timeseries, period: number) => {
    return new Timeseries(calculateSMA(timeseries.values, { period }), timeseries.timestamps)
  },
})

export const MathIndicators = {
  sma,
}
