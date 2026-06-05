<script lang="ts">
  import { fade } from 'svelte/transition'

  import Button from '../../../core/Button/Button.svelte'
  import Svg from '../../../core/Svg/Svg.svelte'

  import { useQuestionnaireCtx } from '../ctx.svelte.js'

  const { questionnaire } = useQuestionnaireCtx.get()
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

  <footer>
    <Button
      variant="fill"
      href="https://calendly.com/santiment-team/santiment-walkthrough?back=1"
      onclick={() => (questionnaire.$$.isVisible = false)}
    >
      Go to calendar
    </Button>
  </footer>
</section>
