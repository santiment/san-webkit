<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'
  import type { TAlertSchemaUnion } from '$ui/app/Alerts/categories/index.js'
  import type { TApiAlert } from '$ui/app/Alerts/types.js'

  import { onMount } from 'svelte'

  import Input from '$ui/core/Input/index.js'

  type TProps = {
    step: TAlertStep<TBaseSchema>
    schema: TAlertSchemaUnion
    createApiAlert: () => TApiAlert
  }

  let { step, schema, createApiAlert }: TProps = $props()

  onMount(() => {
    const apiAlert = createApiAlert()

    if (!apiAlert.title) {
      step.state.$$.title = schema.suggestTitle(apiAlert)
    }

    if (!apiAlert.description) {
      step.state.$$.description = schema.suggestDescription(apiAlert)
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
