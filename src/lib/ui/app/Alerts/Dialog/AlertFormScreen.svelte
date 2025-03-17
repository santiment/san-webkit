<script lang="ts">
  import type { TAlertSchemaUnion } from '../categories/index.js'
  import type { TApiAlert } from '../types.js'

  import Button from '$ui/core/Button/index.js'

  import { createAlertStep } from '../form-steps/index.svelte.js'

  type TProps = { schema: TAlertSchemaUnion; apiAlert?: null | TApiAlert }
  let { schema, apiAlert }: TProps = $props()

  const steps = schema.steps.map((step) => createAlertStep(apiAlert, step))

  let selectedIndex = $state(0)
  const selectedStep = $derived(steps[selectedIndex])

  const isAlertValid = $derived(steps.every((step) => step.isValid.$))

  /*
  // Reduce steps state.$$ to accumulated object
  function onAlertCreate() {
  }
  */
</script>

<section>
  {#each steps as step, i (step.name)}
    <div class="flex">
      <Button onclick={() => (selectedIndex = i)}>
        {step.name}
      </Button>

      , valid: {step.isValid.$}
    </div>
    <hr />
  {/each}

  <div>Result validity: {isAlertValid}</div>

  <hr />

  <selectedStep.Component step={selectedStep}></selectedStep.Component>
</section>
