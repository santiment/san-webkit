<script lang="ts">
  import { useQuestionnaireCtx } from '$ui/app/Questionnaire/index.js'
  import FinalScreen from '$ui/app/Questionnaire/screens/FinalScreen.svelte'

  useQuestionnaireCtx()
</script>

<main class="flex h-screen items-center justify-center">
  <FinalScreen />
</main>
