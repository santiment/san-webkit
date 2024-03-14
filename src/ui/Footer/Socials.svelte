<script>
  import Svg from '@/ui/Svg/svelte'
  import { IsMobile } from '@/stores/responsive'
</script>

<div class="socials">
  {#if $IsMobile}
    <h4 class="body-2 txt-m mrg-m mrg--b c-waterloo">Santiment on social media</h4>
  {/if}

  <div class="row">
    <a href="https://twitter.com/santimentfeed" target="_blank" rel="noreferrer">
      <Svg id="twitter" w="20" h="16" />
    </a>
    <a href="https://github.com/santiment" target="_blank" rel="noreferrer">
      <Svg id="github" w="20" h="20" />
    </a>
    <a href="https://santiment.net/discord" target="_blank" rel="noreferrer">
      <Svg id="discord" w="20" h="14" />
    </a>
    <a href="https://t.me/santiment_network" target="_blank" rel="noreferrer">
      <Svg id="telegram" w="20" h="16" />
    </a>
    <a href="https://www.youtube.com/c/santimentnetwork" target="_blank" rel="noreferrer">
      <Svg id="youtube" w="20" h="14" />
    </a>
    <a href="https://medium.com/santiment" target="_blank" rel="noreferrer">
      <Svg id="medium" w="16" />
    </a>
  </div>
</div>

<style lang="scss">
  a:hover {
    fill: var(--color);
  }

  .socials {
    grid-area: socials;
  }

  h4 {
    text-align: left;
  }

  .row {
    justify-content: space-between;
  }
  :global(.desktop) .row {
    max-width: 265px;
    margin-left: auto;
  }

  :global(.phone-xs),
  :global(.phone) {
    a {
      border: 1px solid var(--porcelain);
      height: 40px;
      width: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }
  }
</style>
