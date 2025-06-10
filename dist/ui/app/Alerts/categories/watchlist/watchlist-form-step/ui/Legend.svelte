<script lang="ts">
  import type { TAlertStep } from '../../../../form-steps/index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '../../../../Dialog/StepValue.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const { title } = $derived(step.state.$$.watchlist)
</script>

<StepValue>
  {title}
</StepValue>
