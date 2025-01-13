<script>import Svg from './../../ui/Svg/svelte';
import { showChristmasNFTDialog } from './../../ui/ChristmasNFTDialog/Dialog.svelte';
import { IsMobile } from './../../stores/responsive';
import battle from './battle.svg';
import bgMobile from './banner-bg-mobile.svg';
import bg from './banner-bg.svg';
</script>

<section class="row justify">
  <div class="info column">
    <div class="logo row v-center">
      <Svg illus id="santiment" w="86" h="16" class="santiment-_WxpMn" />
      <img src={battle} alt="xmas" class="mrg-s mrg--l" />
    </div>
    <h3 class="h3 txt-m nowrap">Predict next market <br /> move. Win NFT!</h3>
    <p class="body-2 mrg-xl mrg--b nowrap">
      Get 3 free months of Sanbase Pro {#if $IsMobile}<br /> plus{:else}plus <br />{/if} 18% lifetime
      discount
    </p>
    {#if $IsMobile}
      <div class="tip row">
        <Svg id="light" w="16" h="22" class="light-HsTaOf mrg-m mrg--r" />
        <span class="body-2 c-fiord">
          Head to Sanbase’s desktop version for the ability to participate in the Battle
        </span>
      </div>
    {:else}
      <button class="btn-1 body-3" on:click={showChristmasNFTDialog}>Join the Battle!</button>
    {/if}
  </div>
  <div class="relative">
    <img src={$IsMobile ? bgMobile : bg} alt="xmas" class="bg" />
  </div>
</section>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
section {
  background: var(--mirage);
  border-radius: 8px;
  height: 295px;
  overflow: hidden;
}

.info {
  padding: 23px 0 32px 40px;
}

.logo {
  margin-bottom: 26px;
}

:global(.santiment-_WxpMn) {
  --black: var(--white);
  margin-bottom: 3px;
}

h3 {
  margin-bottom: 10px;
}

h3,
p {
  color: var(--white);
}

button {
  max-width: 132px;
}

.bg {
  position: absolute;
  top: -100px;
  right: -100px;
}

:global(body:not(.desktop)) section {
  height: 661px;
  max-width: 421px;
  flex-direction: column-reverse;
}
:global(body:not(.desktop)) .bg {
  width: calc(100% + 200px);
  top: -100px;
  right: -100px;
}
:global(body:not(.desktop)) .info {
  padding: 0 24px 32px 24px;
}
:global(body:not(.desktop)) .logo {
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}
:global(body:not(.desktop)) h3 {
  margin-bottom: 12px;
}
:global(body:not(.desktop)) p {
  margin-bottom: 32px;
}
:global(body:not(.desktop)) h3,
:global(body:not(.desktop)) p {
  text-align: center;
  white-space: normal;
}
:global(body:not(.desktop)) .tip {
  padding: 12px 16px;
  background: var(--purple-light-1);
  border-radius: 8px;
}
:global(body:not(.desktop)) :global(.light-HsTaOf) {
  fill: var(--purple);
}</style>
