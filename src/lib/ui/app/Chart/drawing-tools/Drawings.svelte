<script lang="ts">
  import { useMetricSeriesCtx } from '../ctx/series.svelte.js'
  import { useDrawingToolsCtx } from './ctx.svelte.js'

  const { drawingTools } = useDrawingToolsCtx.get()
  const { metricSeries } = useMetricSeriesCtx.get()

  const targetMetric = $derived(metricSeries.$[0])

  for (const drawingTool of drawingTools.drawings.$) {
    drawingTool.Primitive?.then(({ default: Primitive }) => {
      const metric = metricSeries.findById(drawingTool.data.seriesId) || targetMetric

      drawingTool.data.seriesId ??= metric.id
      drawingTool.drawing = new Primitive(drawingTool.data)

      drawingTool.drawing.attachTo(metric.chartSeriesApi, metric.id)
    })
  }

  setTimeout(() => {
    // metricSeries.delete(0)
    console.log(drawingTools.drawings.export())
  }, 3000)

  // TODO: Support undo/redo
</script>
