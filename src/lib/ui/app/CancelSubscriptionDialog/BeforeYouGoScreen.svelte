<script lang="ts">
  import { onSupportClick } from '$lib/utils/support.js'
  import Button from '$ui/core/Button/index.js'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'
  import Layout from './Layout.svelte'

  let { onContinueClick }: { onContinueClick: () => void } = $props()

  const { Controller } = getDialogControllerCtx()

  function closeDialog() {
    Controller.close()
  }
</script>

<Layout title="Cancel subscription?" {onContinueClick}>
  <h4 class="mb-4 whitespace-nowrap font-bold text-waterloo">
    Before you go, give us a chance to help you:
  </h4>

  <div class="gap-3 whitespace-nowrap column">
    <Button
      variant="border"
      size="lg"
      class="text-sm center"
      target="_blank"
      href="https://academy.santiment.net/education-and-use-cases/"
      data-type="discover_academy"
      data-source="cancel_subscription_dialog"
      onclick={closeDialog}>Discover use cases on our Academy</Button
    >
    <Button
      variant="border"
      size="lg"
      class="text-sm center"
      target="_blank"
      href="https://www.youtube.com/c/SantimentNetwork"
      data-type="visit_youtube"
      data-source="cancel_subscription_dialog"
      onclick={closeDialog}
    >
      Gain insights on our Youtube channel
    </Button>

    <Button
      variant="border"
      size="lg"
      class="text-sm center"
      href="mailto:support@santiment.net"
      data-type="request_custom_plan"
      data-source="cancel_subscription_dialog"
      onclick={(e) => {
        closeDialog()
        onSupportClick(e)
      }}
    >
      Request a custom subscription plan
    </Button>
  </div>
</Layout>
