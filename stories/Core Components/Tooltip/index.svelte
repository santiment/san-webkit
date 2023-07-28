<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import type Tooltip from '@/ui/Tooltip'

  import TooltipStory from './TooltipStory.svelte'

  interface $$Props extends ComponentProps<Tooltip> {}
</script>

<main class="column hv-center">
  <div class="row justify gap-xl">
    <TooltipStory position="top-start" {...$$props} />
    <TooltipStory position="top" {...$$props} />
    <TooltipStory position="top-end" {...$$props} />
  </div>

  <div class="row justify gap-xl mrg-xxl mrg--t">
    <TooltipStory position="right-start" {...$$props} />
    <TooltipStory position="right" {...$$props} />
    <TooltipStory position="right-end" {...$$props} />
  </div>

  <div class="row justify gap-xl mrg-xxl mrg--t">
    <TooltipStory position="left-start" {...$$props} />
    <TooltipStory position="left" {...$$props} />
    <TooltipStory position="left-end" {...$$props} />
  </div>

  <div class="row justify gap-xl mrg-xxl mrg--t">
    <TooltipStory position="bottom-start" {...$$props} />
    <TooltipStory position="bottom" {...$$props} />
    <TooltipStory position="bottom-end" {...$$props} />
  </div>
</main>

<style>
  main {
    padding-top: 72px;
  }
</style>
