<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import { useMetricsRegistryCtx } from '$lib/ctx/metrics-registry/index.svelte.js'

  import Metrics from './Metrics.svelte'
  import Conditions from './Conditions.svelte'
  import Metric from './Metric.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()
  const { MetricsRegistry } = useMetricsRegistryCtx()

  const { metric: selectedMetricKey, metricLabel, conditions } = $derived(step.state.$$)
  const metric = $derived(selectedMetricKey ? (MetricsRegistry.$[selectedMetricKey] ?? null) : null)
  let isMetricScreen = $derived(!metric)

  $effect(() => {
    // Used to fill metric label in case state filled from ApiAlert
    step.state.$$.metricLabel = metric?.label ?? ''
  })

  function onMetricSelect(metric: string) {
    step.state.$$.metric = metric
    isMetricScreen = false
  }

  function onScreenToggle() {
    isMetricScreen = !isMetricScreen
  }
</script>

{#if isMetricScreen}
  <Metrics {metric} onSelect={onMetricSelect} />
{:else}
  <Conditions
    {conditions}
    metric={selectedMetricKey}
    updateConditions={(conditions) => (step.state.$$.conditions = conditions)}
  >
    <Metric label={metricLabel} onclick={onScreenToggle} />
  </Conditions>
{/if}
