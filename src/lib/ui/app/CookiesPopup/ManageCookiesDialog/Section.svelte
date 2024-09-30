<script lang="ts">
  import type { Snippet } from 'svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { cn } from '$ui/utils/index.js'

  const {
    title,
    description,
    children,
  }: { title: string; description: string; children: Snippet } = $props()

  let isOpened = $state(false)
</script>

<section class="border-b">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
    role="button"
    tabindex="0"
    aria-expanded={isOpened}
    class="flex cursor-pointer select-none items-center justify-between fill-waterloo py-3 hover:text-green"
    onclick={() => (isOpened = !isOpened)}
  >
    <div class="flex items-center">
      <Svg id="arrow-right" w={5.5} h={10} class={cn('mr-3', isOpened && 'rotate-90')} />
      {title}
    </div>

    {@render children()}
  </div>

  {#if isOpened}
    <p class="mb-3">{description}</p>
  {/if}
</section>
