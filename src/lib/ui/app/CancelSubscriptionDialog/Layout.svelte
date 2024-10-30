<script lang="ts">
  import { onSupportClick } from '$lib/utils/support.js'
  import Button from '$ui/core/Button/index.js'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'
  import type { Snippet } from 'svelte'

  type TProps = { title: string; onContinueClick: () => void; children: Snippet }
  let { title, children, onContinueClick }: TProps = $props()

  const { Controller } = getDialogControllerCtx()
</script>

<section class="flex-1 text-center">
  <h2 class="mb-6 text-2xl font-medium">{title}</h2>

  <section class="mb-8 rounded bg-athens px-8 py-6">
    {@render children()}
  </section>

  <div class="gap-3 column">
    <Button
      variant="border"
      size="lg"
      class="border-green text-sm text-green center hover:border-green-hover hover:text-green-hover"
      onclick={onContinueClick}
    >
      Continue cancellation
    </Button>

    <Button
      variant="border"
      size="lg"
      class="text-sm center"
      href="mailto:support@santiment.net"
      data-type=""
      data-source=""
      onclick={(e) => {
        Controller.close()
        onSupportClick(e)
      }}>Contact Customer Service</Button
    >
  </div>
</section>
