<script module lang="ts">
  import Component from './AlertsDialog.svelte'

  export const showAlertsDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { onMount } from 'svelte'

  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  //import { useCustomerCtx } from '$lib/ctx/customer/index.js'
  import ScreenTransition, { useScreenTransitionCtx } from '$ui/app/ScreenTransition/index.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import CategoriesScreen from './CategoriesScreen.svelte'
  import AlertFormScreen from './AlertFormScreen.svelte'
  import { type TApiAlert } from '../types.js'
  import { deduceApiAlertSchema, type TAlertSchemaUnion } from '../categories/index.js'

  type TProps = TDialogProps & { source?: string; apiAlert?: null | TApiAlert }
  let { apiAlert, source = '' }: TProps = $props()

  export const SCREENS = [
    { name: '1. Choose your plan', backLabel: 'Choose plan' },
    { name: '2. Payment details' },
  ] as const
  const { screen } = useScreenTransitionCtx(SCREENS, SCREENS[apiAlert ? 1 : 0])

  let schema = $state.raw(deduceApiAlertSchema(apiAlert))

  function onCategorySelect(value: TAlertSchemaUnion) {
    schema = value
    screen.$ = SCREENS[1]
  }

  onMount(() => {
    const analytics = { source }

    trackEvent('dialog', { ...analytics, action: 'open', type: '' })

    return () => {
      trackEvent('dialog', { ...analytics, action: 'close', type: '' })
    }
  })
</script>

<Dialog class="h-full w-full column">
  <ScreenTransition class="bg-white column" dataType="" dataSource="">
    {#if screen.$ === SCREENS[0]}
      <CategoriesScreen onSelect={onCategorySelect}></CategoriesScreen>
    {:else if schema}
      <AlertFormScreen {apiAlert} {schema}></AlertFormScreen>
    {/if}
  </ScreenTransition>
</Dialog>
