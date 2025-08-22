import { math, Timeseries } from './core.js'

const add = createBinaryMathOperator('add', (a, b) => a + b)
const subtract = createBinaryMathOperator('subtract', (a, b) => a - b)
const multiply = createBinaryMathOperator('multiply', (a, b) => a * b)
const divide = createBinaryMathOperator('divide', (a, b) => a / b)
const pow = createBinaryMathOperator('pow', (a, b) => Math.pow(a, b))

const unaryMinus = createUnaryMathOperator('unaryMinus', (a) => -a)
const unaryPlus = createUnaryMathOperator('unaryPlus', (a) => +a)

const log = createMathFunction('log', (a, base) => {
  if (!base) {
    return Math.log(a)
  }

  if (base === 2) {
    return Math.log2(a)
  }

  if (base === 10) {
    return Math.log10(a)
  }

  return Math.log(a) / Math.log(base)
})

export const MathOperators = {
  add,
  subtract,
  multiply,
  divide,
  pow,
  log,

  unaryMinus,
  unaryPlus,
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

function createUnaryMathOperator<GName extends string>(
  name: GName,
  operation: (a: number) => number,
) {
  const timeseriesNumberOperation = (a: Timeseries) => {
    return new Timeseries(
      a.values.map((value) => operation(value)),
      a.timestamps,
    )
  }

  return math.typed(name, {
    number: operation,
    Timeseries: timeseriesNumberOperation,
  })
}

function createMathFunction<GName extends string>(
  name: GName,
  operation: (a: number, b?: number) => number,
) {
  return math.typed(name, {
    number: (x: number) => operation(x),

    Timeseries: (x: Timeseries) =>
      new Timeseries(
        x.values.map((value) => operation(value)),
        x.timestamps,
      ),

    'Timeseries | number, number': (x: number | Timeseries, base: number) => {
      if (base < 2) {
        throw new Error('Invalid log base: ' + base)
      }

      if (x instanceof Timeseries) {
        return new Timeseries(
          x.values.map((value) => operation(value, base)),
          x.timestamps,
        )
      }

      return operation(x, base)
    },
  })
}
