<script lang="ts">
  import Questionary, { useQuestionaryCtx } from '$ui/app/Questionary/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  const { questionary } = useQuestionaryCtx()
</script>

<main class="flex h-screen items-center justify-center">
  <Questionary>
    <Button onclick={() => (questionary.$$.isVisible = true)}>Show Questionary</Button>
  </Questionary>
</main>
