<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Li from './Li.svelte'
</script>

<p>
  See your Insight among the latest and best crypto discoveries! Our Insights page is where others
  in the crypto community share analyses of on-chain, social and development data – all to provide
  perspective (and spark ideas) for making investment decisions.
</p>

<ul class="column">
  <Li>
    <span>
      Go to <a href="/" class="link-pointer">insights.santiment.net</a>. Click “Become an Author”
    </span>
  </Li>

  <Li>
    <span>
      Write your Insight. Include images and embed chart layouts. To learn more about how to create
      a good Insight, visit our <a href="/" class="link-pointer">Academy page</a>
    </span>
  </Li>
  <Li>
    <div>
      Publish your Insight with the NFTbattle toggle turned “On”

      <div class="error row v-center border">
        <Svg id="error" w="16" class="mrg-s mrg--r" />
        If you don’t turn this toggle on, your Insight won’t be counted
      </div>
    </div>
  </Li>
  <Li>You can publish as many Insights as you want. Our team will select the best!</Li>
</ul>

<style lang="scss">
  ul {
    margin: 20px 0 0;
    gap: 16px;
    --check: var(--green-light-1);
    --check-fill: var(--green);
  }

  .error {
    padding: 6px 10px;
    margin: 6px 0 0;
    box-shadow: 0px 4px 8px rgba(24, 27, 43, 0.08);
    fill: var(--red);
  }
</style>
