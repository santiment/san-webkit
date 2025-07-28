<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TBaseState } from '../../index.svelte.js'

  import { useMetricsRegistryCtx } from '../../../../../../ctx/metrics-registry/index.svelte.js'

  import Metrics from './Metrics.svelte'
  import Conditions from './Conditions.svelte'
  import Metric from './Metric.svelte'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const { MetricsRegistry } = useMetricsRegistryCtx()

  const { metric: selectedMetricKey, metricLabel, conditions } = $derived(state.$$)
  const metric = $derived(selectedMetricKey ? (MetricsRegistry.$[selectedMetricKey] ?? null) : null)
  let isMetricScreen = $derived(!metric)

  $effect(() => {
    // Used to fill metric label in case state filled from ApiAlert
    if (selectedMetricKey && !metricLabel) {
      state.$$.metricLabel = metric?.label ?? ''
    }
  })

  function onMetricSelect(metric: string) {
    state.$$.metric = metric
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
    updateConditions={(conditions) => (state.$$.conditions = conditions)}
  >
    <Metric label={metricLabel} onclick={onScreenToggle} />
  </Conditions>
{/if}
