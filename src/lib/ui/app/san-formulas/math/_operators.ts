import { math, Timeseries } from './core.js'

const add = math.typed('add', {
  'Timeseries, Timeseries': (a: Timeseries, b: Timeseries) => {
    return new Timeseries(
      a.values.map((value, i) => value + b.values[i]),
      a.timestamps,
    )
  },
  'number, number': (a, b) => a + b,
})

export const MathOperators = {
  add,
}
