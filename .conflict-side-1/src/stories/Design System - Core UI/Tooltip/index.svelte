<script lang="ts">
  import TooltipStory from './TooltipStory.svelte'
</script>

<main
  class="mx-auto flex h-screen max-w-[500px] column center [&>div]:mb-4 [&>div]:flex [&>div]:w-full [&>div]:justify-between"
>
  <div>
    <TooltipStory position="top-start" />
    <TooltipStory position="top" />
    <TooltipStory position="top-end" />
  </div>

  <div>
    <TooltipStory position="right-start" />
    <TooltipStory position="right" />
    <TooltipStory position="right-end" />
  </div>

  <div>
    <TooltipStory position="left-start" />
    <TooltipStory position="left" />
    <TooltipStory position="left-end" />
  </div>

  <div>
    <TooltipStory position="bottom-start" />
    <TooltipStory position="bottom" />
    <TooltipStory position="bottom-end" />
  </div>
</main>
