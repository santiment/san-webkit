<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'

  import { useQuestionaryCtx } from '../ctx.svelte.js'
  import chest from '../assets/chest.svg'

  const { questionary } = useQuestionaryCtx.get()
</script>

<section
  class="flex w-full max-w-[480px] flex-col items-center justify-center rounded-lg bg-athens py-12 text-center"
>
  <img src={chest} alt="chest illustration" class="mb-4 h-[177px] w-[194px]" />

  <div class="mb-8 text-rhino">
    <h1 class="mb-3 text-lg-3 font-medium">Take survey, get a free call 🎯</h1>

    <p class="max-w-[312px] text-base">
      Help us understand your needs for a more tailored experience later, and get a free call with a
      Santiment expert.
    </p>
  </div>

  <footer class="flex items-center gap-3">
    <Button variant="fill" onclick={questionary.start}>Start survey</Button>

    <Button variant="border" class="bg-white px-5 hover:bg-mystic">Maybe later</Button>
  </footer>
</section>
