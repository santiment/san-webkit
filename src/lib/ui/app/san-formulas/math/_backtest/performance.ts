import { Timeseries } from '../core.js'
import { MathModifiers } from '../_modifiers.js'
import { MathOperators } from '../_operators.js'

/**
 * Calculates the cumulative performance series of a trading strategy
 *
 * @param priceSeries - Time series of asset prices (e.g., daily closing prices)
 * @param signalSeries - Time series of trading signals (-1, 0, 1) where:
 *                       -1 = 100% short, 0 = neutral/no position (100% cash), 1 = 100% long
 * @param transactionCost - Proportional transaction cost per trade (default: 0.1%)
 * @param stopLossPercentage - Maximum loss percentage per position before automatic exit (e.g., 0.05 for 5% stop loss)
 * @param takeProfitPercentage - Maximum profit percentage per position before automatic exit (e.g., 0.05 for 5% take profit)
 * @returns Time series of cumulative strategy performance (starting at 1.0)
 *
 * @example
 * // Calculate performance with 0.2% transaction costs
 * const performance = calculatePerformanceSeries(prices, signals, 0.002);
 */
export function calculatePerformanceSeries(
  priceSeries: Timeseries,
  signalSeries: Timeseries,
  transactionCost: number = 0.001,
  stopLossPercentage?: number,
  takeProfitPercentage?: number,
): Timeseries {
  // Calculate daily returns from price series
  const dailyReturns = calculateDailyReturns(priceSeries)

  // Apply trading signals to returns (with 1-day lag for realistic execution)
  const strategyReturns = applyTradingSignals(dailyReturns, signalSeries)

  // Apply stop loss protection if specified
  const returnsWithStopLossAndProfit =
    stopLossPercentage || takeProfitPercentage
      ? applyStopLossProtection(
          strategyReturns,
          signalSeries,
          stopLossPercentage,
          takeProfitPercentage,
        )
      : strategyReturns

  // Apply transaction costs based on position changes
  const returnsAfterCosts = applyTransactionCosts(
    returnsWithStopLossAndProfit,
    signalSeries,
    transactionCost,
  )

  // Calculate cumulative performance with position filtering
  const cumulativePerformance = calculateCumulativePerformance(returnsAfterCosts, signalSeries)

  return cumulativePerformance
}

/**
 * Calculates daily percentage returns from price series
 */
function calculateDailyReturns(priceSeries: Timeseries): Timeseries {
  // Returns = (Price_t / Price_{t-1}) - 1
  return MathOperators.subtract(
    MathOperators.divide(priceSeries, MathModifiers.shift(priceSeries, 1)),
    1,
  )
}

/**
 * Applies trading signals to daily returns with 1-day execution lag
 */
function applyTradingSignals(dailyReturns: Timeseries, signalSeries: Timeseries): Timeseries {
  // Shift signals by 1 timestamp (e.g. 1 day) to simulate realistic trade execution
  // (today's signal is executed at next (e.g. tomorrow's) open/close)
  const laggedSignals = MathModifiers.shift(signalSeries, 1)

  // Strategy return = Market return × Signal direction
  // Add 1 to convert returns to growth factors
  return MathOperators.add(MathOperators.multiply(dailyReturns, laggedSignals), 1)
}

/**
 * Applies transaction costs based on position changes
 */
function applyTransactionCosts(
  strategyReturns: Timeseries,
  signalSeries: Timeseries,
  transactionCost: number,
): Timeseries {
  // Calculate position changes (absolute difference between consecutive signals)
  const positionChanges = MathOperators.absolute(MathModifiers.diff(signalSeries, 1))

  // Transaction cost factor = (1 - cost)^|position_change|
  // This reduces returns when positions change (trades occur)
  const costFactor = MathOperators.pow(1 - transactionCost, positionChanges)

  return MathOperators.multiply(strategyReturns, costFactor)
}

