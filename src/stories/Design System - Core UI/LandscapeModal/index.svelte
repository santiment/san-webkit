<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import { showLandscapeModal$ } from '$ui/core/LandscapeModal/LandscapeModal.svelte'

  const showLandscapeModal = showLandscapeModal$()
</script>

<section class="flex h-screen w-full items-center justify-center">
  <Button onclick={() => showLandscapeModal({ children: children })}>Show modal</Button>
</section>

{#snippet children({ close }: { close: () => void })}
  <div class="h-full border-8 border-red bg-green">
    <div>Modal content</div>
    <Button onclick={close}>Close</Button>
  </div>
{/snippet}
