<script>
  import Svg from '@/ui/Svg/svelte'
  import nftSvg from './nft.svg'
</script>

<div class="wrapper row">
  <main class="column">
    <nav class="breadcrumbs row v-center">
      <button class="page btn">Publish Insight</button>
      <Svg id="arrow-right" h="10" w="5.5" />
      <button class="page btn">Get into Top Ten</button>
      <Svg id="arrow-right" h="10" w="5.5" />
      <button class="page btn">What’s now?</button>
    </nav>

    <h2 class="h4 txt-m mrg-xl mrg--b">Publish your Insight</h2>

    <p>
      Our Insights page is a place to find out about the latest crypto discoveries of our community.
      We are analyzing on-chain, social and development data to generate insight to provide
      perspective for making investment decisions.
    </p>

    <nav class="row justify mrg-a mrg--t">
      <button class="pagination btn row v-center">
        <Svg id="pointer" w="14" h="8" class="$style.back" />
        Back
      </button>

      <button class="pagination btn row v-center">
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

<style>
  .wrapper {
    flex: 1;
  }

  main {
    flex: 1;
    padding: 24px 48px;
  }

  .breadcrumbs {
    gap: 13.5px;
    margin: 0 0 30px;
  }

  .page {
    --color: var(--fiord);
    --color-hover: var(--green);
  }

  .pagination {
    gap: 8px;
    margin: 50px 0 0;
    --fill: var(--waterloo);
    --color-hover: var(--green);
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
</style>
