<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import Input from '$ui/core/Input/index.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()
</script>

Name: <Input
  defaultValue={step.state.$$.title}
  oninput={(e) => {
    step.state.$$.title = e.currentTarget.value
  }}
></Input>

Description: <Input defaultValue={step.state.$$.description}></Input>
