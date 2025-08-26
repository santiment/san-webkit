<script lang="ts">
  import type { TAlertSchemaUnion } from '../categories/index.js'
  import type { TApiAlert } from '../types.js'

  import Button from '$ui/core/Button/index.js'
  import { Query } from '$lib/api/executor.js'
  import { notification } from '$ui/core/Notifications/index.js'

  import { useAlertFormCtx } from '../ctx/index.svelte.js'
  import Steps from './Steps.svelte'
  import { mutateSaveAlert } from './api.js'

  type TProps = {
    schema: TAlertSchemaUnion
    alert?: null | Partial<TApiAlert>
    resetCategory: () => void
    close: () => void
    onCreate?: (alert: TApiAlert) => void
  }
  let { schema, alert, resetCategory, close, onCreate }: TProps = $props()

  const { steps, selectedStep, nextStep, isAlertValid, reduceStepsToAlert } = useAlertFormCtx({
    schema,
    alert,
  })

  let loading = $state(false)

  const isEditing = $derived(!!alert?.id)

  // Reduce steps state.$$ to accumulated object
  async function onAlertCreate() {
    try {
      loading = true
      const reducedAlert = { ...reduceStepsToAlert(), id: alert?.id ?? null }

      const { id } = await mutateSaveAlert(Query)(reducedAlert)

      onCreate?.({ ...reducedAlert, id })

      notification.success(`Alert was succesfully ${isEditing ? 'updated' : 'created'}`)
      close()
    } catch (e) {
      console.error(e)
      notification.error(`Failed to ${isEditing ? 'update' : 'create'} alert`)
    } finally {
      loading = false
    }
  }
</script>

<section class="flex min-h-0 flex-1">
  <aside
    class="relative flex h-full w-[374px] flex-col items-start overflow-auto border-r pb-6 pl-12 pr-10 pt-8"
  >
    <div class="mb-6 flex w-full items-center justify-between border-b pb-4">
      <h2 class="text-xl">{schema.ui.label}</h2>

      {#if !alert}
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
      onclick={onAlertCreate}
      {loading}
    >
      {isEditing ? 'Update' : 'Create'} alert
    </Button>
  </aside>

  <main class="flex flex-1 flex-col overflow-auto pb-8 pl-10 pr-12 pt-9">
    <div class="mb-4 flex justify-between">
      <h3 class="h-8 text-lg font-medium">{selectedStep.$.ui.label}</h3>

      {#if selectedStep.$.isValid.$ && nextStep.$}
        <Button
          variant="link"
          onclick={() => (selectedStep.index$ += 1)}
          icon="pointer"
          iconSize="14"
          iconOnRight
        >
          {nextStep.$.ui.label}
        </Button>
      {/if}
    </div>

    <selectedStep.$.ui.Form state={selectedStep.$.state}></selectedStep.$.ui.Form>
  </main>
</section>
