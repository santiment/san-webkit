<script lang="ts">
  import type { Snippet } from 'svelte'

  import { onSupportClick } from '$lib/utils/support.js'
  import Button from '$ui/core/Button/index.js'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'

  type TProps = { title: string; onContinueClick: () => void; children: Snippet; loading?: boolean }
  let { title, loading, children, onContinueClick }: TProps = $props()

  const { Controller } = getDialogControllerCtx()
</script>

<section class="flex-1 text-center">
  <h2 class="mb-6 text-2xl font-medium">{title}</h2>

  <section class="mb-8 rounded-sm bg-athens px-8 py-6">
    {@render children()}
  </section>

  <div class="column gap-3">
    <Button
      variant="border"
      size="lg"
      class="center border-green text-sm text-green hover:border-green-hover hover:text-green-hover"
      onclick={onContinueClick}
      {loading}
    >
      Continue cancellation
    </Button>

    <Button
      variant="border"
      size="lg"
      class="center text-sm"
      href="mailto:support@santiment.net"
      data-type="contact_customer_service"
      data-source="cancel_subscription_dialog"
      onclick={(e) => {
        Controller.close()
        onSupportClick(e)
      }}>Contact Customer Service</Button
    >
  </div>
</section>
