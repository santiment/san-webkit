<script lang="ts">
  import { CursorFollowing } from '$ui/core/ExplanationTooltip/index.js'
</script>

<main class="flex h-screen flex-col center">
  <CursorFollowing explanation="Explanation text inside cursor following">
    {#snippet children({ tooltipAction })}
      <div class="flex w-[500px] justify-between">
        <div class="size-20 bg-red" use:tooltipAction>Some text</div>

        <div class="size-20 bg-blue text-white" use:tooltipAction>Another text</div>
      </div>
    {/snippet}
  </CursorFollowing>
</main>
