<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import { ssd } from 'svelte-runes'

  import { useMetricsRegistryCtx } from '$lib/ctx/metrics-registry/index.svelte.js'

  import Metrics from './Metrics.svelte'
  import Conditions from './Conditions.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()
  const { MetricsRegistry } = useMetricsRegistryCtx()

  const selectedMetricKey = $derived(step.state.$$.metric)
  const metric = $derived(selectedMetricKey ? (MetricsRegistry.$[selectedMetricKey] ?? null) : null)
  const isMetricScreen = ssd(() => !metric)

  $effect(() => {
    // Used to fill metric label in case state filled from ApiAlert
    step.state.$$.metricLabel = metric?.label ?? ''
  })

  function onMetricSelect(metric: string) {
    step.state.$$.metric = metric
    isMetricScreen.$ = false
  }

  function onScreenToggle() {
    isMetricScreen.$ = !isMetricScreen.$
  }
</script>

{#if isMetricScreen.$}
  <Metrics {metric} onSelect={onMetricSelect} />
{:else}
  <Conditions state={step.state} onMetricChange={onScreenToggle} />
{/if}
