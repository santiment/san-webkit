<script module lang="ts">
  import Component from './AlertsDialog.svelte'

  export const showAlertsDialog$ = () => dialogs$.new(Component)
</script>

<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
<!-- svelte-ignore state_referenced_locally -->
<script lang="ts">
  import { onMount } from 'svelte'

  import Dialog, { dialogs$, type TDialogProps } from '../../../core/Dialog/index.js'
  import { trackEvent } from '../../../../analytics/index.js'
  import Button from '../../../core/Button/Button.svelte'

  import CategoriesScreen from './CategoriesScreen.svelte'
  import AlertFormScreen from './AlertFormScreen.svelte'
  import { type TApiAlert } from '../types.js'
  import { deduceApiAlertSchema, type TAlertSchemaUnion } from '../categories/index.js'
  import RestrictionMessage from './RestrictionMessage.svelte'

  type TProps = TDialogProps & { source?: string; alert?: null | Partial<TApiAlert> }
  let { alert, Controller, source = '' }: TProps = $props()

  let schema = $state.raw(deduceApiAlertSchema(alert))

  const isApiAlertDeduceFailed = $derived(alert && !schema)

  $effect(() => {
    if (isApiAlertDeduceFailed) {
      alert = null
    }
  })

  function onCategorySelect(value: TAlertSchemaUnion) {
    schema = value
  }

  function resetCategory() {
    schema = null
  }

  const close = () => Controller.close()

  onMount(() => {
    const analytics = { source }

    trackEvent('dialog', { ...analytics, action: 'open', type: '' })

    return () => {
      trackEvent('dialog', { ...analytics, action: 'close', type: '' })
    }
  })
</script>

<Dialog class="h-full max-h-[640px] w-full max-w-[960px] column">
  <h2
    class="flex items-center justify-between border-b fill-waterloo px-5 py-3 text-base font-medium text-fiord"
  >
    Create custom alerts
    <Button icon="close" iconSize="12" class="h-6" onclick={close} />
  </h2>

  <RestrictionMessage />

  {#if schema}
    <AlertFormScreen {alert} {schema} {resetCategory} {close}></AlertFormScreen>
  {:else}
    <CategoriesScreen onSelect={onCategorySelect}></CategoriesScreen>
  {/if}
</Dialog>
