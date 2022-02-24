<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  export let title: string
  export let description: string

  let isOpened = false
</script>

<section>
  <div
    class="btn row v-center justify"
    class:opened={isOpened}
    on:click={() => (isOpened = !isOpened)}>
    <div class="row v-center">
      <Svg id="arrow-right" w="5.5" h="10" class="mrg-m mrg--r" />
      {title}
    </div>

    <slot />
  </div>

  {#if isOpened}
    <p class="mrg-m mrg--b">{description}</p>
  {/if}
</section>

<style>
  section {
    border-bottom: 1px solid var(--porcelain);
  }

  .btn {
    padding: 12px 0;
    --fill: var(--waterloo);
    --color-hover: var(--accent);
  }

  .opened :global(svg) {
    transform: rotate(90deg);
  }
</style>
