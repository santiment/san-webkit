import type { UTCTimestamp } from '@santiment-network/chart-next'
import type { TMetricData, TMetricTargetSelectorInputObject } from '$ui/app/Chart/api/index.js'

// use light-weight, number-only implementations of functions
import { create, parserDependencies } from 'mathjs/number'

//const math = create(all)
export const math = create({ parserDependencies })

// create a new data type
export class Timeseries {
  values: number[]
  timestamps: UTCTimestamp[]
  selector: null | TMetricTargetSelectorInputObject

  // TODO: Refactor...
  constructor(
    ...args: [TMetricData, null | TMetricTargetSelectorInputObject] | [number[], number[]]
  ) {
    //const [data, timestamps = new Array(data.length)] = args
    const [data, selectorOrTimestamps] = args

    const isMetricData = typeof data[0] !== 'number'

    const values = (isMetricData ? new Array(data.length) : data) as number[]
    const timestamps = (
      isMetricData ? new Array(data.length) : selectorOrTimestamps
    ) as UTCTimestamp[]

    if (isMetricData) {
      for (let i = 0; i < data.length; i++) {
        const { value, time } = (data as TMetricData)[i]
        values[i] = value
        timestamps[i] = time
      }
    }

    this.values = values
    this.timestamps = timestamps
    this.selector = isMetricData
      ? (selectorOrTimestamps as null | TMetricTargetSelectorInputObject)
      : null
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
