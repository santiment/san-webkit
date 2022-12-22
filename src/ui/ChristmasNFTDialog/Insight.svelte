<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Breadcrumbs from './Breadcrumbs.svelte'
  import Check from './Check.svelte'
  import { Page } from './types'
  import nftSvg from './nft.svg'

  export let page: Page
</script>

<div class="wrapper row">
  <main class="column">
    <Breadcrumbs bind:page />

    <h2 class="h4 txt-m mrg-xl mrg--b">Publish your Insight</h2>

    <p>
      See your Insight among the latest and best crypto discoveries! Our Insights page is where
      others in the crypto community share analyses of on-chain, social and development data – all
      to provide perspective (and spark ideas) for making investment decisions.
    </p>

    <ul>
      <li class="row">
        <Check />
        <span>
          Go to <a href="/" class="link-pointer">insights.santiment.net</a>. Click “Become an
          Author”
        </span>
      </li>

      <li class="row">
        <Check />
        <span>
          Write your Insight. Include images and embed chart layouts. To learn more about how to
          create a good Insight, visit our <a href="/" class="link-pointer">Academy page</a>
        </span>
      </li>
      <li class="row">
        <Check />
        <div>
          Publish your Insight with the NFTbattle toggle turned “On”

          <div class="error row v-center border">
            <Svg id="error" w="16" class="mrg-s mrg--r" />
            If you don’t turn this toggle on, your Insight won’t be counted
          </div>
        </div>
      </li>
      <li class="row">
        <Check />
        You can publish as many Insights as you want. Our team will select the best!
      </li>
    </ul>

    <nav class="row justify mrg-a mrg--t">
      <button
        class="pagination btn row v-center"
        class:disabled={page < Page.Top}
        on:click={() => (page -= 1)}
      >
        <Svg id="pointer" w="14" h="8" class="$style.back" />
        Back
      </button>

      <button class="pagination btn row v-center" on:click={() => (page += 1)}>
        Next
        <Svg id="pointer" w="14" h="8" />
      </button>
    </nav>
  </main>

  <aside>
    <div class="header txt-center">
      <img src={nftSvg} alt="Aside" class="mrg-xl mrg--b" />
      <h3 class="body-1 txt-m">Welcome to the NFT battle!</h3>
    </div>

    <h4 class="txt-m mrg-m mrg--b c-fiord">Insights (0)</h4>
    <p class="c-fiord">
      To participate in the battle,
      <a
        href="https://insights.santiment.net/new?ref=nftbattle"
        class="link-pointer"
        rel="noopener noreferrer"
      >
        Create an Insight
      </a>
    </p>
  </aside>
</div>

<style lang="scss">
  .wrapper {
    flex: 1;
  }

  main {
    flex: 1;
    padding: 24px 48px;
    max-height: 546px;
    overflow: auto;
  }

  .pagination {
    gap: 8px;
    margin: 50px 0 0;
    background: none !important;
    --fill: var(--waterloo);
    --color-hover: var(--green);

    &.disabled {
      fill: var(--mystic);
    }
  }
  .back {
    transform: rotate(180deg);
  }

  aside {
    background: var(--athens);
    padding: 24px 32px;
    width: 280px;
  }

  .header {
    width: 155px;
    margin: 0 auto 40px;
  }

  ul {
    margin: 20px 0 0;
    --check: var(--green-light-1);
    --check-fill: var(--green);
  }

  li {
    margin: 0 0 16px;
  }

  .error {
    padding: 6px 10px;
    margin: 6px 0 0;
    box-shadow: 0px 4px 8px rgba(24, 27, 43, 0.08);
    fill: var(--red);
  }
</style>
