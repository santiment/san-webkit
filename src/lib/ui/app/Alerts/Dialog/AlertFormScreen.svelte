<script lang="ts">
  import type { TAlertSchemaUnion } from '../categories/index.js'
  import type { TApiAlert } from '../types.js'

  import Button from '$ui/core/Button/index.js'

  import { useAlertFormCtx } from '../ctx/index.svelte.js'

  type TProps = {
    schema: TAlertSchemaUnion
    apiAlert?: null | TApiAlert
    resetCategory: () => void
  }
  let { schema, apiAlert, resetCategory }: TProps = $props()

  const { steps, selectedStep, isAlertValid } = useAlertFormCtx({ schema, apiAlert })

  // Reduce steps state.$$ to accumulated object
  function onAlertCreate() {
    const reducedAlert = createApiAlert()
    console.log(reducedAlert)
  }

  function createApiAlert() {
    return steps.reduce((acc, step) => step.reduceToApi(acc, $state.snapshot(step.state.$$)), {
      settings: {},
    })
  }
</script>

<section>
  {#if !apiAlert}
    <Button
      variant="plain"
      icon="arrow"
      iconSize="8"
      class="back fill-waterloo text-waterloo hover:fill-green hover:text-green [&>svg]:-rotate-90"
      onclick={resetCategory}
    >
      Categories
    </Button>
  {/if}

  <h2 class="text-lg">Schema: {schema.name}</h2>

  {#each steps as step, i (step.name)}
    <div class="m-2 flex border">
      <Button onclick={() => (selectedStep.index$ = i)}>
        {step.name}
      </Button>

      , valid: {step.isValid.$},

      {#if step.ui.Legend}
        <step.ui.Legend {step}></step.ui.Legend>
      {/if}
    </div>
    <hr />
  {/each}

  <div>Result validity: {isAlertValid.$}</div>

  <hr />

  <div class="p-4">
    <selectedStep.$.ui.Form step={selectedStep.$}></selectedStep.$.ui.Form>
  </div>

  <Button variant="fill" onclick={() => onAlertCreate()}>Submit</Button>
</section>
