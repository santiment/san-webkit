<script lang="ts">
  import { trackEvent } from '$lib/analytics/index.js'
  import { useScreenTransitionCtx } from '$ui/app/ScreenTransition/index.js'
  import Button from '$ui/core/Button/index.js'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'

  const { screen, screens } = useScreenTransitionCtx.get()
  const { Controller } = getDialogControllerCtx()
</script>

<div class="flex items-center justify-between border-b px-5 py-3 text-base">
  {#if screen.index$ === 0}
    Subscription cancelling
  {:else}
    <Button
      icon="arrow-left-big"
      iconSize="12"
      onclick={() => {
        screen.$ = screens[0]
      }}
    >
      Back
    </Button>
  {/if}

  <Button
    icon="close"
    iconSize="10"
    onclick={() => {
      trackEvent('press', {
        action: 'click',
        type: 'change_cancel_subscription_screen',
        source: 'feedback_form',
      })
      Controller.close()
    }}
  ></Button>
</div>
