<script>
  import Svg from '@/ui/Svg/svelte'
  import { IsMobile } from '@/stores/responsive'

  let className = ''
  export { className as class }
  export let title
  export let titleMargin = 'mrg-l'
  export let bottomLabel
  export let bottomAction
  export let bottomHref
</script>

<section class="border column h-center {className}">
  <h2 class="h4 {titleMargin} mrg--b">{title}</h2>

  {#if $IsMobile}
    <a href="/" class="close btn"><Svg id="close" w="16" /></a>
  {/if}

  <slot />

  {#if bottomLabel}
    <div class="body-2 c-waterloo mrg-m mrg--t">
      {bottomLabel}
      <a href={bottomHref} class="link-pointer" on:click>{bottomAction}</a>
    </div>
  {/if}
</section>

<style>
  section {
    padding: 24px;
    text-align: center;
    position: relative;
  }

  :global(.desktop) section {
    padding: 39px 99px;
    min-width: 480px;
    display: block;
  }

  :global(body:not(.desktop)) section {
    align-self: flex-start;
    height: 85vh;
    flex: 1;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }
</style>
