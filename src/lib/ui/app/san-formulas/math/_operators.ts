import { math, Timeseries } from './core.js'

const add = createBinaryMathOperator('add', (a, b) => a + b)
const subtract = createBinaryMathOperator('subtract', (a, b) => a - b)
const multiply = createBinaryMathOperator('multiply', (a, b) => a * b)
const divide = createBinaryMathOperator('divide', (a, b) => a / b)

export const MathOperators = {
  add,
  subtract,
  multiply,
  divide,
}

function createBinaryMathOperator<GName extends string>(
  name: GName,
  operation: (a: number, b: number) => number,
) {
  const timeseriesNumberOperation = (a: Timeseries, b: number) => {
    return new Timeseries(
      a.values.map((value) => operation(value, b)),
      a.timestamps,
    )
  }

  return math.typed(name, {
    'number, number': operation,
    'Timeseries, number': timeseriesNumberOperation,
    'number, Timeseries': (a: number, b: Timeseries) => timeseriesNumberOperation(b, a),

    'Timeseries, Timeseries': (a: Timeseries, b: Timeseries) => {
      return new Timeseries(
        a.values.map((value, i) => operation(value, b.values[i])),
        a.timestamps,
      )
    },
  })
}
