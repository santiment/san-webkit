<script lang="ts">
  import { trackNftBattleLinkClick, trackNftBattleStartGame } from '@/analytics/events/nftbattle'
  import Svg from '@/ui/Svg/svelte'
  import Li from './Li.svelte'
  import { Page } from './types'
  import { queryCurrentUserInsights, startGame } from './api'
  import introSvg from './intro.svg'

  export let page: Page
  export let closeDialog

  function onStart() {
    queryCurrentUserInsights().then((currentUser) => {
      if (!currentUser) {
        window.__onLinkClick?.('/login')
        return closeDialog()
      }

      page = Page.Insight
      trackNftBattleStartGame()
      window.onNftGameStart?.()
      return startGame()
    })
  }
</script>

<main class="column body-2" style="--svg:url({introSvg})">
  <button class="close btn" on:click={closeDialog}>
    <Svg id="close" w="16" />
  </button>

  <h2 class="h3 txt-m txt-center mrg-xl mrg--b">San NFT Christmas Game!</h2>

  <p class="txt-center c-fiord">
    Think you know where crypto is headed next? Got a killer analysis you want to show off? Enter it
    in our Santiment Holiday Insight competition and win 1 of only 10 special NFTs that unlock <span
      class="txt-b">three free months of Sanbase PRO</span
    >
    alongside a <span class="txt-b">lifetime 18% discount!</span>
  </p>

  <ul class="column c-rhino">
    <Li>
      <span>
        Publish your trading idea on
        <a
          href="https://insights.santiment.net/"
          on:click={trackNftBattleLinkClick}
          target="_blank"
          rel="noopener noreferrer"
          class="link-pointer"
          data-source="intro">insights.santiment.net</a
        >
        by <br /> January 6, 2023
      </span>
    </Li>

    <Li>Get into the top ten insights by <br /> using just three criteria</Li>

    <Li>Claim your NFT – We’ll announce 10 winners at the end of January 2023</Li>
  </ul>

  <button class="start btn-1 btn--l" on:click={onStart}>Start the Game</button>
</main>

<style>
  main {
    padding: 68px;
    background: var(--svg) no-repeat center 100%;
    flex: 1;
    height: 100%;
  }

  p {
    max-width: 490px;
    margin: 0 auto 32px;
  }

  ul {
    max-width: 313px;
    margin: 0 auto;
    gap: 24px;
    --check: var(--fiord);
    --check-fill: none;
  }

  .start {
    margin: 40px auto 0;
    padding: 8px 44px;
  }

  .close {
    position: absolute;
    top: 22px;
    right: 24px;
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }
</style>
