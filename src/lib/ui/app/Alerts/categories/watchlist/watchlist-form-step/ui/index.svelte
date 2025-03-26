<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import Checkbox from '$ui/core/Checkbox/index.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()
</script>

<Checkbox
  isActive={step.isValid.$}
  onCheckedChange={(value) => {
    step.state.$$.target.watchlist_id = value ? 1 : null
  }}
></Checkbox>
