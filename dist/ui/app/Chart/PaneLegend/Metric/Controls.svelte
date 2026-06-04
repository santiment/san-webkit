<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import Button from '../../../../core/Button/index.js'
  import { MetricType } from '../../../../../ctx/metrics-registry/types/index.js'

  import PaneControls from './PaneControls.svelte'
  import { useMetricInfoCtx } from './ctx.svelte.js'
  import { useChartPlanRestrictionsCtx } from '../../RestrictedDataDialog/index.js'

  type TProps = {
    metric: TSeries
    paneControls?: boolean
  }
  let { metric, paneControls }: TProps = $props()

  const { chartPlanRestrictions } = useChartPlanRestrictionsCtx.get()
  const { onMetricInfoClick } = useMetricInfoCtx.get()

  function onHideClick() {
    metric.visible.$ = !metric.visible.$
  }

  function onReloadClick() {
    metric.recache.schedule()
  }
</script>

<div
  class="left-full hidden gap-1.5 bg-white px-2 pr-0 center group-hover/pane-metric:flex [.metric-opened>&]:flex"
>
  {#if metric.type !== MetricType.DATA_STORE}
    <Button icon="reset" iconSize="10" class="size-5" explanation="Reload" onclick={onReloadClick}
    ></Button>
  {/if}

  <Button
    icon={metric.visible.$ ? 'eye' : 'eye-crossed'}
    iconSize="14"
    class="size-5"
    explanation={metric.visible.$ ? 'Hide' : 'Show'}
    onclick={onHideClick}
  ></Button>

  <Button
    icon="info"
    iconSize="12"
    class="size-5"
    explanation="Metric info"
    onclick={(e) => onMetricInfoClick(metric, e.currentTarget!)}
  ></Button>

  {#if 'apiMetricName' in metric && chartPlanRestrictions.has$(metric.apiMetricName)}
    <Button
      icon="crown"
      iconSize="12"
      class="size-5 fill-orange"
      explanation="Restricted data"
      onclick={() => chartPlanRestrictions.showDialog({ source: 'chart_pane_legend_metric' })}
    ></Button>
  {/if}

  {#if paneControls}
    <PaneControls {metric}></PaneControls>
  {/if}

  <!--
  <Button icon="cog" iconSize="11" class="size-5" explanation="Settings"></Button>
  -->
</div>
