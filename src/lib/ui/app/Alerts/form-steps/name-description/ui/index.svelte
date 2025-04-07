<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import { onMount } from 'svelte'

  import Input from '$ui/core/Input/index.js'
  import { useAlertFormCtx } from '$ui/app/Alerts/ctx/index.svelte.js'

  type TProps = {
    step: TAlertStep<TBaseSchema>
  }

  let { step }: TProps = $props()

  const { schema, steps } = useAlertFormCtx.get()

  onMount(() => {
    if (!step.state.$$.title) {
      step.state.$$.title = schema.suggestTitle(steps)
    }

    if (!step.state.$$.description) {
      step.state.$$.description = schema.suggestDescription(steps)
    }
  })
</script>

Name: <Input
  defaultValue={step.state.$$.title}
  oninput={(e) => {
    step.state.$$.title = e.currentTarget.value
  }}
></Input>

Description: <Input defaultValue={step.state.$$.description}></Input>
