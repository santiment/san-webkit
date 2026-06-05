<script lang="ts">
  import { fade } from 'svelte/transition'

  import Button from '../../../core/Button/Button.svelte'
  import Svg from '../../../core/Svg/index.js'

  import { useQuestionnaireCtx } from '../ctx.svelte.js'

  const { questionnaire } = useQuestionnaireCtx.get()
</script>

<section
  in:fade={{ duration: 200 }}
  class="flex w-full max-w-[480px] flex-col items-center justify-center rounded-lg bg-athens px-8 py-12 text-center sm:px-4"
>
  <Svg illus id="chest" w={194} h={177} class="mb-4" />

  <div class="mb-8 text-rhino">
    <h1 class="mb-3 text-lg-3 font-medium">Take survey, get a free call 🎯</h1>

    <p class="max-w-[312px] text-base">
      Help us understand your needs for a more tailored experience later, and get a free call with a
      Santiment expert.
    </p>
  </div>

  <footer class="flex items-center gap-3 md:flex-col">
    <Button variant="fill" onclick={() => (questionnaire.$$.screen = 'question')}
      >Start survey</Button
    >

    <Button variant="border" class="bg-white px-5 hover:bg-mystic" onclick={questionnaire.cancel}
      >Maybe later</Button
    >
  </footer>
</section>
