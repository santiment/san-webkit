import { MathModifiers } from '../_modifiers.js'
import { MathOperators } from '../_operators.js'
import { math, Timeseries } from '../core.js'
import { alignTimeseries } from '../utils.js'
import { calculatePerformanceSeries } from './performance.js'

const backtest = math.typed('backtest', {
  'Timeseries, Timeseries': applyTimeseriesBacktest,
  'Timeseries, Timeseries, Object': applyTimeseriesBacktest,
}) as typeof applyTimeseriesBacktest

function applyTimeseriesBacktest(
  priceTimeseries: Timeseries,
  signalTimeseries: Timeseries,
  {
    capital: initialCapital = 1000,
    fee: transactionCost = 0.001,
    stop_loss: stopLossPercentage = 0,
    take_profit: takeProfitPercentage = 0,
  } = {} as Partial<{ capital: number; fee: number; stop_loss: number; take_profit: number }>,
): Timeseries {
  if (!priceTimeseries.values.length) {
    return new Timeseries([], [])
  }

  // Align series and get first timestamp
  const [alignedPrice, alignedSignals] = alignTimeseries(priceTimeseries, signalTimeseries)

  const performance = calculatePerformanceSeries(
    alignedPrice,
    alignedSignals,
    transactionCost,
    stopLossPercentage,
    takeProfitPercentage,
  )

  // Normalize by initial capital and filter results
  const normalizedResults = MathOperators.divide(
    MathOperators.multiply(performance, initialCapital),
    MathModifiers.value_at(performance, alignedSignals.timestamps[0]),
  )

  return normalizedResults
}

export const MathStrategies = {
  backtest,
}
