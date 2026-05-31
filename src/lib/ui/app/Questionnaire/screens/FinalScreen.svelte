<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import Button from '$ui/core/Button/Button.svelte'
  import { trackEvent } from '$lib/analytics/index.js'

  import { useQuestionnaireCtx } from '../ctx.svelte.js'
  import confetti from '../assets/confetti.svg'

  const CALENDLY_URL = 'https://calendly.com/santiment-team/santiment-walkthrough'

  const { questionnaire } = useQuestionnaireCtx.get()

  onMount(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event !== 'calendly.event_scheduled') return

      trackEvent('walkthrough', { action: 'scheduled' })

      window.Calendly?.closePopupWidget?.()
      questionnaire.$$.isVisible = false
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  })

  async function openCalendly() {
    trackEvent('press', { action: 'schedule_call', type: 'walkthrough' })

    const { openCalendly: open } = await import('./calendly.js')
    open(CALENDLY_URL)
  }

  function skip() {
    trackEvent('press', { action: 'skip', type: 'walkthrough' })
    questionnaire.cancel()
  }
</script>

<section
  in:fade={{ duration: 200 }}
  class="flex flex-col items-center justify-center gap-6 text-center"
>
  <img src={confetti} alt="" class="h-32 w-32" />

  <div class="flex flex-col gap-4">
    <h1 class="text-lg-3 font-medium text-rhino">Thanks for your help!</h1>

    <p class="max-w-[290px] text-base">
      As a reward, our expert will jump on a call with you to help you make the most out of
      Santiment.
    </p>
  </div>

  <footer class="flex items-center gap-3 md:flex-col">
    <Button variant="fill" onclick={openCalendly}>Schedule a call</Button>

    <Button variant="border" class="bg-white px-5 hover:bg-mystic" onclick={skip}>Skip</Button>
  </footer>
</section>
