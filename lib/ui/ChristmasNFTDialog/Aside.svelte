<script>
  import Svg from './../../ui/Svg/svelte'
  import { getSEOLinkFromIdAndTitle } from './../../utils/url'
  import { trackNftBattleLinkClick } from './../../analytics/events/nftbattle'
  import { showIntercom } from './../../ui/HelpFeedback.svelte'
  import Check from './Check.svelte'
  import clockSvg from './clock.svg'
  import presentSvg from './present.svg'

  export let insights = []
  export let isNftWinner = false
  export let isDiscountWinner = false

  $: hasInsights = insights.length > 0
</script>

<aside class="column">
  <div class="header txt-center">
    <img
      src={isNftWinner || isDiscountWinner ? presentSvg : clockSvg}
      alt="Aside"
      class="mrg-xl mrg--b"
    />
    <h3 class="body-1 txt-m">
      {#if isNftWinner}
        You’ve won an NFT!
      {:else if hasInsights}
        {isDiscountWinner ? 'Take your discount' : 'Wooo! Your Insight is in the Battle!'}
      {:else}
        Welcome to the NFT battle!
      {/if}
    </h3>
  </div>

  <h4 class="txt-m mrg-m mrg--b c-fiord">Insights ({insights.length})</h4>

  {#if hasInsights}
    {#each insights as { id, title }}
      <div class="insights column relative">
        <a
          href="https://insights.santiment.net/read/{getSEOLinkFromIdAndTitle(id, title)}"
          on:click={trackNftBattleLinkClick}
          target="_blank"
          rel="noopener noreferrer"
          class="row"
          data-source="sidebar"
        >
          <Check small class="mrg-s mrg--r" />
          <span class="line-clamp">
            {title}
          </span>
        </a>
      </div>
    {/each}

    <div class="question border row txt-m mrg-a mrg--t">
      <Svg id="chat" w="14" h="16" class="question-icon-19rg78" />

      <div>
        Have questions?
        <br />

        <button class="btn-0 txt-r mrg-xs mrg--t" on:click={showIntercom}>Contact us</button>
      </div>
    </div>
  {:else}
    <p class="c-fiord">No Insights...</p>
  {/if}
</aside>

<style>
  aside {
    background: var(--athens);
    padding: 24px 32px;
    width: 280px;
    max-height: 549px;
    overflow: auto;
  }

  .header {
    width: 159px;
    margin: 0 auto 40px;
  }

  .insights {
    --check: var(--green-light-2);
    --check-fill: var(--green);
    z-index: 2;
    gap: 10px;
  }

  .question {
    fill: var(--casper);
    padding: 12px 16px;
    border-radius: 6px;
  }

  :global(.question-icon-19rg78) {
    margin: 3px 10px 0px 0;
  }
</style>
