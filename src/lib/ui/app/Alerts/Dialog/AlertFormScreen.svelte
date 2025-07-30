<script lang="ts">
  import type { TAlertSchemaUnion } from '../categories/index.js'
  import type { TApiAlert } from '../types.js'

  import Button from '$ui/core/Button/index.js'
  import { Query } from '$lib/api/executor.js'
  import { notification } from '$ui/core/Notifications/index.js'
  import { useMetricsRestrictionsCtx } from '$lib/ctx/metrics-registry/index.js'

  import { useAlertFormCtx } from '../ctx/index.svelte.js'
  import Steps from './Steps.svelte'
  import { mutateSaveAlert } from './api.js'

  type TReducedAlert = Omit<TApiAlert<{ type: string; target: object }>, 'id'>

  type TProps = {
    schema: TAlertSchemaUnion
    alert?: null | Partial<TApiAlert>
    resetCategory: () => void
    close: () => void
  }
  let { schema, alert, resetCategory, close }: TProps = $props()

  const { steps, selectedStep, nextStep, isAlertValid } = useAlertFormCtx({ schema, alert })
  const { MetricsRestrictions } = useMetricsRestrictionsCtx()

  let loading = $state(false)

  const isEditing = $derived(!!alert?.id)

  // Reduce steps state.$$ to accumulated object
  async function onAlertCreate() {
    try {
      loading = true
      const reducedAlert = { ...createApiAlert(), id: alert?.id ?? null }

      await mutateSaveAlert(Query)(reducedAlert)

      notification.success(`Alert was succesfully ${isEditing ? 'updated' : 'created'}`)

      close()
    } catch (e) {
      console.error(e)
      notification.error('Failed to create alert')
    } finally {
      loading = false
    }
  }

  function createApiAlert() {
    const apiAlert = steps.reduce(
      (acc, step) => {
        const state = $state.snapshot(step.state.$$) as typeof step.state.$$
        return step.reduceToApi(acc, state as UnionToIntersection<typeof state>)
      },
      {
        settings: {},
      },
    ) as TReducedAlert

    const changedType = getChangedType(apiAlert.settings)
    if (changedType && apiAlert.settings) {
      apiAlert.settings.type = changedType
    }

    return apiAlert
  }

  function getChangedType(settings: TReducedAlert['settings']) {
    if (settings?.type !== 'metric_signal') return null
    if (!('metric' in settings) || typeof settings.metric !== 'string') return null

    const minInterval = MetricsRestrictions.$[settings.metric]?.minInterval
    if (minInterval === '1d') {
      return 'daily_metric_signal'
    }

    return null
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
      <h3 class="text-lg font-medium">{selectedStep.$.ui.label}</h3>

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
