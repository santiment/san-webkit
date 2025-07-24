<script lang="ts">
  import type { TAlertStep } from '../../index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '../../../Dialog/StepValue.svelte'
  import { useMetricsRegistryCtx } from '../../../../../../ctx/metrics-registry/index.svelte.js'

  import { describeConditions } from '../utils.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { MetricsRegistry } = useMetricsRegistryCtx()

  const { metric, metricLabel, conditions } = $derived(step.state.$$)

  $effect(() => {
    if (metric && !metricLabel) {
      step.state.$$.metricLabel = MetricsRegistry.$[metric]?.label ?? ''
    }
  })
</script>

<section class="flex flex-col items-start gap-2">
  <StepValue>
    {metricLabel}
  </StepValue>

  {describeConditions(metric, conditions)}
</section>
