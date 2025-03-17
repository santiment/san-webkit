<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import Checkbox from '$ui/core/Checkbox/index.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()
</script>

Channel: <Checkbox
  isActive={step.isValid.$}
  onCheckedChange={(value) => {
    step.state.$$.channel = value ? ['test'] : []
  }}
></Checkbox>
