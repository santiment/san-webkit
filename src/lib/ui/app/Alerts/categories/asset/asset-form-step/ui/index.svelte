<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import Checkbox from '$ui/core/Checkbox/index.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()
</script>

Assets: <Checkbox
  isActive={step.isValid.$}
  onCheckedChange={(value) => {
    step.state.$$.slug = value ? ['bitcoin'] : []
  }}
></Checkbox>
