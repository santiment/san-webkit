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
      const [aAligned, bAligned] = alignTimeseries(a, b)

      return new Timeseries(
        aAligned.values.map((value, i) => operation(value, bAligned.values[i])),
        aAligned.timestamps,
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

// TODO(vanguard): Write tests before release
function alignTimeseries(a: Timeseries, b: Timeseries): [Timeseries, Timeseries] {
  const isASmaller = a.timestamps.length < b.timestamps.length
  const [base, target] = isASmaller ? [a, b] : [b, a]

  const baseValues = new Array<number>(base.values.length)
  const targetValues = new Array<number>(target.values.length)
  const alignedTimestamps = base.timestamps.slice()

  let targetIndex = 0
  let alignedSize = 0

  baseLoop: for (let baseIndex = 0; baseIndex < base.timestamps.length; baseIndex++) {
    const baseTimestamp = base.timestamps[baseIndex]

    while (true) {
      const targetTimestamp = target.timestamps[targetIndex]

      if (baseTimestamp > targetTimestamp) {
        targetIndex += 1
      } else if (baseTimestamp < targetTimestamp) {
        break
      } else {
        // baseTimestamp === targetTimestamp

        baseValues[alignedSize] = base.values[baseIndex]
        targetValues[alignedSize] = target.values[targetIndex]
        alignedTimestamps[alignedSize] = baseTimestamp

        alignedSize += 1
        targetIndex += 1

        break
      }

      if (targetIndex >= target.timestamps.length) {
        break baseLoop
      }
    }
  }

  baseValues.length = alignedSize
  targetValues.length = alignedSize
  alignedTimestamps.length = alignedSize

  const [aAlignedValues, bAlignedValues] = isASmaller
    ? [baseValues, targetValues]
    : [targetValues, baseValues]

  return [
    new Timeseries(aAlignedValues, alignedTimestamps),
    new Timeseries(bAlignedValues, alignedTimestamps),
  ]
}
