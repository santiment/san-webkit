<script lang="ts">
  import Questionnaire, { useQuestionnaireCtx } from '$ui/app/Questionnaire/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  const { questionnaire } = useQuestionnaireCtx()
</script>

<main class="flex h-screen items-center justify-center">
  <Questionnaire>
    <Button onclick={() => (questionnaire.$$.isVisible = true)}>Show Questionnaire</Button>
  </Questionnaire>
</main>
