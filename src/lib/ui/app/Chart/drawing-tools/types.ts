import type { Coordinate, Time } from '@santiment-network/chart-next'

export interface ViewPoint {
  x: Coordinate | null
  y: Coordinate | null
}

export interface Point {
  time: Time
  price: number
}

export interface RectangleDrawingToolOptions {
  fillColor: string
  previewFillColor: string
  labelColor: string
  labelTextColor: string
  showLabels: boolean
  priceLabelFormatter: (price: number) => string
  timeLabelFormatter: (time: Time) => string
}

export const defaultOptions: RectangleDrawingToolOptions = {
  fillColor: 'rgba(200, 50, 100, 0.75)',
  previewFillColor: 'rgba(200, 50, 100, 0.25)',
  labelColor: 'rgba(200, 50, 100, 1)',
  labelTextColor: 'white',
  showLabels: true,
  priceLabelFormatter: (price: number) => price.toFixed(2),
  timeLabelFormatter: (time: Time) => {
    return time.toString()
  },
}

export const ensureDefined = <T>(a: T) => a as NonNullable<T>
