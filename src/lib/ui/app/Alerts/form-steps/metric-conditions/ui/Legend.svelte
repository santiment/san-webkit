<script lang="ts">
  import type { TBaseState } from '../../index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '$ui/app/Alerts/Dialog/StepValue.svelte'
  import { useMetricsRegistryCtx } from '$lib/ctx/metrics-registry/index.svelte.js'

  import { describeConditions } from '../utils.js'

  type TProps = { state: TBaseState<TBaseSchema> }

  let { state }: TProps = $props()

  const { MetricsRegistry } = useMetricsRegistryCtx()

  const { metric, metricLabel, conditions } = $derived(state.$$)

  $effect(() => {
    if (metric && !metricLabel) {
      state.$$.metricLabel = MetricsRegistry.$[metric]?.label ?? ''
    }
  })
</script>

<section class="flex flex-col items-start gap-2">
  <StepValue>
    {metricLabel}
  </StepValue>

  {describeConditions(metric, conditions)}
</section>
