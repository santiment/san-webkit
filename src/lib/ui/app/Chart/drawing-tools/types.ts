import type { TUUIDv7 } from '$lib/utils/uuid/index.js'
import type { Coordinate, Time } from '@santiment-network/chart-next'

export interface TViewPoint {
  x: Coordinate | null
  y: Coordinate | null
}

export interface TPoint {
  time: Time
  price: number
}

export type TOptions = {
  axisLabels: {
    bg: string
    textColor: string
  }
}

export type TData = {
  seriesId?: TUUIDv7
  points: TPoint[]
}
