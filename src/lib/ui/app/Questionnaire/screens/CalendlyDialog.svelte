<script lang="ts">
  import { onMount } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import Dialog, { type TDialogProps } from '$ui/core/Dialog/index.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import { buildCalendlyInlineUrl } from './calendly.js'

  type TProps = {
    url: string
    onScheduled?: () => void
  }

  const { url, Controller, onScheduled }: TDialogProps & TProps = $props()

  let isReady = $state(false)

  const iframeSrc = buildCalendlyInlineUrl(url)

  function onMessage(e: MessageEvent) {
    if (e.origin !== 'https://calendly.com') return

    const event = e.data?.event

    if (event === 'calendly.event_type_viewed' || event === 'calendly.profile_page_viewed') {
      isReady = true
    } else if (event === 'calendly.event_scheduled') {
      trackEvent('walkthrough', { action: 'scheduled', type: 'questionnaire' })
      onScheduled?.()
      Controller.close(true)
    }
  }

  onMount(() => {
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  })
</script>

<Dialog class="flex h-full w-full max-w-[500px] flex-col">
  <header class="flex items-center justify-between border-b border-b-porcelain px-5 py-3">
    <h2 class="text-base text-fiord">Schedule a call</h2>
    <Button
      icon="close"
      iconSize="12"
      class="h-6 fill-waterloo hover:fill-rhino"
      onclick={() => Controller.close(true)}
    />
  </header>

  <div class="relative grid flex-1 place-items-center">
    <div class="loading-spin" style:--loading-size="28px"></div>

    <iframe
      src={iframeSrc}
      title="Schedule a meeting"
      style:opacity={isReady ? 1 : 0}
      class="calendly-iframe absolute inset-0 h-full w-full"
    ></iframe>
  </div>
</Dialog>

<style>
  .calendly-iframe {
    transition: opacity 200ms ease-out;
  }
</style>
