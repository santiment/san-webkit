import type { Coordinate, ITimeScaleApi, Time, TimePointIndex } from '@santiment-network/chart-next'

type ITimeScaleModel = {
  _coordinateToFloatIndex: (x: number) => number
  _points: { originalTime: number }[]
  _barSpacing: number
}

// NOTE: Manual conversion is required to ensure that coordinates, which are outside of the logical range, are converted to correct timestamps. Otherwise it will result in `null` and errors.
export function convertCoordinateToSafeTime(x: number, timeScale: ITimeScaleApi<any>): Time {
  // @ts-ignore
  const timeScaleModel = timeScale._timeScale as ITimeScaleModel

  const startTime = timeScaleModel._points[0]?.originalTime
  if (!startTime) return 0 as Time

  const index = Math.ceil(timeScaleModel._coordinateToFloatIndex(x)) as TimePointIndex

  let timeStep: null | number = null
  timeScaleModel._points.some((item, index, array) => {
    timeStep = array[index + 1]?.originalTime - item.originalTime
    return Number.isFinite(timeStep)
  })

  if (!timeStep) return startTime as Time

  return (startTime + timeStep * index) as Time
}

// NOTE: Manual conversion is required to ensure that timestamps, which are outside of the logical range, are converted to correct coordinates. Otherwise a drawing will be cutoff
export function convertTimeToSafeCoordinate(
  time: number,
  timeScale: ITimeScaleApi<any>,
): Coordinate {
  // @ts-ignore
  const timeScaleModel = timeScale._timeScale as ITimeScaleModel

  const startTime = timeScaleModel._points[0]?.originalTime
  const startCoord = timeScale.timeToCoordinate(startTime, true)

  if (!startTime || !startCoord) return 0 as Coordinate

  let timeStep: null | number = null
  timeScaleModel._points.some((item, index, array) => {
    timeStep = array[index + 1]?.originalTime - item.originalTime
    return Number.isFinite(timeStep)
  })

  if (!timeStep) return 0 as Coordinate

  return (((time - startTime) / timeStep) * timeScaleModel._barSpacing + startCoord) as Coordinate
}
