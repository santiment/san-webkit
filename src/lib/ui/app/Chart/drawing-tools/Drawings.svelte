<script lang="ts">
  import { useMetricSeriesCtx } from '../ctx/series.svelte.js'
  import { useDrawingToolsCtx } from './ctx.svelte.js'

  const { metricSeries } = useMetricSeriesCtx.get()
  const { drawingTools } = useDrawingToolsCtx.get()

  const targetMetric = metricSeries.$[0]

  for (const drawingTool of drawingTools.drawings.$) {
    drawingTool.Primitive?.then(({ default: Primitive }) => {
      const primitive = new Primitive(drawingTool.data)

      targetMetric.chartSeriesApi?.attachPrimitive(primitive)
      drawingTool.drawing = primitive
    })
  }

  setTimeout(() => {
    // metricSeries.delete(0)
    console.log(drawingTools.drawings.export())
  }, 3000)
</script>
