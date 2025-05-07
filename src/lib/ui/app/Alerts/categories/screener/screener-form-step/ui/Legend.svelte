<script lang="ts">
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '$ui/app/Alerts/Dialog/StepValue.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { title } = $derived(step.state.$$.screener)
</script>

<StepValue>
  {title}
</StepValue>
