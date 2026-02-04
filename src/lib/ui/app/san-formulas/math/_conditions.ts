import { math, Timeseries } from './core.js'
import { createBinaryMathOperator } from './_operators.js'
import { alignTimeseries } from './utils.js'

const larger = createBinaryMathOperator('larger', (a, b) => (a > b ? 1 : 0))
const largerEq = createBinaryMathOperator('largerEq', (a, b) => (a >= b ? 1 : 0))

const smaller = createBinaryMathOperator('smaller', (a, b) => (a < b ? 1 : 0))
const smallerEq = createBinaryMathOperator('smallerEq', (a, b) => (a <= b ? 1 : 0))

const equal = createBinaryMathOperator('equal', (a, b) => (a == b ? 1 : 0))
const unequal = createBinaryMathOperator('unequal', (a, b) => (a != b ? 1 : 0))

const if_expression = math.typed('if', {
  'Timeseries | number, Timeseries | number, Timeseries | number':
    applyTimeseriesConditionalOperation,
}) as (
  condition: Timeseries,
  ifTrue: Timeseries | number,
  ifFalse: Timeseries | number,
) => Timeseries

export const MathConditions = {
  larger,
  largerEq,

  smaller,
  smallerEq,

  equal,
  unequal,

  if: if_expression,
}

//function applyTimeseriesConditionalOperation(
//  condition: number,
//  ifTrue: number,
//  ifFalse: number,
//): number
function applyTimeseriesConditionalOperation(
  condition: Timeseries,
  ifTrue: Timeseries | number,
  ifFalse: Timeseries | number,
): Timeseries | number {
  let alignedIfTrue = ifTrue instanceof Timeseries ? alignTimeseries(ifTrue, condition)[0] : ifTrue
  let alignedIfFalse =
    ifFalse instanceof Timeseries ? alignTimeseries(ifFalse, condition)[0] : ifFalse

  if (alignedIfTrue instanceof Timeseries && alignedIfFalse instanceof Timeseries) {
    ;[alignedIfTrue, alignedIfFalse] = alignTimeseries(alignedIfTrue, alignedIfFalse)
  }

  const getIndexValue = (target: number | Timeseries, i: number): number =>
    target instanceof Timeseries ? target.values[i] : target

  return new Timeseries(
    condition.values.map((v, i) => {
      return v ? getIndexValue(alignedIfTrue, i) : getIndexValue(alignedIfFalse, i)
    }),
    condition.timestamps,
  )
}
