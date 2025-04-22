<script module lang="ts">
  import Component from './AlertsDialog.svelte'

  export const showAlertsDialog$ = () => dialogs$.new(Component)
</script>

<!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
<!-- svelte-ignore state_referenced_locally -->
<script lang="ts">
  import { onMount } from 'svelte'

  import Dialog, { dialogs$, type TDialogProps } from '../../../core/Dialog/index.js'
  import ScreenTransition, { useScreenTransitionCtx } from '../../ScreenTransition/index.js'
  import { trackEvent } from '../../../../analytics/index.js'

  import CategoriesScreen from './CategoriesScreen.svelte'
  import AlertFormScreen from './AlertFormScreen.svelte'
  import { type TApiAlert } from '../types.js'
  import { deduceApiAlertSchema, type TAlertSchemaUnion } from '../categories/index.js'
  import { SCREENS } from './utils.js'

  type TProps = TDialogProps & { source?: string; apiAlert?: null | TApiAlert }
  let { apiAlert, source = '' }: TProps = $props()

  let schema = $state.raw(deduceApiAlertSchema(apiAlert))

  const isApiAlertDeduceFailed = $derived(apiAlert && !schema)

  // eslint-disable-next-line svelte/valid-compile
  if (isApiAlertDeduceFailed) {
    apiAlert = null
  }

  const { screen } = useScreenTransitionCtx(SCREENS, SCREENS[apiAlert ? 1 : 0])

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
    {#if schema}
      <AlertFormScreen {apiAlert} {schema}></AlertFormScreen>
    {:else}
      <CategoriesScreen onSelect={onCategorySelect}></CategoriesScreen>
    {/if}
  </ScreenTransition>
</Dialog>
