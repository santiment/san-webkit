<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import { onMount } from 'svelte'

  import Input from '../../../../../core/Input/index.js'
  import { useAlertFormCtx } from '../../../ctx/index.svelte.js'

  type TProps = {
    step: TAlertStep<TBaseSchema>
  }

  let { step }: TProps = $props()

  const { schema, steps } = useAlertFormCtx.get()

  async function suggestTitleAndDesc() {
    if (!step.state.$$.title) {
      step.state.$$.title = await schema.suggestTitle(steps)
    }

    if (!step.state.$$.description) {
      step.state.$$.description = await schema.suggestDescription(steps)
    }
  }

  onMount(() => {
    suggestTitleAndDesc()
  })
</script>

Name: <Input
  defaultValue={step.state.$$.title}
  oninput={(e) => {
    step.state.$$.title = e.currentTarget.value
  }}
></Input>

Description: <Input defaultValue={step.state.$$.description}></Input>
