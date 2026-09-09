<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import Button from '../../../core/Button/Button.svelte'
  import Svg from '../../../core/Svg/Svg.svelte'
  import { dialogs$ } from '../../../core/Dialog/index.js'
  import { trackEvent } from '../../../../analytics/index.js'

  import { useQuestionnaireCtx } from '../ctx.svelte.js'
  import CalendlyDialog from './CalendlyDialog.svelte'

  const CALENDLY_URL = 'https://calendly.com/santiment-team/santiment-walkthrough'

  const { questionnaire } = useQuestionnaireCtx.get()

  const showCalendlyDialog = dialogs$.new(CalendlyDialog)

  onMount(() => {
    trackEvent('form', { action: 'submitted', type: 'questionnaire' })
  })

  function openScheduleDialog() {
    trackEvent('press', { action: 'schedule_call', type: 'questionnaire' })

    showCalendlyDialog({
      url: CALENDLY_URL,
      onScheduled: () => {
        questionnaire.$$.isVisible = false
      },
    })
  }

  function skip() {
    trackEvent('press', { action: 'skip', type: 'questionnaire' })
    questionnaire.cancel()
  }
</script>

<section
  in:fade={{ duration: 200 }}
  class="flex flex-col items-center justify-center gap-6 text-center"
>
  <Svg illus id="confetti" w={128} />

  <div class="flex flex-col gap-4">
    <h1 class="text-lg-3 font-medium text-rhino">Thanks for your help!</h1>

    <p class="max-w-[290px] text-base">
      As a reward, our expert will jump on a call with you to help you make the most out of
      Santiment.
    </p>
  </div>

  <footer class="flex items-center gap-3 md:flex-col">
    <Button variant="fill" onclick={openScheduleDialog}>Schedule a call</Button>

    <Button variant="border" class="bg-white px-5 hover:bg-mystic" onclick={skip}>Skip</Button>
  </footer>
</section>
