<script>
  import { getSEOLinkFromIdAndTitle } from '@/utils/url'

  import Check from './Check.svelte'
  import nftSvg from './nft.svg'
  import celebSvg from './celeb.svg'

  export let insights = []

  $: hasInsights = insights.length > 0
</script>

<aside>
  <div class="header txt-center">
    <img src={hasInsights ? celebSvg : nftSvg} alt="Aside" class="mrg-xl mrg--b" />
    <h3 class="body-1 txt-m">
      {hasInsights ? 'Wooo! Your Insight is in the Battle!' : 'Welcome to the NFT battle!'}
    </h3>
  </div>

  <h4 class="txt-m mrg-m mrg--b c-fiord">Insights ({insights.length})</h4>

  {#if hasInsights}
    {#each insights as { id, title }}
      <div class="insights column relative">
        <a
          href="https://insights.santiment.net/read/{getSEOLinkFromIdAndTitle(id, title)}"
          target="_blank"
          rel="noopener noreferrer"
          class="row"
        >
          <Check small class="mrg-s mrg--r" />
          <span class="line-clamp">
            {title}
          </span>
        </a>
      </div>
    {/each}
  {:else}
    <p class="c-fiord">
      To participate in the battle,
      <a
        href="https://insights.santiment.net/new?ref=nftbattle"
        class="link-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Create an Insight
      </a>
    </p>
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
    width: 155px;
    margin: 0 auto 40px;
  }

  .insights {
    --check: var(--green-light-2);
    --check-fill: var(--green);
    z-index: 2;
    gap: 10px;
  }
</style>
