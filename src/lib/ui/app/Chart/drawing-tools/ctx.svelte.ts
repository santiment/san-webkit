import type { MouseEventParams } from '@santiment-network/chart-next'
import type { TPoint } from './types.js'
import type { default as FibRetracementPrimitive } from './fib-retracement/primitive.js'
import type { default as RectanglePrimitive } from './rectangle/primitive.js'

import { createCtx } from '$lib/utils/index.js'

import { useChartCtx, useMetricSeriesCtx } from '../ctx/index.js'

type TDrawingPrimitives = typeof RectanglePrimitive | typeof FibRetracementPrimitive

export type TTypeToDrawingPrimitive = {
  [K in TDrawingPrimitives as K['prototype']['__type']]: K['prototype']
}
export type TDrawingTypes = keyof TTypeToDrawingPrimitive

type TDrawing = { __: any }

type TState<GName extends string, GPayload = null> = { name: GName; payload: GPayload }

type TStates =
  | TState<'idle'>
  | TState<
      'drawing',
      {
        type: TDrawingTypes
        points: TPoint[]
        drawing: null | TDrawingPrimitives['prototype']
        Primitive: undefined | Promise<{ default: TDrawingPrimitives }>
      }
    >

export function importPrimitive(type: TDrawingTypes) {
  switch (type) {
    case 'rectangle':
      return import('./rectangle/primitive.js')
    case 'fib_retracement':
      return import('./fib-retracement/primitive.js')
  }
}

export const useDrawingToolsCtx = createCtx(
  'webkit_useDrawingToolsCtx',
  ({ drawings: defaultDrawings = [] }: { drawings?: TDrawing[] } = {}) => {
    const chartCtx = useChartCtx.get()
    const { metricSeries } = useMetricSeriesCtx.get()

    let state = $state.raw<TStates>({
      name: 'idle',
      payload: null,
    })

    const _drawings = $state.raw(defaultDrawings)

    const targetMetric = $derived(metricSeries.$[0])

    function onDrawingToolSelect(type: TDrawingTypes) {
      // Same tool pressed === cancel drawing
      if (state.name === 'drawing' && state.payload.type === type) {
        state = { name: 'idle', payload: null }
        return
      }

      const chart = chartCtx.chart.$
      if (!chart) return

      state = {
        name: 'drawing',
        payload: { type, points: [], drawing: null, Primitive: importPrimitive(type) },
      }
    }

    function getMouseDrawingPoint(params: MouseEventParams): undefined | TPoint {
      if (!params.point || !params.time) return

      const series = targetMetric.chartSeriesApi!
      const price = series.coordinateToPrice(params.point.y)
      if (!price) return

      return { time: params.time, price }
    }

    function onChartClick(params: MouseEventParams) {
      if (state.name !== 'drawing') return

      const point = getMouseDrawingPoint(params)
      if (!point) return

      state.payload.Primitive?.then(({ default: Primitive }) => {
        if (state.name !== 'drawing') return

        const series = targetMetric.chartSeriesApi!

        if (!state.payload.drawing) {
          const points = [point, point]
          const primitive = new Primitive(points)
          series.attachPrimitive(primitive)

          state.payload.drawing = primitive
          state.payload.points = points
        } else {
          state.payload.drawing.updateEndPoint(point)

          state = { name: 'idle', payload: null }
        }
      })
    }

    function onChartCrosshairMove(params: MouseEventParams) {
      if (state.name !== 'drawing') return

      const point = getMouseDrawingPoint(params)
      if (!point) return

      if (!state.payload.drawing) return

      state.payload.drawing.updateEndPoint(point)
    }

    $effect(() => {
      const chart = chartCtx.chart.$
      if (!chart) return

      if (state.name !== 'drawing') return

      chart.subscribeClick(onChartClick)
      chart.subscribeCrosshairMove(onChartCrosshairMove)

      return () => {
        chart.unsubscribeClick(onChartClick)
        chart.unsubscribeCrosshairMove(onChartCrosshairMove)
      }
    })

    return {
      drawingTools: {
        get drawing$() {
          return state.name === 'drawing' ? state.payload.type : ''
        },

        onSelect: onDrawingToolSelect,
      },
    }
  },
)
