<script>
  import Svg from '@/ui/Svg/svelte'

  export let insights = []

  $: hasInsights = insights.length > 0
</script>

{#if hasInsights}
  <p>🎉 You’re in the Battle now! Thank you for competing.</p>
{:else}
  <p>
    ⚠️ To participate in the battle, <a
      href="https://insights.santiment.net/new"
      class="link-pointer">Create an Insight</a
    >
  </p>
{/if}

<p class="mrg-s mrg--t mrg--b">
  Our team will choose the ten best ideas and reward winners with NFTs that not only look fantastic,
  but also unlock 3 free months of Sanbase Pro alongside an 18% lifetime discount on any Sanbase
  plan.
</p>

<p>
  <a href="/" class="link-pointer">Learn more about the Santiment NFT utility</a>
</p>

<div class="hint border relative mrg-xl mrg--t">
  <Svg id="info" w="16" class="$style.icon mrg-m mrg--r" />

  <div>
    <p class="txt-m">
      Remember! You can create as many Insights as you want. Increase your chances of victory by
      creating more Insights!
    </p>

    <p class="mrg-s mrg--t">
      <a href="https://insights.santiment.net/new" class="link-pointer">Create Insight</a>
    </p>
  </div>
</div>

<style>
  .hint {
    padding: 12px 16px 12px 44px;
    fill: var(--yellow);
    --border: var(--yellow);
  }

  .icon {
    position: absolute;
    top: 13px;
    left: 16px;
  }
</style>
