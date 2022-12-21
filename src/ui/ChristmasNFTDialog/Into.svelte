<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import introSvg from './intro.svg'

  export let route: string
  export let closeDialog
</script>

<main class="column" style="--svg:url({introSvg})">
  <button class="close btn" on:click={closeDialog}>
    <Svg id="close" w="16" />
  </button>

  <h2 class="h3 txt-m txt-center mrg-xl mrg--b">San NFT Christmas Game!</h2>

  <p class="txt-center c-fiord">
    We are hosting a Christmas event to reward the best Sanbase crypto analysts in our community!
    Participate in our Insight writing competition, and get 1 of 10 NFT’s that unlock three months
    of Sanbase PRO access alongside a lifetime 18% discount.
  </p>

  <ul class="c-rhino">
    <li class="row">
      <Svg id="checkmark-circle-filled" w="24" />
      <span>
        Publish your trading idea on
        <a href="https://insights.santiment.net" class="link-pointer">insights.santiment.net</a>
      </span>
    </li>

    <li class="row">
      <Svg id="checkmark-circle-filled" w="24" />
      Get into the top ten insights by using just three criteria
    </li>

    <li class="row">
      <Svg id="checkmark-circle-filled" w="24" />
      Claim your NFT. We’ll announce 10 winners on January 9, 2023
    </li>
  </ul>

  <button class="start btn-1 btn--l" on:click={() => (route = 'insight')}>Start the Game</button>
</main>

<style>
  main {
    padding: 68px;
    background: var(--svg) no-repeat;
    flex: 1;
  }

  p {
    max-width: 490px;
    margin: 0 auto 32px;
  }

  ul {
    max-width: 300px;
    fill: var(--fiord);
    margin: 0 auto;
  }

  li {
    gap: 12px;
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