/**
 * Calculates cumulative performance with position filtering
 */
function calculateCumulativePerformance(
  returnsSeries: Timeseries,
  signalSeries: Timeseries,
): Timeseries {
  // Create position filter: 1 when strategy is active, 0 when inactive
  const positionFilter = createPositionFilter(returnsSeries, signalSeries)

  // Calculate cumulative returns using log returns for numerical stability
  const cumulativePerformance = calculateCumulativeReturns(returnsSeries)

  // Apply position filter to handle strategy activation/deactivation
  const filteredPerformance = MathOperators.multiply(cumulativePerformance, positionFilter)

  // Ensure first value starts at 1.0 (100% - initial investment)
  filteredPerformance.values[0] = 1

  return filteredPerformance
}

/**
 * Creates a position filter that tracks when the strategy is active
 */
function createPositionFilter(returnsSeries: Timeseries, _signalSeries: Timeseries): Timeseries {
  // Strategy is active when we have valid returns (non-zero/positive)
  // This handles cases where strategy might be paused or not trading
  const activeFlags = new Timeseries(
    //value > 0 && signalSeries.values[index] !== 0 ? 1 : 0,
    returnsSeries.values.map((value) => (value > 0 ? 1 : 0)),
    returnsSeries.timestamps,
  )

  // Cumulative product ensures once strategy goes inactive, it stays inactive
  return MathModifiers.cumprod(activeFlags)
}

/**
 * Calculates cumulative returns using log returns for better numerical stability
 */
function calculateCumulativeReturns(returnsSeries: Timeseries): Timeseries {
  // Use log returns for multiplication to avoid floating-point precision issues
  // cumprod(x) = exp(cumsum(log(x)))
  return MathOperators.exp(MathModifiers.cumsum(MathOperators.log(returnsSeries)))
}

/**
 * Applies stop loss protection to strategy returns
 * Exits positions when cumulative loss exceeds the specified percentage
 */
function applyStopLossProtection(
  strategyReturns: Timeseries,
  signalSeries: Timeseries,
  stopLossPercentage = 0,
  takeProfitPercentage = 0,
): Timeseries {
  const adjustedReturns = new Timeseries(strategyReturns.values, strategyReturns.timestamps)

  let cumulativeReturn = 1
  let positionEntry = 1
  let isStopLossTriggered = false

  for (let i = 0; i < strategyReturns.values.length; i++) {
    const currentReturn = strategyReturns.values[i]
    const currentSignal = signalSeries.values[i]
    const prevSignal = i > 0 ? signalSeries.values[i - 1] : 0

    const isNewSignal = currentSignal !== prevSignal
    // Check for position change
    if (isNewSignal) {
      isStopLossTriggered = false
      positionEntry = cumulativeReturn
    }

    if (isStopLossTriggered) {
      adjustedReturns.values[i] = 1 // Flat return (cash)
      continue
    }

    // Calculate position return since entry
    const positionReturn = (cumulativeReturn * currentReturn) / positionEntry

    // Apply stop loss logic
    if (positionReturn <= 1 - stopLossPercentage) {
      const maxLossReturn = 1 - stopLossPercentage
      applyEarlyExitRule(maxLossReturn, i)

      // Apply take profit logic
    } else if (takeProfitPercentage && positionReturn >= 1 + takeProfitPercentage) {
      const maxProfitReturn = 1 + takeProfitPercentage
      applyEarlyExitRule(maxProfitReturn, i)
    } else {
      adjustedReturns.values[i] = currentReturn
      cumulativeReturn *= currentReturn
    }
  }

  function applyEarlyExitRule(exitReturn: number, i: number) {
    const adjustedReturn = (exitReturn * positionEntry) / cumulativeReturn

    adjustedReturns.values[i] = adjustedReturn
    cumulativeReturn *= adjustedReturn
    isStopLossTriggered = true
  }

  return adjustedReturns
}
