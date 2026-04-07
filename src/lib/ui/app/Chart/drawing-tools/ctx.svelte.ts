import type { MouseEventParams } from '@santiment-network/chart-next'
import type { TPoint } from './types.js'
import type { default as FibRetracementPrimitive } from './fib-retracement/primitive.js'
import type { default as RectanglePrimitive } from './rectangle/primitive.js'

import { createCtx } from '$lib/utils/index.js'

import { useChartCtx, useMetricSeriesCtx } from '../ctx/index.js'

type TDrawingPrimitives = typeof RectanglePrimitive | typeof FibRetracementPrimitive
type TDrawingPrimitive = TDrawingPrimitives['prototype']

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
        drawing: null | TDrawingPrimitive
        Primitive: undefined | Promise<{ default: TDrawingPrimitives }>
      }
    >
  | TState<
      'moving',
      {
        drawing: TDrawingPrimitive
        startPoint: NonNullable<MouseEventParams['point']>
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

    let selectedPrimitive: TDrawingPrimitive | null = null
    function selectPrimitive(primitive: TDrawingPrimitive | null) {
      if (primitive === selectedPrimitive) return

      selectedPrimitive?.select(false)
      primitive?.select(true)
      selectedPrimitive = primitive
    }

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
      const value = series.coordinateToPrice(params.point.y)
      if (value === null || !Number.isFinite(value)) {
        return
      }

      return { time: params.time, price: value }
    }

    function onChartPointerDown(params: MouseEventParams) {
      const chart = chartCtx.chart.$
      if (!chart) {
        return
      }

      const hoveredPrimitive = params.hoveredObjectId as null | TDrawingPrimitive

      selectPrimitive(hoveredPrimitive)

      // NOTE: Preventing mouse drag-scroll when drawing or hovering over a primitive and then pressing the mouse button
      if (hoveredPrimitive || state.name === 'drawing') {
        const { handleScroll } = chart.options()
        const oldHandleScroll =
          typeof handleScroll === 'object' ? { ...handleScroll } : handleScroll
        chart.applyOptions({ handleScroll: false })

        window.addEventListener(
          'pointerup',
          () => {
            if (state.name !== 'drawing') {
              state.payload?.drawing?.finalize()
              state = { name: 'idle', payload: null }
            }

            chart.applyOptions({ handleScroll: oldHandleScroll })
          },
          { once: true },
        )
      }

      if (hoveredPrimitive && state.name === 'idle') {
        state = {
          name: 'moving',
          payload: {
            drawing: hoveredPrimitive,
            startPoint: params.point!,
          },
        }
      }

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

          selectPrimitive(primitive)

          state.payload.drawing = primitive
          state.payload.points = points
        } else {
          state.payload.drawing.updateEndPoint(params.point!)
          state.payload.drawing.finalize()

          state = { name: 'idle', payload: null }
        }
      })
    }

    function onChartCrosshairMove(params: MouseEventParams) {
      if (state.name === 'moving') {
        const { startPoint } = state.payload
        if (!params.point) return

        const { x, y } = params.point
        const dx = x - startPoint.x
        const dy = y - startPoint.y

        // console.log({ dx, dy })
        state.payload.drawing.move([dx, dy])
      }

      if (state.name !== 'drawing') return

      // const point = getMouseDrawingPoint(params)
      // if (!point) return

      if (!state.payload.drawing) return

      state.payload.drawing.updateEndPoint(params.point!)
    }

    $effect(() => {
      const chart = chartCtx.chart.$
      if (!chart) return

      chart.subscribePointerDown(onChartPointerDown)

      $effect(() => {
        if (state.name !== 'drawing' && state.name !== 'moving') return

        chart.subscribeCrosshairMove(onChartCrosshairMove)
        return () => {
          chart.unsubscribeCrosshairMove(onChartCrosshairMove)
        }
      })

      return () => {
        chart.unsubscribePointerDown(onChartPointerDown)
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
