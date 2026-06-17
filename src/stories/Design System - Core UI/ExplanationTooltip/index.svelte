<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import ExplanationTooltip from '$ui/core/ExplanationTooltip/index.js'
</script>

<main class="flex h-screen flex-col center">
  <ExplanationTooltip explanation="explanation text">
    {#snippet trigger({ ref })}
      <Button {ref}>Some Button</Button>
    {/snippet}
  </ExplanationTooltip>
</main>
