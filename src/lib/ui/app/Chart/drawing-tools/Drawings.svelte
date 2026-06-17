<script lang="ts">
  import {
    useMetricSeriesCtx,
    useMetricSeriesDeleteListener,
    type TSeries,
  } from '../ctx/series.svelte.js'
  import { useDrawingToolsCtx } from './ctx.svelte.js'

  const { drawingTools } = useDrawingToolsCtx.get()
  const { metricSeries } = useMetricSeriesCtx.get()
  useMetricSeriesDeleteListener(onMetricDelete)

  const targetMetric = $derived(metricSeries.$[0])

  for (const drawingTool of drawingTools.drawings.$) {
    drawingTool.Primitive?.then(({ default: Primitive }) => {
      const metric = metricSeries.findById(drawingTool.data.seriesId) || targetMetric

      drawingTool.data.seriesId ??= metric.id
      drawingTool.drawing ??= new Primitive(drawingTool.data, drawingTool.options)

      drawingTool.drawing.attachTo(metric.chartSeriesApi, metric.id)
    })
  }

  function onMetricDelete(metric: TSeries) {
    const drawings = drawingTools.drawings.$

    if (!metricSeries.$.length) {
      // No metrics left
      return
    }

    for (const drawingTool of drawings) {
      if (drawingTool.drawing?.seriesId !== metric.id) continue

      const newMetric = metricSeries.$[0]
      drawingTool.drawing?.attachTo(newMetric.chartSeriesApi, newMetric.id)
    }
  }

  // setTimeout(() => {
  //   drawingTools.drawings.$[0].drawing?.attachTo(
  //     metricSeries.$[1].chartSeriesApi,
  //     metricSeries.$[1].id,
  //   )

  //   setTimeout(() => {
  //     metricSeries.deleteSeries(metricSeries.$[1])
  //   }, 2000)
  // }, 2000)

  // TODO: Support undo/redo
</script>
