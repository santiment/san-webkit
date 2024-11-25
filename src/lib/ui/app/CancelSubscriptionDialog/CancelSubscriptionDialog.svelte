<script module lang="ts">
  import Component from './CancelSubscriptionDialog.svelte'

  export const showCancelSubscriptionDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { onMount } from 'svelte'

  import { trackEvent } from '$lib/analytics/index.js'
  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import ScreenTransition, { useScreenTransitionCtx } from '$ui/app/ScreenTransition/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import OnlyOnDevice from '$ui/utils/OnlyOnDevice/OnlyOnDevice.svelte'

  import BeforeYouGoScreen from './BeforeYouGoScreen.svelte'
  import FeedbackScreen from './FeedbackScreen.svelte'
  import DialogHeader from './DialogHeader.svelte'
  import { useSubscriptionCancelFlow } from './flow.js'

  let { source = '', Controller }: TDialogProps = $props()

  const SCREENS = [BeforeYouGoScreen, FeedbackScreen]
  const { screen } = useScreenTransitionCtx(SCREENS, SCREENS[0])
  const { device } = useDeviceCtx()
  const { startCancellationFlow } = useSubscriptionCancelFlow()

  let loading = $state(false)

  function onSubscriptionCancel(reasons: Set<string>, feedback: string) {
    trackEvent('press', {
      type: 'confirm_subscription_cancel',
      source: 'cancel_subscription_dialog',
      action: 'click',
    })

    if (reasons.size === 0) {
      return alert('Please select at least one reason for canceling your subscription.')
    }

    if (feedback) {
      trackEvent('cancel_subscribtion_give_feedback', { feedback }) // NOTE: Old event with a typo
      trackEvent('cancel_subscription_give_feedback', { feedback })
    }

    loading = true
    startCancellationFlow()
      .then(() => Controller.close())
      .finally(() => {
        loading = false
      })
  }

  onMount(() => {
    trackEvent('dialog', { action: 'open', type: 'cancel_subscription_dialog', source })

    return () =>
      trackEvent('dialog', { action: 'close', type: 'cancel_subscription_dialog', source })
  })
</script>

<Dialog class="column">
  <OnlyOnDevice desktop>
    <DialogHeader></DialogHeader>
  </OnlyOnDevice>

  <ScreenTransition
    isSizeTransition={device.$.isDesktop}
    class="overflow-x-hidden overflow-y-scroll bg-white px-14 py-8 md:px-4"
    dataType="change_cancel_subscription_screen"
    dataSource="feedback_form"
  >
    {#if screen.$ === BeforeYouGoScreen}
      <BeforeYouGoScreen
        onContinueClick={() => {
          screen.$ = FeedbackScreen
        }}
      ></BeforeYouGoScreen>
    {:else}
      <FeedbackScreen {loading} {onSubscriptionCancel}></FeedbackScreen>
    {/if}
  </ScreenTransition>
</Dialog>
