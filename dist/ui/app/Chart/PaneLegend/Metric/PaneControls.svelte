<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'
  import type { IChartApi } from '@santiment-network/chart-next'

  import Button from '../../../../core/Button/index.js'

  import { useChartCtx } from '../../ctx/index.js'

  type TProps = {
    metric: TSeries
  }

  const { metric }: TProps = $props()

  const chartCtx = useChartCtx.get()

  const onMovePaneAboveClick = createPaneAction((index, isOnlySeries) => {
    const newIndex = index - 1

    if (isOnlySeries && newIndex === -1) {
      return
    }

    return newIndex
  })

  const onMovePaneBelowClick = createPaneAction((index, isOnlySeries, chart) => {
    const newIndex = index + 1

    if (isOnlySeries && newIndex === chart.panes().length) {
      return
    }

    return newIndex
  })

  function createPaneAction(
    handle: (index: number, isOnlySeries: boolean, chart: IChartApi) => undefined | number,
  ) {
    return () => {
      const chart = chartCtx.chart.$

      if (!chart) return
      if (!metric.chartSeriesApi) return

      const pane = metric.chartSeriesApi.getPane()

      const index = pane.paneIndex()
      const isOnlySeries = pane.getSeries().length === 1

      const newIndex = handle(index, isOnlySeries, chart)

      if (newIndex === undefined) return

      metric.chartSeriesApi.moveToPane(newIndex)
      metric.pane.update$()
    }
  }
</script>

<Button
  icon="arrow-down"
  iconSize="10"
  class="size-5 [&>svg]:rotate-180"
  explanation="Move to pane above"
  onclick={onMovePaneAboveClick}
></Button>

<Button
  icon="arrow-down"
  iconSize="10"
  class="size-5"
  explanation="Move to pane below"
  onclick={onMovePaneBelowClick}
></Button>
