import { Timeseries } from '../core.js';
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
export declare function calculatePerformanceSeries(priceSeries: Timeseries, signalSeries: Timeseries, transactionCost?: number, stopLossPercentage?: number, takeProfitPercentage?: number): Timeseries;
