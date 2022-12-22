<script>
  import nftSvg from './nft.svg'
</script>

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

<style>
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
