import type { UTCTimestamp } from '@santiment-network/chart-next'
import type { TMetricData } from '$ui/app/Chart/api/index.js'

// use light-weight, number-only implementations of functions
import { create, parserDependencies } from 'mathjs/number'
import { sma as calculateSMA } from 'indicatorts'

//const math = create(all)
const math = create({ parserDependencies })

// create a new data type
export class Timeseries {
  values: number[]
  timestamps: UTCTimestamp[]

  constructor(...args: [TMetricData] | [number[], number[]]) {
    const [data, timestamps = new Array(data.length)] = args

    const isMetricData = typeof data[0] !== 'number'
    const values = isMetricData ? new Array(data.length) : data

    if (isMetricData) {
      for (let i = 0; i < data.length; i++) {
        const { value, time } = (data as TMetricData)[i]
        values[i] = value
        timestamps[i] = time
      }
    }

    this.values = values
    this.timestamps = timestamps
  }

  toMetricData() {
    return this.timestamps.map((time, i) => ({
      time,
      value: this.values[i],
    }))
  }
}

// @ts-ignore
math.typed.addType({
  name: 'Timeseries',
  test: (input: unknown) => input instanceof Timeseries,
})

const add = math.typed('add', {
  'Timeseries, Timeseries': (a: Timeseries, b: Timeseries) => {
    return new Timeseries(
      a.values.map((value, i) => value + b.values[i]),
      a.timestamps,
    )
  },
  'number, number': (a, b) => a + b,
})

const sma = math.typed('sma', {
  'Timeseries, number': (timeseries: Timeseries, period: number) => {
    return new Timeseries(calculateSMA(timeseries.values, { period }), timeseries.timestamps)
  },
})

math.import({ add, sma }, { override: true })

export { math }
