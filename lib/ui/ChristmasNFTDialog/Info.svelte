<script>import { PageName, trackNftBattleLinkClick } from './../../analytics/events/nftbattle';
import Svg from './../../ui/Svg/svelte';
import Li from './Li.svelte';
import Players from './Players/index.svelte';
import { Page } from './types';</script>

<p class="intro">
  Everything comes to an end, and our game is no exception. Right now, our team is reviewing all of
  the entries you’ve shared and will choose the ten best. Check back at the end of January to see
  the winners!
</p>

<Players />

<h2 class="h4 about txt-m">About the Santiment Holiday NFT</h2>

<p class="mrg-s mrg--b">
  Our first collection of Santiment NFTs is here! Catch all the details below – plus a spoiler for
  the upcoming New Year.
</p>

<p class="mrg-m mrg--t mrg--b">
  The Santiment team will choose the ten best Insights and reward winners with:
</p>

<ul class="rewards column">
  <li><span>🎨</span> An NFT as a beautiful piece of Christmas art</li>
  <li><span>🍭</span> Three free months of Sanbase Pro access (a $147 value)</li>
  <li><span>🚀</span> 18% lifetime discount for Sanbase Pro and Sanbase Pro+</li>
</ul>

<h2 class="h4 txt-m mrg-xl mrg--b">Game rules</h2>

<div class="hint border row v-center">
  <Svg id="warning" w="13" />
  <p>
    <strong class="txt-m">Competition dates:</strong> December 23, 2022 - January 7, 2023
  </p>
</div>

<p>
  To ring in the New Year, the Santiment team is hosting an epic battle where you can share your
  best trading ideas and win NFTs. To compete:
</p>

<div class="row mrg-m mrg--t mrg--b">
  ⭐
  <p class="mrg-s mrg--l">
    Publish an Insight with your trading idea and set the NFTbattle toggle “On” at
    <a
      href="https://insights.santiment.net/"
      on:click={trackNftBattleLinkClick}
      target="_blank"
      rel="noopener noreferrer"
      class="link-pointer"
      data-source={PageName[Page.Info]}>insights.santiment.net</a
    >
  </p>
</div>

<p class="mrg-s mrg--t">To increase your chances of reaching the top ten:</p>

<ul class="chances column">
  <Li small>
    <div>
      Prove that your idea can work in the real trading world. Create a Signal on sanr.app and track
      your performance. Attach the URL to your published Insight and we’ll follow it too.
    </div>
  </Li>

  <Li small>
    <div>
      Promote your Insight. Let people know about your idea and encourage others to make their own
      signals based on it. Number of comments and likes will have influence.
    </div>
  </Li>
</ul>

<p class="mrg-s mrg--t mrg--b">
  The ten NFT prize winners will be announced at the end of January. Please check back!
</p>

<p>Other participants will get a one-time 18% discount on a yearly or monthly Sanbase Pro plan.</p>

<div class="bonus border">
  <span class="c-green">The Bonus!</span> We will be giving away 3 more NFT’s for Signal creators on
  <a
    href="https://sanr.app/"
    on:click={trackNftBattleLinkClick}
    target="_blank"
    rel="noopener noreferrer"
    class="link-pointer"
    data-source={PageName[Page.Info]}>sanr.app</a
  >. Only the best predictions based on #nftbattle Insights will be considered! The more closed
  signals with the positive performance you will get in the end, the more chances you have to win a
  prized NFT!
</div>

<style >.intro {
  margin: 0 0 48px;
}

.about {
  margin: 64px 0 24px;
}

.rewards {
  gap: 6px;
  margin: 0 0 48px 8px;
}
.rewards span {
  margin-right: 8px;
}

.hint,
.bonus {
  padding: 12px 16px;
}

.hint {
  --border: var(--yellow);
  fill: var(--orange);
  gap: 8px;
  margin: 0 0 20px;
}

.chances {
  gap: 12px;
  margin: 12px 0;
  --check: var(--green-light-2);
}

.bonus {
  --border: var(--green-light-3);
  margin: 20px 0 48px;
}</style>
