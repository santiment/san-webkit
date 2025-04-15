<script lang="ts">
  import type { TAlertSchemaUnion } from '../categories/index.js'
  import type { TApiAlert } from '../types.js'

  import Button from '$ui/core/Button/index.js'

  import { useAlertFormCtx } from '../ctx/index.svelte.js'
  import Steps from './Steps.svelte'

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
    console.log({ reducedAlert })
  }

  function createApiAlert() {
    return steps.reduce((acc, step) => step.reduceToApi(acc, $state.snapshot(step.state.$$)), {
      settings: {},
    })
  }
</script>

<section class="flex min-h-0 flex-1">
  <aside
    class="relative flex h-full w-[374px] flex-col items-start overflow-auto border-r pb-6 pl-12 pr-10 pt-8"
  >
    <div class="mb-6 flex w-full items-center justify-between border-b pb-4">
      <h2 class="text-xl">{schema.ui.label}</h2>

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
    </div>

    <Steps
      {steps}
      selectedIndex={selectedStep.index$}
      onStepSelect={(i) => (selectedStep.index$ = i)}
    />

    <Button
      class="mt-auto"
      variant="fill"
      disabled={!isAlertValid.$}
      onclick={() => onAlertCreate()}
    >
      Create alert
    </Button>
  </aside>

  <main class="flex flex-1 flex-col overflow-auto pb-8 pl-10 pr-12 pt-9">
    <div class="mb-4 flex justify-between">
      <h3 class="text-lg font-medium">{selectedStep.$.ui.label}</h3>
    </div>

    <selectedStep.$.ui.Form step={selectedStep.$}></selectedStep.$.ui.Form>
  </main>
</section>
