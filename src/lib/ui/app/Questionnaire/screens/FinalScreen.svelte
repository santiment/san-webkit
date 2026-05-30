<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import Button from '$ui/core/Button/Button.svelte'

  import { useQuestionnaireCtx } from '../ctx.svelte.js'
  import confetti from '../assets/confetti.svg'

  const CALENDLY_URL = 'https://calendly.com/santiment-team/santiment-walkthrough'

  const { questionnaire } = useQuestionnaireCtx.get()

  onMount(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event !== 'calendly.event_scheduled') return

      // @ts-expect-error
      window.Calendly?.closePopupWidget?.()
      questionnaire.$$.isVisible = false
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  })

  async function openCalendly() {
    const { openCalendly: open } = await import('./calendly.js')
    open(CALENDLY_URL)
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

  <footer>
    <Button variant="fill" onclick={openCalendly}>Schedule a call</Button>
  </footer>
</section>
