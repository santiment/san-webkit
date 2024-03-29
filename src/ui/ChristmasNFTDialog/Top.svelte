<script>
  import { PageName, trackNftBattleLinkClick } from '@/analytics/events/nftbattle'
  import Svg from '@/ui/Svg/svelte'
  import Li from './Li.svelte'
  import { Page } from './types'

  const SOCIALS = [
    ['twitter', 'https://twitter.com/', '#56A8DC'],
    ['discord', 'https://discord.com/', '#5B65EA'],
    ['reddit', 'https://www.reddit.com/', '#EB5528'],
    ['telegram', 'https://telegram.org/', '#5AAADB'],
  ]
</script>

<p>
  So how do you increase your chances of getting one of these gorgeous NFTs with Pro plan access? To
  choose the top 10, our team will be looking for:
</p>

<ul class="column">
  <Li>
    <div>
      <strong>Innovation.</strong> Is your idea unique and valuable based on current market conditions?
    </div>
  </Li>

  <Li>
    <div>
      <strong>Feasibility.</strong> Could your idea be integrated into a real trading strategy?
    </div>
  </Li>
  <Li>
    <div>
      <strong>Popularity.</strong> How much have people upvoted or commented on your idea?
    </div>
  </Li>
</ul>

<h3 class="body-1 txt-m mrg-xl mrg--b">Testing Tip</h3>

<p>
  One way to find out if your idea has value is to create a signal on our SanR platform for crypto
  market forecasting. SanR stores signals (market calls) on the blockchain, so you can see actual
  performance in real time.
</p>

<ul class="column">
  <Li>
    <div>
      Go to <a
        href="https://sanr.app/"
        on:click={trackNftBattleLinkClick}
        target="_blank"
        rel="noopener noreferrer"
        class="link-pointer"
        data-source={PageName[Page.Top]}>sanr.app</a
      >. Click “Connect Wallet” to connect your Metamask account
    </div>
  </Li>

  <Li>Click “Create Signal” to open a signal based on your idea</Li>
  <Li
    >Click on “Participate” and add the URL for your published Insight. That way, our team can
    easily check the performance as well!</Li
  >
</ul>

<h3 class="body-1 txt-m mrg-xl mrg--b">Engagement Tip</h3>

<p>
  To boost your popularity score, focus on getting comments and likes. Drive as many views as
  possible to your Insight via links on social media:
</p>

<div class="socials row">
  {#each SOCIALS as [social, href, bg]}
    <a {href} target="_blank" rel="noopener noreferrer" class="social row v-center border">
      <span class="circle row hv-center" style="background:{bg}"
        ><Svg id={social} w="12" h="10" /></span
      >
      {social}</a
    >
  {/each}
</div>

<style lang="scss">
  ul {
    margin: 20px 0 40px;
    gap: 16px;
  }

  strong {
    font-weight: bold;
  }

  .socials {
    fill: var(--white);
    gap: 12px;
    margin: 20px 0 0;
  }

  .social {
    padding: 10px 12px;
    text-transform: capitalize;
    gap: 8px;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
</style>
